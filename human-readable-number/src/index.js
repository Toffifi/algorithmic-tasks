module.exports = function toReadable (number) {
    const dictionary = [
        { key: 0, value: "zero" },
        { key: 1, value: "one" },
        { key: 2, value: "two" },
        { key: 3, value: "three" },
        { key: 4, value: "four" },
        { key: 5, value: "five" },
        { key: 6, value: "six" },
        { key: 7, value: "seven" },
        { key: 8, value: "eight" },
        { key: 9, value: "nine" },
        { key: 10, value: "ten" },
        { key: 11, value: "eleven" },
        { key: 12, value: "twelve" },
        { key: 13, value: "thirteen" },
        { key: 14, value: "fourteen" },
        { key: 15, value: "fifteen" },
        { key: 16, value: "sixteen" },
        { key: 17, value: "seventeen" },
        { key: 18, value: "eighteen" },
        { key: 19, value: "nineteen" },
        { key: 20, value: "twenty" },
        { key: 30, value: "thirty" },
        { key: 40, value: "forty" },
        { key: 50, value: "fifty" },
        { key: 60, value: "sixty" },
        { key: 70, value: "seventy" },
        { key: 80, value: "eighty" },
        { key: 90, value: "ninety" }
    ]
    let procNum = number;
    let string = ""
    if (number === 0) {
        return dictionary.find(d => d.key == 0).value;
    }
    if (procNum >= 100) {
        const num = Math.floor(procNum / 100);
        string = dictionary.find(d => d.key == num).value + " hundred ";
        procNum = (procNum % (100 * num));
    }
    if (procNum < 100 && procNum > 19) {
        const num = Math.floor(procNum / 10) * 10;
        string += dictionary.find(d => d.key == num).value + " ";
        procNum = (procNum % num);
    }
    if (procNum <= 19 && procNum > 0) {
        console.log()
        string += dictionary.find(d => d.key == procNum).value;
    }
    return string.trim();
}