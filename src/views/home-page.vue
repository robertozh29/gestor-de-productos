<template>
    <div class="home container">
        <HeaderComponent />
        <div class="menu-container">
          <div class="menu">
            <MenuItem 
              titulo="Productos"
              link="productos"
            />
            <MenuItem 
              titulo="Ventas"
              link="ventas"
            />
            <MenuItem 
              titulo="Provedores"           
            />
            <MenuItem 
              titulo="Administrar"
            />
          </div>
        </div>       
    </div>
</template>

<script>
import MenuItem from '../components/MenuItem.vue'
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
    name: "home-page",
    components: { MenuItem, HeaderComponent }
}
</script>

<style>
.home.container{
  width: 100%;
  min-height: 100vh;
}
header{
  height: 30vh;
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

.menu-container{
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu{
  max-width: 700px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}

</style>