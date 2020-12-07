<template>
  <div class="clients">
    <div class="container">
      <h2>CLIENTES</h2>
      <ul>
        <li><img src="" alt="" /></li>
        <li><img src="" alt="" /></li>
        <li><img src="" alt="" /></li>
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
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.clients {
  background-color: #F0F2F5;
  padding-top: 25px;
  padding-bottom: 25px;
}

.clients h2 {
  text-align: center;
  margin-bottom: 40px;
  color: black;
  font-family: "Brandon", monospace;
  font-size: 35px;
  font-weight: 400;
}

.clients img {
  height: auto;
  max-height: 100%;
  width: auto;
  border-radius: 50%;
  max-width: 150px;
}

.clients ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding: 0;
}

.clients ul li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3%;
  height: 200px;
  width: 250px;
  margin-bottom: 3%;
}
</style>