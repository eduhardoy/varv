<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()" />
      <div class="modal__dialog">
        <div class="modal__header">
          <button type="button" class="modal__close" @click="closeModal()">
            X
          </button>
        </div>
        <div class="modal__body">
          <slot name="body" />
        </div>
        <div class="modal__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalAdd",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    background-color: #fff;
    position: relative;
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    width: 50px;
    height: 50px;
    font-size: 40px;
    background-color: #f44336;
    color: white;
  }
  &__header {
    padding-right: 15px;
    padding-top: 8px;
    width: 100%;
    height: 10%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
  &__body {
    width: 80%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 40px;
  }
  &__footer {
    width: 60%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    .cancel_button {
      height: 60px;
      width: 240px;
      background-color: black;
      color: white;
      border: black 2px solid;
      border-radius: 10px;
      font-size: 30px;
    }
    .add_button {
      height: 60px;
      width: 240px;
      background-color: #8fd14f;
      border: black 2px solid;
      border-radius: 10px;
      font-size: 30px;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
