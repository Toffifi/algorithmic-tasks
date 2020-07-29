module.exports = class DepthCalculator {
    
    calculateDepth(arr, curDepth = 1) {
        let depth = curDepth;
        for(let i of arr) {
            if (Array.isArray(i)) {
                const innerDepth = this.calculateDepth(i, curDepth + 1);
                if (innerDepth > depth) {
                    depth = innerDepth;
                }
            }
        }
        return depth;
    }
};