<template>
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
</template>

<script>
import Ledger from "./Ledger.vue";

export default {
    name: "LedgerBoard",
    components: {
        Ledger
    },
    props: ["ledgers"]
}
</script>

<style>

</style>