const chainMaker = {
  chain: [],
  getLength() {
    return chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if(this.chain.length >= position && position > 0) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error();
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain;
    this.chain = [];
    return result.join('~~');
  }
};

module.exports = chainMaker;
