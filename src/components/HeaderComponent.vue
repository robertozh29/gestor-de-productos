<template>
  <div class="header container">
    <header>
          <router-link to="/" class="link">
            <h1>Tu gestor de productos</h1>
          </router-link>
          <h2>{{pagina}}</h2>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    pagina: {
      type: String,
      default: "Pagina default" 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link{
  color: #FFF;
  font-style: none;
  text-decoration: none;
}
</style>
