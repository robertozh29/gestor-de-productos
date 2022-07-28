<template>
    <div class="login container">
        <h1>Login</h1>
        <form action="">
            <input type="email" name="" id="">
            <input type="password" name="" id="">
            <router-link to="/" class="link">Iniciar Sesion</router-link>
        </form>
    </div>
</template>

<style scoped>
.login.container{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f0f2f5;
}
.link{
    padding: 10px 12px;
    color: #FFF;
    font-weight: 700;
    background-color: #f47a00;
    text-decoration: none;
    margin-top: 15px;
}

form{
    margin: 50px 0;
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #FFF;
    padding: 25px 18px;
    border-radius: 10px;
}

input{
    padding: 8px;
    margin: 10px 0;
}
</style>