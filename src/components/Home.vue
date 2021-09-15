<template>
    <div id="home">
        <h1>Financial Ledger</h1>
        {{ledgers}}
        <LedgerBoard/>
    </div>
</template>

<script>
import LedgerBoard from "./LedgerBoard.vue";

export default {
    name: "Home",
    components: {
        LedgerBoard
    },
}
</script>

<style>

</style>