<template>
  <div class="contact">
    <div class="redes">
      <h3>CONTACTO</h3>
      <div>
        <div class="dato">
          <i class="icon-phone"></i>
          <h4>+593 991425988</h4>
        </div>
        <div class="dato">
          <i class="icon-envelop"></i>
          <h4>varvlab@gmail.com</h4>
        </div>
        <a class="dato" href="https://www.facebook.com/varvlab">
          <i class="icon-facebook"></i>
          <h4>/varvlab </h4>
        </a>
        <a class="dato" href="https://www.instagram.com/varvlab/">
          <i class="icon-instagram"></i>
          <h4>@varvlab</h4>
        </a>
        <a class="dato" href="https://www.youtube.com/user/indeterminacion">
          <i class="icon-youtube"></i>
          <h4>VARV</h4>
        </a>
      </div>
    </div>
    <div class="formnow">
      <h3>COTIZA TU PROYECTO</h3>
      <form action="">
        <input class="formname" type="text" placeholder="Nombre">
        <input class="formemail" type="email" placeholder="Email">
        <textarea class="formtext"></textarea>
        <button class="formbutton">ENVIAR</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
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

.icon-phone:before {
  content: "\e942";
}
.icon-envelop:before {
  content: "\e945";
}
.icon-google:before {
  content: "\ea8a";
}
.icon-facebook:before {
  content: "\ea90";
}
.icon-facebook2:before {
  content: "\ea91";
}
.icon-instagram:before {
  content: "\ea92";
}
.icon-twitter:before {
  content: "\ea96";
}
.icon-youtube:before {
  content: "\ea9d";
}

.contact {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.contact h3 {
  font-family: "Brandon Text", sans-serif;
  font-size: 25px;
  font-weight: 400;
  color: black;
}

.redes {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
}

.dato {
  display: flex;
  justify-content: start;
  align-items: flex-start;
  margin-top: 25px;
}

.dato i{
  margin: 0;
  font-size: 30px;
  vertical-align: baseline;
  color: black;
}

.dato h4{
  margin: 0;
  margin-left: 20px;
  font-family: "Lato", sans-serif;
  font-size: 25px;
  font-weight: 400;
  vertical-align: baseline;
  color: black;
}

.formnow {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
}

.formnow form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.formname {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  background: transparent;
  border: solid black 2px;
  color: black;
  box-sizing: border-box;
  font-family: "Montserrat";
  font-size: 16px;
  padding: 10px;
}
.formname:focus {
  outline: none;
  outline-width: 0;
  box-shadow: none;
}

.formemail {
  width: 100%;
  height: 50px;
  margin-top: 15px;
  background: transparent;
  border: solid black 2px;
  color: black;
  box-sizing: border-box;
  font-family: "Montserrat";
  font-size: 16px;
  padding: 10px;
}

.formemail:focus {
  outline: none;
  outline-width: 0;
  box-shadow: none;
}

.formtext {
  width: 100%;
  height: 150px;
  margin-top: 15px;
  background: transparent;
  border: solid black 2px;
  color: black;
  box-sizing: border-box;
  resize: none;
  font-family: "Montserrat";
  font-size: 16px;
  padding: 10px;
}

.formtext:focus {
  outline: none;
  outline-width: 0;
  box-shadow: none;
}

.formbutton {
  width: 20%;
  height: 50px;
  margin-top: 20px;
  background: black;
  border: solid white 2px;
  color: white;
  font-family: "Montserrat";
  font-size: 16px;
}

.formbutton:hover {
  background: white;
  border: 1px solid black;
  color: black;
}

@media (max-width: 1300px) {
  .formnow {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 45%;
}

.formbutton {
  font-size: 12px;
}
}

@media (max-width: 950px) {
.contact {
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.formnow {
  width: 70%;
  margin-bottom: 30px;
}

.formbutton{
  width: 30%;
}
}

@media (max-width: 530px) {
  .formnow {
  width: 80%;
}
}

</style>