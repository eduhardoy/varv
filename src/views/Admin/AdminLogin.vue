<template>
  <div class="container-login">
    <div class="wrap-login">
      <form class="login-form" action="">
        <span class="login-form-logo">
          <img class="logovarv" src="../../assets/logo3.png" alt="">
        </span>
        <span class="login-form-title"> Login here</span>
        <div class="form-wrap-input">
          <input
            type="text"
            class="form-input"
            placeholder="Username"
            name="username"
            v-model="loginData.username"
          />
        </div>
        <div class="form-wrap-input">
          <input
            type="password"
            class="form-input"
            placeholder="Password"
            name="password"
            v-model="loginData.password"
          />
        </div>
        <div class="form-container-btn">
          <button class="form-btn" v-on:click.prevent="login()">
            LOGIN
          </button>
        </div>
      </form>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "AdminLogin",
  data:() => ({
    loginData: {}
  }),
  methods: {
    login(){
      console.log(this.loginData)
      this.$store.dispatch("getToken", this.loginData)
    }
  },
};
</script>

<style>
.container-login {
  min-height: 97vh;
  min-width: 97vw;
  background-image: url(../../assets/centro.png);
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
  background-color: rgba(255, 255, 255, 0.7);
}

.wrap-login {
  width: 500px;
  border-radius: 10px;
  overflow: hidden;
  padding: 55px 55px 37px 55px;
  background: #fff;
  box-shadow: 0px 8px 9px -1px rgba(125, 120, 120, 0.6);
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
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: #fff;
  margin: 0 auto;
  box-shadow: 0px 0px 9px 0px #000000;
}

.logovarv {
  width: 90px;
}

.login-form-title {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  font-size: 30px;
  color: #000;
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
  border-bottom: 2px solid black;
  margin-bottom: 30px;
}

.form-input {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #000;
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
  color: #000;
}

.form-container-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.form-btn {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #fff;
  box-shadow: 0px 8px 9px -1px rgba(125, 120, 120, 0.6);
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
  background-color: #1e1e1e;
}

.form-btn:hover {
  transition: 0.4s;
  color: #fff;
  background: #06D755;
  /* background: linear-gradient(bottom, #7579ff, #b224ef); */
}

button {
  outline: none !important;
  border: none;
}
</style>