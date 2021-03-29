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
    @media (max-width: 1300px) {
      width: 90%;
      height: 90%;
      flex-direction: column;
    }
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
      @media (max-width: 1300px) {
        width: 90%;
        height: 50%;
        img {
          height: 70%;
        }
      }
    }
    &__countries {
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @media (max-width: 1300px) {
        width: 90%;
        height: 50%;
      }
      .router__countries {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 50%;
        width: 100%;
        @media (max-width: 1300px) {
          width: 50%;
          height: 30%;
          justify-content: center;
        }
        p {
          color: white;
          padding: 15px;
          font-size: 20px;
          font-weight: 300;
        }
        img {
          height: 40px;
        }
      }
    }
  }
}
</style>
