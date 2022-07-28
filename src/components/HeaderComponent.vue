<template>
  <div class="header-component">
    <aside></aside>
    <header>
          <router-link to="/" class="link">
            <h1>Tu gestor de productos</h1>
          </router-link>
          <h2>{{pagina}}</h2>
    </header>
    <aside>
      Roberto Zepeda
    </aside>
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

.header-component{
  background-color: #f47a00;
  color: #FFF;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header{
  width: 80%;
}
header h1{
  font-size: 40px;
  text-transform: uppercase;
  margin-bottom: 15px;
}
header h2{
  text-transform: uppercase;
}
.link{
  color: #FFF;
  font-style: none;
  text-decoration: none;
}
h1{
  cursor: hover;
}

aside{
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: right;
}
</style>
