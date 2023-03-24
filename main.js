class Max {

    constructor() {
        this.max = 0;
    }

    maxNumber(minimum, median, maximum) {
        this.max = Math.max(minimum, median, maximum)
    
        return this.max;
    }
    
};

module.exports = Max;