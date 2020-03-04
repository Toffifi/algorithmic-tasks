module.exports = function check(str, bracketsConfig) {
    const stack = {};
    const arr = str.split('');
    let size = 0;
    let start = [ ...bracketsConfig.map(i => i[0]) ];
    let end = [ ...bracketsConfig.map(i => i[1]) ];
    for(let i = 0; i < arr.length; i++){
		const charInd = start.indexOf(arr[i]);
		if (charInd !== -1) {
			if (start[charInd] === end[charInd]) {
				if (stack[size-1] === start[charInd]) {
					size --;
				} else {
					stack[size] = arr[i];
					size++;
				}
			} else {
				stack[size] = arr[i];
				size++;
			}
		} else if (end.indexOf(arr[i]) !== -1) {
			if (size === 0){
				return false;
			}
			let index = end.indexOf(arr[i]);
			if (stack[size-1] === start[index]) {
				size --;
			} else {
				return false;
			}
		}
    }
    return size === 0;
}
