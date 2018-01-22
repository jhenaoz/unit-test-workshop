function isLeapYear(year) {
    var isLeap = year%4 === 0;
    return isLeap;
}

module.exports = isLeapYear;