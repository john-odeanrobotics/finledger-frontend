<template>
    <div id="ledger">
        <div>{{ledger.date}}</div>
        <div>{{ledger.tag}}</div>
        <div>{{ledger.memo}}</div>
        <div><p v-if="ledger.isIncome">{{ledger.amount}}</p></div>
        <div><p v-if="!ledger.isIncome">{{ledger.amount}}</p></div>
        <div>{{ledger.user.uid}}</div>
    </div>
</template>

<script>
export default {
    props: ["ledger"]
}
</script>

<style>
</style>