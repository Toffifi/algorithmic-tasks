module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turns = Math.pow(2, disksNumber) - 1;
    const speed = turns / (turnsSpeed / 3600);
    return {turns: turns, seconds: speed};
}