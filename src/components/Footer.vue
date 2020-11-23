<template>
  <footer>
    <figure class="footerlogo">
      <img src="../assets/VARVLOGO.png" alt="" class="footerlogoimg">
    </figure>
    <div class="rights">
      <h4>© 2020 ALL RIGHTS RESERVED</h4>
    </div>
    <a href="">
      <figure class="inibot">
      <img src="../assets/inibot.png" alt="" class="inibotimg">
    </figure>
    </a>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
footer {
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 15px;
}

footer figure {
  margin: 0;
}

.rights h4{
  font-size: 13px;
  font-weight: 300;
}

.footerlogoimg {
  width: 70px;
}

.inibotimg {
  width: 180px;
}

@media (max-width: 950px) {
footer {
  margin-top: 50px;
}
}

</style>