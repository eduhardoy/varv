<template>
  <a class="whatsapp" href="https://api.whatsapp.com/send?phone=543794289113&text=Hola,%20necesitaria%20una%20cotizaci%C3%B3n">
    <i class="icon-whatsapp">
    </i>
  </a>
</template>

<script>
export default {
  name: "Wapp",
};
</script>

<style>
@font-face {
  font-family: 'icomoon';
  src:  url('../../../public/fonts/icomoon.eot?uus47');
  src:  url('../../../public/fonts/icomoon.eot?uus47#iefix') format('embedded-opentype'),
    url('../../../public/fonts/icomoon.ttf?uus47') format('truetype'),
    url('../../../public/fonts/icomoon.woff?uus47') format('woff'),
    url('../../../public/fonts/icomoon.svg?uus47#icomoon') format('svg');
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

.icon-whatsapp:before {
  content: "\ea93";
}

.whatsapp {
  z-index: 3;
  bottom: 70px;
  right: 20px;
  width: 60px;
  height: 60px;
  font-size: 40px;
  position: fixed;
  border-radius: 50px;
  border-width: 0px;
  color: #ffffff;
  background-color: #24d366;
  box-shadow: none;
  cursor: pointer;    outline: 0;
  vertical-align: baseline;
  display: flex;
  align-items: center;
  justify-content: center;
}

.whatsapp i{
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
}

</style>