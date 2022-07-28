<template>
    <div class="menu-item container">
        <img src="../assets/logo.png" alt="">
        <div class="descripcion">
            <h3>{{ titulo }}</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Officiis, vel corporis harum praesentium temporibus magni.  
             <router-link :to="getLink">{{ titulo }}</router-link>
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
    },
    link:{
        type: String,
        default: ""
    }
  },
  computed:{
    getLink(){
        return "/" + this.link;
    }
  }
}
</script>

<style scoped>

.menu-item{
    cursor: pointer;
    max-width: 300px;
    max-height: 180px;
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