<template>
  <div class="landing__background">
    <div class="landing__background__wrapper">
      <div class="landing__background__wrapper__logo">
        <img src="@/assets/logoblanco.png" alt="" />
      </div>
      <div class="landing__background__wrapper__countries">
        <router-link to="/arg" class="router__countries">
          <img src="@/assets/argentina.png" alt="" />
          <p>ARGENTINA</p>
        </router-link>
        <router-link to="/ecu" class="router__countries">
          <img src="@/assets/ecuador.png" alt="" />
          <p>ECUADOR</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.landing__background {
  width: 100vw;
  height: 100vh;
  background-color: #0f1316;
  display: flex;
  justify-content: center;
  align-items: center;
  &__wrapper {
    height: 50%;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    &__logo {
      width: 60%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 60%;
        max-height: 512px;
      }
    }
    &__countries {
      height: 50%;
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .router__countries {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 50%;
        width: 100%;
        p {
          color: white;
          padding: 15px;
          font-size: 20px;
        }
        img {
          height: 40px;
        }
      }
    }
  }
}
</style>
