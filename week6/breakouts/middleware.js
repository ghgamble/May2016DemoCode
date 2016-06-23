module.exports = {
    logIp: function ( req, res, next ) {
        console.log( req.ip );
        next()
    }
};
