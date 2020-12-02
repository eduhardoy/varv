<template>
  <div class="admin-categorias">
    <div class="admin-title">
      <h1>{{ title }}</h1>
    </div>
    <div class="admin-body">
        
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      title: "Categorias",
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

  .admin-title {
    box-sizing: border-box;
    border: 1px solid black;
    background-color: #d1d1d1;
    display: flex;
    justify-content: center;
    height: 10%;
    align-items: center;
    h1 {
      margin: 0px;
      color: #000;
      font-family: "Lato", Helvetica, Arial, sans-serif;
    }
  }

  .admin-body {
    box-sizing: border-box;
    border: 1px solid black;
    display: flex;
    width: 100%;
    height: 90%;
    align-items: center;
    justify-content: center;
  }
}
</style>