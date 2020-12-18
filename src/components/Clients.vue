<template>
  <div class="clients">
    <div class="container">
      <h2>NUESTROS CLIENTES</h2>
      <ul>
        <li><img src="../assets/cliente4.png" alt="" /></li>
        <li><img src="../assets/cliente3.png" alt="" /></li>
        <li><img src="../assets/cliente1.png" alt="" /></li>
        <li><img src="../assets/cliente2.jpeg" alt="" /></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Clients",
};
</script>

<style>
@font-face {
  font-family: 'Brandon';
  src:  url('../assets/Fonts/Brandon_med.otf') format('woff');
  font-weight: normal;
  font-style: normal;
}

.container {
  flex: 1%;
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.clients {
  background-color:#fafafa;
  margin-bottom: 40px;
}

.clients h2 {
  text-align: center;
  margin: 0;
  margin-top: 40px;
  margin-bottom: 10px;
  color: black;
  font-family: "Brandon", monospace;
  font-size: 35px;
  font-weight: 400;
}

.clients img {
  height: auto;
  max-height: 100%;
  width: auto;
  max-width: 100%;
}

.clients ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding: 0;
  margin-bottom: 40px;
}

.clients ul li {
  background-color: white;
  box-shadow: 0px 0px 14px 0px #7A7A7A;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  margin: 20px;
}

@media (max-width: 768px){
  .clients ul li {
  height: 150px;
  width: 150px;
  margin: 10px;
}
}

@media (max-width: 375px){
  .clients ul li {
  height: 150px;
  width: 150px;
  margin: 5px;
  box-shadow: 0px 0px 23px -6px #7A7A7A;
}
}
</style>