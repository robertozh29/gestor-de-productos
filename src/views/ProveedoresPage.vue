<template>
    <div class="login container">
        <HeaderComponent pagina="Proveedores"/>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
    name: "ventas-page",
    components: { HeaderComponent }
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
header h1{
  font-size: 40px;
  text-transform: uppercase;
  margin-bottom: 15px;
}
header h2{
  text-transform: uppercase;
}



</style>