<template>
    <div id="app">
        <Nav></Nav>
        <h1>Financial Ledger</h1>
        <LedgerBoard v-bind:ledgers="ledgers"></LedgerBoard>
    </div>
</template>

<script>
import LedgerBoard from "./components/LedgerBoard.vue";
import Nav from "./components/Nav.vue";
import axios from "axios";
const BaseUrl = "http://localhost:8080/api";

export default {
    name: 'App',
    data() {
        return {
            ledgers: []
        }
    },
    async created() {
        try {
            const res = await axios.get(`${BaseUrl}/ledger`);
            this.ledgers = res.data;   
        } catch (error) {
            console.error(error)
        }
    },
    components: {
        LedgerBoard,
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