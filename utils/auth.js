const withAuth = (req, res, next) => {
  console.log('being used');
  if (!req.session.loggedIn) {
    alert('Please Login Before Proceed!');
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
