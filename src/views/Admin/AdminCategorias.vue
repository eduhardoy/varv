<template>
  <div class="admin-categorias">
    <div class="admin-title">
      <div class="title-box">
        <h1>{{title}}</h1>
      </div>
      <button class="add-button">
      <h2>+</h2>
      </button>
    </div>
    <div class="admin-body">
      <ul class="admin-list">
        <li class="list-item">
          <div></div>
          <button></button>
          <button></button>
        </li>
        <li class="list-item"></li>
        <li class="list-item"></li>
        <li class="list-item"></li>
        <li class="list-item"></li>
        <li class="list-item"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      title: "CATEGORÍAS",
    };
  },
};
</script>

<style lang="scss">
.admin-categorias {
  position: relative;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lato", Helvetica, Arial, sans-serif;

  .admin-title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .title-box {
    height: 100px;
    width: 22%;
    color: black;
    background-color: transparent;
    border-bottom: solid 2px black;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-family: "Lato", Helvetica, Arial, sans-serif;
      font-size: 45px;
      font-weight: 300;
    }
    }
    .add-button{
      z-index: 999;
      border-radius: 100%;
      top: 25px;
      right: 100px;
      width: 70px;
      height: 70px;
      position: fixed;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
      background-color: rgb(0, 0, 0);
      box-shadow: 0px 0px 9px -2px #000000;
      color: rgb(255, 255, 255);
      h2{
        font-family: 'Rubik', sans-serif;
        margin: 0;
        padding-bottom: 5px;
        font-size: 70px;
      }
    }
    }

  .admin-body {
    background-color: white;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .admin-list{
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0;
      margin: 0;
      margin-top: 30px;
      .list-item {
      padding: 0;
      margin: 0;
      margin-top: 30px;
      width: 80%;
      height: 100px;
      background: #ededed;
      border-radius: 25px;
      box-shadow: 0px 0px 9px -2px #000000;
      }
    }
  }
}
</style>