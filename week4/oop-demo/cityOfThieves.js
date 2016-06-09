var Burglar = function(name){
    this.name = name
    this.dead = false
    this.stuff = [ 'license', 'ham', 'knife', 'lockpicking tools', 'flashlight' ]
    
}

Burglar.prototype.steal = function(victim){
    if ( victim.stuff.length !== 0 ) {
        this.stuff.push(victim.stuff.pop())
        console.log(this.name + ' now has ' + this.stuff.join(', ') + '.')
        console.log(victim.name + ' now has ' + victim.stuff.join(', ') + '.')
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    }
    else {
        victim.dead = true
        console.log('hasta la vista, ' + victim.name + '.')
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    }
}


// var alice = new Burglar('Alice')
// var bob   = new Burglar('Bob')
// bob.steal(alice)
// console.log('alice? ', alice)


var cityOfThieves = []


for ( var i = 0; i < 10; i++ ) {
    cityOfThieves.push(new Burglar('person' + i))
}


//Math.random gives a random number between 0 and 1
//Math.rarndom * cityOfThieves.length gives a random decimal number between 0 and 9.99999
//Math.floor(Math.random*cityOfThieves.length) gives a random integer between 0 and the length of the array
var randomTheft = function(){ // Bring out yer dead!
    var burglar = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
    var victim  = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
    if ( burglar !== victim ) {
        burglar.steal(victim)
    }
}
// in a filter function, return true to 
var theftInterval = setInterval(function(){
    cityOfThieves = cityOfThieves.filter(function(burglar){
        if ( burglar.dead === true ) { return false }
        else if ( burglar.dead === false ) { return true }
        // return !burglar.dead  // does the same thing as the two lines above
    })

    if ( cityOfThieves.length > 1 ) {
        randomTheft()
    }
    else {
        console.log(cityOfThieves[0].name + ' says: There can be only one.')
        clearInterval(theftInterval)
    }
}, 2)

