module.exports = (req, res, next) => {
  if(req.user && req.user.usertypeId && req.user.usertypeId !== 1) {
    next()
  }
  else{
    req.flash('error', 'You must be logged in as an instructor or an administrator to view this page');
    res.render('403');
  }
}
