//DECLARE GLOBAL VARIABLES

//APPLY MIDDLEWARE
app.use()//LOG ALL IN-COMING ROUTES
app.use(bodyParser.json())//PARSE ALL FORM DATA TO JSON
app.use(bodyParser.urlencoded({extended: true}))//ALLOW URL-ENCODED TO BE PARSED
app.use(Express.static(path.join(__dirname, './public')))//SERVER YOUR PUBLIC FILES FOR THE FRONTEND

//MOUNT THE API ROUTES
app.use()

//LISTEN ON A SPECIFIC PORT CHECK FOR ERROR
app.listen(port, function (err) {
  if ( !err ) console.log('Server is listening on port: ' + port)
  if ( err )  console.log('Server Crashed!')
})
