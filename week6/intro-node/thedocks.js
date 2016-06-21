// thedocks.js

// This file needs to EXPORT information so we can IMPORT it in another file

// bunch of code that does interesting stuff that drives what we export

function moreStuff (){
    return 'things!'
}

module.exports = {
    user : {
        name : "Bill",
        age : 125,
        city : "LumberjackTown"
    },
    // sandwiches : []
    moreStuff : moreStuff
}