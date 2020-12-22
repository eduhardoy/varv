<template>
  <footer>
    <a href="/">
      <figure class="footerlogo">
        <img
          src="../assets/logo3.png"
          alt="logovarvlab"
          class="footerlogoimg"
        />
      </figure>
    </a>
    <div class="rights">
      <h4>
        © 2020 All Rights Reserved -<strong
          ><a
            class="link"
            href="https://franciscovaldez.pb.online/cv-3"
            target="_blank"
          >
            Francisco Valdez Apolo.</a
          ></strong
        >
      </h4>
    </div>
    <a href="http://inibotnea.com/" target="_blank">
      <figure class="inibot">
        <img src="../assets/inibot.png" alt="logoinibot" class="inibotimg" />
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

.rights h4 {
  font-size: 13px;
  font-weight: 300;
}

.rights h4 strong {
  font-size: 15px;
  font-weight: 300;
}

.link {
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
