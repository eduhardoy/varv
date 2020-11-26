function AuthGuard(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("LoggedUser")) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next("/admin/login"); // go to '/login';
  }
}

export default AuthGuard;
