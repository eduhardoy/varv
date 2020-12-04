<template>
  <div class="admin-container">
    <div class="admin-menu">
      <div class="admin-menu-title">
        <span class="login-form-logo">
          <img class="logovarv" src="../../assets/VARVLOGO.png" alt="">
        </span>
        <h1>MENU</h1>
      </div>
      <div class="admin-menu-list">
        <button v-on:click="title = 'Categorias'">CATEGORÍAS</button>
        <button v-on:click="title = 'Colecciones'">COLECCIONES</button>
        <button v-on:click="title = 'Clientes'">CLIENTES</button>
      </div>
    </div>
    <div class="admin-subcontainer">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.admin-container {
  margin: 0;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  position: relative;
  font-family: "Lato", Helvetica, Arial, sans-serif;

  .admin-menu {
    position: relative;
    color: black;
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;

    .admin-menu-title {
      box-sizing: border-box;
      background-color: #ededed;
      display: flex;
      justify-content: space-around;
      height: 30%;
      align-items: center;
      flex-direction: column;
      h1 {
        margin: 0px;
      }
    }

    .login-form-logo {
      font-size: 60px;
      color: #333333;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 130px;
      height: 130px;
      border-radius: 50%;
      background-color: #fff;
      margin: 0 auto;
      box-shadow: 0px 0px 9px 0px #000000;
      .logovarv {
        width: 90px;
      }
    }

    .admin-menu-list {
      box-sizing: border-box;
      background-color: #ededed;
      display: flex;
      justify-content: start;
      flex-direction: column;
      align-items: center;
      height: 90%;
      padding-top: 10px;

      button {
        font-family: "Lato", Helvetica, Arial, sans-serif;
        width: 80%;
        font-size: 28px;
        font-weight: 400;
        color: black;
        line-height: 1.2;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        min-width: 120px;
        height: 50px;
        margin-top: 30px;
        position: relative;
        transition: 0.4s;
        background-color: #ededed;
        border-bottom: black 1px solid;
        &:hover{
          background-color:rgb(0, 0, 0, 0.8);
          color: white;
          border-radius: 25px;
        }
      }
    }
  }

  .admin-subcontainer {
    /* position: relative; */
    background-color: white;
    height: 100%;
    width: 80%;
  }
}
</style>