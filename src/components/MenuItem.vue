<template>
    <div class="menu-item container">
        <img src="../assets/logo.png" alt="">
        <div class="descripcion">
            <h3>{{ titulo }}</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Officiis, vel corporis harum praesentium temporibus magni. 
            Porro delectus reprehenderit atque ab, quam culpa, ex quas nam,
             quis incidunt eaque unde maxime!
             <router-link to="/productos">Productos</router-link>
        </div>
    </div>
</template>

<script>

export default {
  name: 'MenuItem',
  props:{
    titulo:{
        type: String,
        default: "opcion"
    }
  }
}
</script>

<style scoped>

.menu-item{
    cursor: pointer;
    width: 400px;
    height: 250px;
    background-color: #DDD;
    padding: 10px;      
    margin: 15px;
    border-radius: 5px;
    /* FLEX */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.menu-item img{
    height: 10%;
}
</style>