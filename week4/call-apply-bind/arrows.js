'use strict'

function Arrow(options) {
    this.tip = options.tip
    this.length = options.length
}

Arrow.prototype = {
    shoot: function() {
        console.log(this)
    },
    store: () => {
        console.log(this)
    }
}

var stoneTipped = new Arrow({
    tip: 'stone',
    length: 3
});

stoneTipped.shoot();
stoneTipped.store();

// console.log(stoneTipped);