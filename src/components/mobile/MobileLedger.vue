<template>
    <div class="ledgers">
        <span @click="clickIncome" class="inc">수입</span>
        <span @click="clickExpend" class="exp">지출</span>
        <div v-for="date in result.dateArr" :key="date" class="date_group">
            <DateGroup 
                :date="date" 
                :ledgerGroup="ledgerGroup[date]"
                @updateLedger="updateLedger"
                @deleteLedger="deleteLedger"/>
        </div>
        <div class="top" @click="moveTop">Top</div>
    </div>
</template>

<script>
import DateGroup from "./DateGroup.vue";

export default {
    name:"MobileLedger",
    props: ["ledgers"],
    data() {
        return {
            ledgerGroup: {},
            dateList: [],
            income: false,
            expend: false,
        }
    },
    computed: {
        result: function () {
            this.createDateList(this.ledgers);
            this.createLedgerGroup(this.dateList);
            this.pushLedgers(this.ledgers);
            return {
                dateArr: this.dateList,
                ledgerObj: this.ledgerGroup
            }
        }
    },
    methods: {
        createDateList(ledgers) {
            ledgers.forEach(ledgerLine => {
                this.dateList.push(ledgerLine.date);
            });
            const set = new Set(this.dateList);
            this.dateList = [...set];
        },
        createLedgerGroup(dateList) {
            dateList.forEach(date => {
                this.ledgerGroup[date] = []
            });
        },
        pushLedgers(ledgers) {
            ledgers.forEach(ledgerLine => {
                this.ledgerGroup[ledgerLine.date].push({
                    id: ledgerLine.id,
                    date: ledgerLine.date,
                    amount: ledgerLine.amount,
                    tag: ledgerLine.tag,
                    memo: ledgerLine.memo,
                    isIncome: ledgerLine.isIncome
                });
            });
        },
        updateLedger(ledgerObj) {
            this.$emit("updateModal", ledgerObj);
        },
        deleteLedger(ledgerId) {
            this.$emit("deleteLedger", ledgerId);
        },
        moveTop() {
            window.scrollTo(0, 0)
        },
        clickIncome() {
            this.income = !this.income;
            if (this.income) {
                document.querySelector(".inc").style.opacity = "1";
            } else {
                document.querySelector(".inc").style.opacity = "0.5"
            }
            this.ledgerLoad();
        },
        clickExpend() {
            this.expend = !this.expend;
            if (this.expend) {
                document.querySelector(".exp").style.opacity = "1";
            } else {
                document.querySelector(".exp").style.opacity = "0.5"
            }
            this.ledgerLoad();
        },
        ledgerLoad() {
            if (this.income && !this.expend) {
                this.$emit("ledgerMode", "inc")
                this.dateList.length = 0
            } else if(!this.income && this.expend) {
                this.$emit("ledgerMode", "exp")
                this.dateList.length = 0
            } else {
                this.$emit("ledgerMode", "all")
                this.dateList.length = 0
            }
        }
    },
    components: {
        DateGroup
    }
}

</script>

<style>
</style>