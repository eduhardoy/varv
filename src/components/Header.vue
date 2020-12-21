<template>
  <header class="header">
    <div class="logo">
      <a href="/">
        <img alt="Vue logo" src="../assets/logo2.png" />
      </a>
    </div>
    <div class="menu" v-bind:class="{ isActive: isActive }">
      <button
        class="notshow"
        :class="{ closebutton: isActive }"
        @click="closeMenu()"
      >
        X
      </button>
      <ul class="nav">
        <li class="menu-elements" @click="closeMenu()">
          <a href="/#about" @click="aboutClicked">Nosotros</a>
        </li>
        <li class="menu-elements" @click="closeMenu()">
          <a href="/#collections" @click="collectionClicked">Proyectos</a>
        </li>
        <li class="menu-elements" @click="closeMenu()">
          <a href="/#prices" @click="pricesClicked">Precios</a>
        </li>
        <li class="menu-elements" @click="closeMenu()">
          <a href="/#contact" @click="contactClicked">Contacto</a>
        </li>
      </ul>
    </div>
    <i class="icon-menu burger-button" @click="openMenu()"></i>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    closeMenu() {
      this.isActive = false;
    },
    openMenu() {
      this.isActive = true;
    },
    aboutClicked() {
      this.$gtag.event('nav-clicked', {
        'event_category': "nav-about-clicked",
        'event_label': "About Clicked"
      })
    },
    collectionClicked() {
      this.$gtag.event('nav-clicked', {
        'event_category': "nav-collection-clicked",
        'event_label': "Collection Clicked"
      })
    },
    pricesClicked() {
      this.$gtag.event('nav-clicked', {
        'event_category': "nav-prices-clicked",
        'event_label': "Prices Clicked"
      })
    },
    contactClicked() {
      this.$gtag.event('nav-clicked', {
        'event_category': "nav-contact-clicked",
        'event_label': "Contact Clicked"
      })
    },
  },
};
</script>

<style>
@font-face {
  font-family: "icomoon";
  src: url("../../public/fonts/icomoon.eot?uus47");
  src: url("../../public/fonts/icomoon.eot?uus47#iefix")
      format("embedded-opentype"),
    url("../../public/fonts/icomoon.ttf?uus47") format("truetype"),
    url("../../public/fonts/icomoon.woff?uus47") format("woff"),
    url("../../public/fonts/icomoon.svg?uus47#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"],
[class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "icomoon" !important;
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
  width: 70px;
  height: 70px;
  border-radius: 50%;
  color: black;
  display: none;
  align-items: center;
  justify-content: center;
  right: 0;
  font-size: 30px;
  position: absolute;
}

.notshow {
  display: none;
}

.closebutton {
  display: flex;
  position: absolute;
  border-radius: 50%;
  right: 0;
  top: 0;
  z-index: 99;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  font-size: 30px;
  background-color: transparent;
  color: white;
  padding: 10px;
}

.header {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 8px 9px -1px rgba(125, 120, 120, 0.6);
  color: white;
  position: sticky;
  z-index: 5;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  position: relative;
}
.logo img {
  width: auto;
  height: 50px;
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
  padding-right: 5px;
  padding-left: 5px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
}
.menu-elements:hover {
  border-bottom: 2px solid black;
}
.menu-elements a {
  text-decoration: none;
  color: black;
  font-family: "Brandon", sans-serif;
  font-size: 15px;
  text-align: center;
  text-transform: uppercase;
  line-height: 30px;
}

a {
  text-decoration: none;
}

@media screen and (max-width: 1023px) {
  .burger-button {
    display: flex;
  }

  .logo {
    width: 100%;
  }

  .menu {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 8;
    top: 0;
    left: -100vw;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
  }

  .notshow {
    width: 70px;
    height: 70px;
  }

  .menu.isActive {
    left: 0;
    flex-direction: column;
  }

  .nav {
    flex-direction: column;
    padding: 0;
  }
  .menu-elements {
    height: 80%;
    margin: 20px;
    border: none;
  }
  .menu-elements a {
    font-size: 25px;
    color: white;
  }
}
</style>
