module.exports = function repeater(str, options = {}) {
    let string = '';
    for (let i = 0; i < options.repeatTimes ? options.repeatTimes : 1; i++) {
        string += String(str);
        for (let j = 0; j < options.additionRepeatTimes ? options.additionRepeatTimes : 1; j++) {
            string += String(options.addition);
            if(j < options.additionRepeatTimes - 1) {
                string += options.additionSeparator ? options.additionSeparator : '|';                
            }
        }
        if(i < options.repeatTimes - 1) {
            string += options.separator ? options.separator : '+';
        }
    }
    return string;
}