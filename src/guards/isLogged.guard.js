function IsLoggedGuard(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("LoggedUser")) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next("/admin"); // allow to enter route
  } else {
    next(); // go to '/login';
  }
}

export default IsLoggedGuard;
