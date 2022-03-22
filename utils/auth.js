const withAuth = (req, res, next) => {
    console.log("being used")
    if(!req.session.loggedIn){
      res.redirect('/login')
    } else {
      next()
    }
   
  };
  
  module.exports = withAuth;