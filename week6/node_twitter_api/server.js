var Twitter = require('twitter'),
    _       = require('underscore')

var client = new Twitter({
  consumer_key: 'MBkUf0Q63aBUtOVLJTKW17OPj',
  consumer_secret: '9cTFVY80oU9JYB5hu1JmTlfNVdRuANuLGSuZ0rDdAeFCq3O0yT',
  access_token_key: '204707730-8CUSGeMYidHhQyxBfgqA0M4u1MUx2XW0mtOEgssH',
  access_token_secret: 'AG7TeyLsFK4opRrwyOy86qu0d4dbU8nccfaCWXQluNnYr'
})

var params = {screen_name: 'nodejs'}
client.get('statuses/user_timeline', params, function (error, tweets, response) {
  if (!error) {
    _.each(tweets,function(e,i){
      console.log(e.text)
    })

  }
})
