<template>
    <div id="app">
        <h1>Financial Ledger</h1>
        <ul class="ledger_board">
            <li class="firstline">
                <div>날짜</div>
                <div>태그</div>
                <div>메모</div>
                <div>수입</div>
                <div>지출</div>
                <div>아이디</div>
            </li>
            <li v-for="ledger in ledgers" :key="ledger.id" v-bind:style="ledger.isIncome ? 'background-color: rgba(255, 0, 0, 0.25);' : 'background-color: rgba(0, 0, 255, 0.25)'">
                <Ledger v-bind:ledger="ledger"></Ledger>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
import Ledger from "./components/Ledger.vue";
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
        Ledger
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