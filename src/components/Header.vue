<template>
  <header>
    <div class="logo">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="menu">
      <ul class="nav">
        <li><a href="360tour">360 TOUR</a></li>
        <li><a href="about">ABOUT US</a></li>
        <li><a href="contact">CONTACT</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style>
header {
  width: 100%;
  max-height: 140px;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  box-shadow: 0px 8px 9px -1px rgba(125, 120, 120, 0.6);
  font-family: "Syne Mono", monospace;
  font-size: 25px;
  position: sticky;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo img {
  width: auto;
  height: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav {
  display: flex;
  flex-direction: row;
}

ul {
  list-style-type: none;
}
li {
  padding-left: 30px;
}
a {
  text-decoration: none;
  color: #30383f;
}
</style>