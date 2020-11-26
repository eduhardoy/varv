<template>
  <div class="container-login">
    <div class="wrap-login">
      <form class="login-form" action="">
        <span class="login-form-logo"></span>
        <span class="login-form-title"> Log in</span>
        <div class="form-wrap-input">
          <input
            type="text"
            class="form-input"
            placeholder="Username"
            name="username"
          />
        </div>
        <div class="form-wrap-input">
          <input
            type="password"
            class="form-input"
            placeholder="Password"
            name="password"
          />
        </div>
        <div class="form-container-btn">
          <button class="form-btn" v-on:click.prevent="goToAdminHome">
            Login
          </button>
        </div>
      </form>
    </div>
    <router-view />
  </div>
</template>

<script>
/**
 * TODO
 * Post Login
 * Save Token
 * If token exist and is valid push to AdminHome
 */
export default {
  name: "AdminLogin",
  methods: {
    goToAdminHome() {
        localStorage.setItem("LoggedUser","test")
      this.$router.push("/admin");
    },
  },
};
</script>

<style>
.container-login {
  min-height: 95vh;
  min-width: 95vw;
  background-image: url(../../assets/devices.png);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.container-login::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.9);
}

.wrap-login {
  width: 500px;
  border-radius: 10px;
  overflow: hidden;
  padding: 55px 55px 37px 55px;
  background: -webkit-linear-gradient(top, #7579ff, #b224ef);
}

.login-form {
  width: 100%;
}

.login-form-logo {
  font-size: 60px;
  color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #fff;
  margin: 0 auto;
}

.login-form-title {
  font-family: Poppins-Medium;
  font-size: 30px;
  color: #fff;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  display: block;
  padding-bottom: 34px;
  padding-top: 27px;
}

.form-wrap-input {
  width: 100%;
  position: relative;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  margin-bottom: 30px;
}

.form-input {
  font-family: Poppins-Regular;
  font-size: 16px;
  color: #ffff;
  line-height: 1.2;
  display: block;
  width: 100%;
  height: 45px;
  background: transparent;
  padding: 0 5px 0 38px;
  outline: none;
  border: none;
  overflow: visible;
}

.form-input::placeholder {
  color: #ffff;
}

.form-container-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.form-btn {
  font-family: Poppins-Medium;
  font-size: 16px;
  color: #555555;
  line-height: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-width: 120px;
  height: 50px;
  border-radius: 25px;
  position: relative;
  transition: 0.4s;
}

.form-btn:hover {
  transition: 0.4s;
  color: #fff;
  background: -webkit-linear-gradient(bottom, #7579ff, #b224ef);
  /* background: linear-gradient(bottom, #7579ff, #b224ef); */
}

button {
  outline: none !important;
  border: none;
}
</style>