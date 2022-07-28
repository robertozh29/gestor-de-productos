<template>
    <router-link :to="getLink">
        <div class="menu-item container">
            <img src="../assets/productos.jpg" alt="">
            <div class="descripcion">
                <h3>{{ titulo }}</h3>
                Revisa tus ventas hechas 
            </div>
        </div>
    </router-link>
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
    width: 380px;
    height: 250px;
    background-color: #FFF;   
    margin: 15px;
    border-radius: 5px;
    /* FLEX */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* BOX SHADOW */
    -webkit-box-shadow: 0 2px 4px 0 rgb(60 64 67 / 20%);
    box-shadow: 0 2px 4px 0 rgb(60 64 67 / 20%);
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-item:hover{
    -webkit-box-shadow: 0 3px 6px 0 rgb(60 64 67 / 30%);
    box-shadow: 0 3px 6px 0 rgb(60 64 67 / 30%);
}

.menu-item img{
    width: 100%;
    height: 75%;
}

.descripcion{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 25%;
    padding: 0 15px;   
    text-align: start;
}
</style>