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

export default {
    name:"Ledger",
    props: ["ledger"],
    methods:{
        updateLedger() {
            this.$emit("updateModal", this.ledger);
        },
        deleteLedger() {
            console.log("deleted")
            this.$emit("deleteLedger", this.ledger.id);
        }
    }
}
</script>

<style>
</style>