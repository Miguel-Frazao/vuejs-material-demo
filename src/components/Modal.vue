<template id="modal">
  <transition name="modal">
    <div class="modal-mask" v-on:click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container" v-on:click.stop="">
          <div class="close-container">
            <button class="close-btn" v-on:click="$emit('close')">&times;</button>
          </div>
          <div class="modal-header">
            <slot name="header">
                default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
                default body
            </slot>
          </div>

          <div class="modal-footer align-right">
            <slot name="footer">
              default footer
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    data() {
      return {

      } 
    }
  }
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  padding: 0 15px;
}
.modal-container {
  max-width: 600px;
  margin: auto auto;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}
.close-container {
  text-align: right;
}
.close-container .close-btn {
  cursor: pointer;
  border: none;
  font-size: 20px;
  background-color: transparent;
  outline: none;
}
.modal-body {
  margin: 20px 0;
  padding: 0;
}
.modal-header {
  padding: 0;
}
.modal-default-button {
  float: right;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>