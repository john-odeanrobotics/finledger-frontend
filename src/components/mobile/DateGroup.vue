<template>
    <div>
        <h2>{{date}}</h2>
        <ul>
            <li v-for="ledger in ledgerGroup" :key="ledger.id">
                <GroupedLedger v-bind:ledger="ledger" @updateLedger="updateLedger" @deleteLedger="deleteLedger"/>
            </li>
        </ul>
    </div>
</template>

<script>
import GroupedLedger from "./GroupedLedger.vue";

export default {
    name: "DateGroup",
    props: ["date", "ledgerGroup"],
    components: {
        GroupedLedger
    },
    methods: {
        updateLedger(ledgerObj) {
            this.$emit("updateLedger", ledgerObj);
        },
        deleteLedger(ledgerId) {
            this.$emit("deleteLedger", ledgerId);
        }
    }
}
</script>

<style>

</style>