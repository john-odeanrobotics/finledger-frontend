<template>
    <div class="ledger">
        <div>{{ledger.date}}</div>
        <div>{{ledger.tag}}</div>
        <div>{{ledger.memo}}</div>
        <div><p v-if="ledger.isIncome">{{ledger.amount}}</p></div>
        <div><p v-if="!ledger.isIncome">{{ledger.amount}}</p></div>
        <div>
            <button @click="updateLedger">수정</button>
            <button @click="deleteLedger">삭제</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
const BaseUrl = "http://10.10.90.170:8080/api";

export default {
    name:"Ledger",
    props: ["ledger"],
    methods:{
        async updateLedger() {
            this.$emit("updateModal", this.ledger);
        },
        async deleteLedger() {
            const res = await axios.post(`${BaseUrl}/ledger/delete/${this.ledger.id}`);
            console.log(res);
            location.href = "/ledger";
        }
    }
}
</script>

<style>
</style>