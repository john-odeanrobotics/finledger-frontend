<template>
    <div id="app">
        <h1>Financial Ledger</h1>
        <ul>
            <li v-for="ledger in ledgers" :key="ledger.id">{{ ledger.tag  }} {{ ledger.memo }} </li>
        </ul>
    </div>
</template>

<script>
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
</style>