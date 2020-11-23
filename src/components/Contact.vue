<template>
  <div class="contact">
    <div class="redes">
      <h3>CONTACTO</h3>
      <ul>
        <li>+593 991425988</li>
        <li>varvlab@gmail.com </li>
        <li>VARV</li>
        <li>/varvlab </li>
        <li>@varvlab </li>
      </ul>
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
.contact {
  width: 100%;
  margin-top: 50px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.contact h3 {
  font-family: "Brandon Text", sans-serif;
  font-size: 22px;
  font-weight: 400;
}

.redes {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
}

.redes ul{
  margin: 0;
  padding: 0;
  text-align: justify;
}

.redes ul li{
  margin: 0;
  margin-top: 20px;
  padding: 0;
  font-size: 25px;
  font-weight: 300;
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

.redes ul li{
  font-size: 20px;
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