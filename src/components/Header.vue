<template>
  <i class="icon-menu burger-button"></i>
  <header class="header">
    <div class="logo">
      <router-link to="/">
        <img alt="Vue logo" src="../assets/VARVLOGO.png" >
      </router-link>
    </div>
    <div class="menu">
      <ul class="nav">
        <li class="menu-elements"><router-link to="about">Nosotros</router-link></li>
        <li class="menu-elements"><router-link to="tours">Proyectos</router-link></li>
        <li class="menu-elements"><router-link to="contact">Precios</router-link></li>
        <li class="menu-elements"><router-link to="contact">Contacto</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
@font-face {
  font-family: 'icomoon';
  src:  url('../../public/fonts/icomoon.eot?uus47');
  src:  url('../../public/fonts/icomoon.eot?uus47#iefix') format('embedded-opentype'),
    url('../../public/fonts/icomoon.ttf?uus47') format('truetype'),
    url('../../public/fonts/icomoon.woff?uus47') format('woff'),
    url('../../public/fonts/icomoon.svg?uus47#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-menu:before {
  content: "\e9bd";
}

.burger-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: black;
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 6;
  right: 0px;
  top: 0px;
  font-size: 30px;
}

.header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 8px 9px -1px rgba(125, 120, 120, 0.6);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
}
.logo img {
  width: auto;
  height: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40%;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 70px;
  margin: 0;
  list-style-type: none;
}

.menu-elements {
  margin-left: 40px;
  height: 30px;
  padding-right: 10px;
  padding-left: 10px;
} 
.menu-elements:hover {
  border-bottom: 2px solid black;
}
.menu-elements a{
  text-decoration: none;
  color: black;
  font-family: "Brandon", sans-serif;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  line-height: 30px;
}

a{
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  .header{
    height: 60px;
  }
  .burger-button{
    display: flex;
  }

  .logo {
  width: 100%;
}
.logo img {
  width: auto;
  height: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
}

  .menu{
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 4;
    top: 0;
    left: -100vw;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    transition: .4s;
  }

  .menu.is-active {
        left: 0;
    }

  .nav{
    flex-direction: column;
  }
  .menu-elements {
  height: 50%;
  margin: 30px;
  }
  .menu-elements a{
  font-size: 50px;
  color: white;
} 
}
</style>