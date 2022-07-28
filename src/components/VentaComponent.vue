<template>
    <div class="venta-component">  
        <form action="">
            <input type="text" id="id_producto" placeholder="Codigo Producto">
            <input type="text" id="id_producto" placeholder="Cantidad">
            <button>Agregar</button>
        </form>
        <div class="orden-container">
            <div class="productos-container">
                <table class="productos">
                <tr>
                    <th>Codigo</th>
                    <th>Producto</th>
                    <th>Precio</th>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </table>
            </div>
            <table class="costos">
                <tr>
                    <td>Subtotal</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Descuento</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>$0</td>
                </tr>
                <tr class="vender">
                    <td colspan="2"><button>Vender</button></td>
                </tr>
            </table>
        </div>
        
    </div>          
</template>

<script>
export default {
    name: "VentaComponent",
    components: {  },
    props: {
        pagina: {
            type: String,
            default: "Pagina default"
        }
    }, 
}
</script>

<style scoped>
.venta-component{
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 padding: 0 25vw;
}

form{
    width: 50vw;
    display: flex;
    justify-content: space-between;
    margin-top: 5vh;
    background-color: #f6f7f9;
    padding: 10px;
    border-radius: 5px;
}

input, button{
    width: 20%;
    margin: 0 6px;
    padding: 7px 10px;
    border: 1px solid #ccc;
    border-radius: 2px;
}
input{
    width: 40%;
}
button{
    background-color: #f47a00;
    border-radius: 5px;
    color: #FFF;
    font-weight: 600;
    cursor: pointer;
}


.orden-container{
    width: 100%;
    display: flex;
}

.productos-container{
    width: 70%;
    overflow-y: scroll;
    max-height: 20vh;
    display: block;
}

.productos{
    width: 100%; 
    
}

.productos table {
    width: 100%;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    display: flex;
}

.productos tbody{
    width: 100%;
}

 td, .productos th {
  border: 1px solid #f6f7f9;
  text-align: left;
  padding: 8px;
}

.productos tr:nth-child(even) {
  background-color: #f6f7f9;
}


.costos{
    width: 30%;
}

.vender button{
    width:100%;
}
</style>
