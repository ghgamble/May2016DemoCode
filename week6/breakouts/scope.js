'use strict'

var filepath = require('path').resolve(__dirname, 'data.txt');

function Stark(attributes, callback) {
    // this.name = attributes.name
    // this.weapon = attributes.weapon
    //
    // namedFunc();
    // arrowFunc();
    this.name = 'Sansa';

    this.callback = callback;

    require('fs').readFile(filepath, (error, data) => {
        this.callback(data)
    });

    // console.log(this)
}

new Stark({
    name: 'Aria',
    weapon: 'Slender sword'
})

function namedFunc() {
    console.log(this);
}

var arrowFunc = () => {
    console.log(this);
}
