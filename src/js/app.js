const start = {
    x: 0,
    y: 0,
    calculateDistance: function (target) {
        return ((this.x - target.x) **2 +(this.y - target.y) ** 2) **0.5;
    }
};

const finish = {
    x:3,
    y:4,
};

const distance = start.calculateDistance(finish);
console.log(distance);
