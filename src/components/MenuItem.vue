<template>
    <div class="menu-item container">
        <img src="../assets/logo.png" alt="">
        <div class="descripcion">
            <h3>Opcion 1</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Officiis, vel corporis harum praesentium temporibus magni. 
            Porro delectus reprehenderit atque ab, quam culpa, ex quas nam,
             quis incidunt eaque unde maxime!
        </div>
    </div>
</template>

<script>

export default {
  name: 'MenuItem'
}
</script>

<style scoped>

.menu-item{
    width: 400px;
    height: 250px;
    background-color: #DDD;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.menu-item img{
    height: 10%;
}
</style>