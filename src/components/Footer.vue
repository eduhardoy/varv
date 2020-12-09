<template>
  <footer>
    <figure class="footerlogo">
      <img src="../assets/VARVLOGO.png" alt="" class="footerlogoimg">
    </figure>
    <div class="rights">
      <h4>© 2020 All Rights Reserved. <strong><a class="link" href="https://franciscovaldez.pb.online/cv-3">Francisco Valdez Apolo.</a></strong></h4>
    </div>
    <a href="http://inibotnea.com/">
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
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
}

footer figure {
  margin: 0;
}

.rights h4{
  font-size: 13px;
  font-weight: 300;
}

.rights h4 strong{
  font-size: 15px;
  font-weight: 300;
}

.link{
  text-decoration: none;
  color: black;
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