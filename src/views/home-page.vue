<template>
    <div class="Home container">
        <h1>Pagina principal</h1>
        <MenuItem />
    </div>
</template>

<script>
import MenuItem from '../components/MenuItem.vue'

export default {
    name: "home-page",
    components: { MenuItem }
}
</script>