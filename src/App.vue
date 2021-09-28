<template>
    <div id="app">
        <Nav/>
        <h1>Financial Ledger</h1>
        <router-view/>
    </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
    name: 'App',
    components: {
        Nav
    }
}
</script>

<style>
body{
    padding: 0;
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.ledger_board{
    width: 70%;
    padding: 0;
    list-style: none;
    margin: auto;
    text-align: center;
}
.firstline,
.ledger{
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #000;
}
.firstline div,
.ledger div{
    padding: 10px 20px;
    flex: 1;
}
.firstline div:nth-child(3),
.ledger div:nth-child(3){
    flex: 2;
}
p{
    margin: 0;
    padding: 0;
}

</style>