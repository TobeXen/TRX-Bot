const fs = require('fs');
const path = './database.json';

function economy() {
    console.log('Economy system has been initialized!');
}

economy.loadData = function() {
    try {
        return JSON.parse(fs.readFileSync(path, 'utf8'));
    } catch (err) {
        return {};
    }
};

economy.saveData = function(data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 4));
};

economy.getBalance = function(userId) {
    const data = this.loadData();
    return data[userId] || 0;
};

economy.addBalance = function(userId, amount) {
    const data = this.loadData();
    if (!data[userId]) data[userId] = 0;
    data[userId] += amount;
    this.saveData(data);
    return data[userId];
};

// NEW: Gets the top 10 wealthiest users
economy.getTop = function() {
    const data = this.loadData();
    // Convert object to array and sort by value (descending)
    return Object.entries(data)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10); // Only take top 10
};

module.exports = economy;