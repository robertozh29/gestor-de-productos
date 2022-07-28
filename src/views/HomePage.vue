<template>
    <div class="home container">
        <HeaderComponent pagina="Home" />
        <VentaComponent />
        <MenuComponent />        
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import MenuComponent from '@/components/MenuComponent.vue'
import VentaComponent from '@/components/VentaComponent.vue';

export default {
    name: "home-page",
    data(){
      return{
        op: 1
      }
    },
    components: {  HeaderComponent, MenuComponent, VentaComponent },
    setup() {

    }
}
</script>

<style>
.home.container{
  width: 100%;
  min-height: 100vh;
}
header{
  height: 25vh;
  background-color: #f47a00;
  color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.venta-component{
  height: 35vh;
}

.menu-container{
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f7f9;
}


</style>