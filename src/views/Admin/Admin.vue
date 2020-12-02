<template>
  <div class="admin-container">
    <div class="admin-menu">
      <div class="admin-menu-title">
        <h1>MENU</h1>
      </div>
      <div class="admin-menu-list">
        <button v-on:click="title = 'Categorias'">Categorias</button>
        <button v-on:click="title = 'Colecciones'">Colecciones</button>
        <button v-on:click="title = 'Clientes'">Clientes</button>
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
    color: white;
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;

    .admin-menu-title {
      box-sizing: border-box;
      border: 1px solid black;
      background-color: #1c1c1c;
      display: flex;
      justify-content: center;
      height: 10%;
      align-items: center;
      h1 {
        margin: 0px;
      }
    }
    .admin-menu-list {
      box-sizing: border-box;
      border: 1px solid black;
      background-color: #383838;
      display: flex;
      justify-content: start;
      flex-direction: column;
      align-items: center;
      height: 90%;
      padding-top: 10px;

      button {
        font-family: "Lato", Helvetica, Arial, sans-serif;
        width: 90%;
        font-size: 20px;
        color: #555555;
        line-height: 1.2;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        min-width: 120px;
        height: 50px;
        margin-bottom: 10px;
        position: relative;
        transition: 0.4s;
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