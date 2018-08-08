module.exports = function(req, res, next){
  if(!req.user || req.user.usertypeId === 1){
    req.flash('error', 'You must be logged in as an instructor or an administrator to view this page');
    res.redirect('/auth/login');
  }
  else{
    next();
  }
}
