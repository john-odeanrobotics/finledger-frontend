<template>
    <div id="app">
        
        <h1>Financial Ledger</h1>
        <LedgerBoard></LedgerBoard>
    </div>
</template>

<script>
import LedgerBoard from "./components/LedgerBoard.vue";

export default {
    name: 'App',
    components: {
        LedgerBoard
    }
}
</script>

<style>
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
    min-width: 850px;
    padding: 0;
    list-style: none;
    margin: auto;
    text-align: center;
}
.firstline,
#ledger{
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #000;
}
.firstline div,
#ledger div{
    padding: 10px 20px;
    flex: 1;
}
p{
    margin: 0;
    padding: 0;
}

</style>