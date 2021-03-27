<template>
  <div></div>
</template>

<script>
import datos2 from "../../JSON EJEMPLOS/categorias.json";

export default {
  name: "SelectButton",
  computed: {
    items2() {
      return datos2.map(item2 => {
        return item2;
      });
    },
  },
};
</script>

<style></style>
