<template>
    <div class="mobile_ledger">
        <div v-bind:style="ledger.isIncome ? 'color: rgb(255, 100, 100);' : 'color: cornflowerblue'">{{ledger.amount}}&#8361;</div>
        <div><span>{{ledger.tag}}</span><span class="memo">{{ledger.memo}}</span></div>
        <div>
            <button @click="updateLedger">수정</button>
            <button @click="deleteLedger">삭제</button>
        </div>
    </div>
</template>

<script>

export default {
    name:"GroupedLedger",
    props: ["ledger"],
    methods: {
        updateLedger() {
            this.$emit("updateLedger", this.ledger);
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