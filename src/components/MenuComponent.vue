<template>
    <div class="menu-container">  
        <menu-item
            titulo="Ventas"
            link="ventas"
        />      
        <menu-item 
            titulo="Productos"
            link="productos"
        /> 
        <menu-item 
            titulo="Proveedores" 
            link="proveedores"
        />
    </div>          
</template>

<script>
import MenuItem from './MenuItem.vue';


export default {
    name: "MenuComponent",
    components: { MenuItem },
    props: {
        pagina: {
            type: String,
            default: "Pagina default"
        }
    }, 
}
</script>

<style scoped>

</style>
