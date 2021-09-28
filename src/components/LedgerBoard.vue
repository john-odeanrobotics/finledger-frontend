<template>
    <div>
        <div v-if="this.$session.has('id')">
            <button @click="openModal">+ 가계부 기입하기</button>
            <ul class="ledger_board">
                <li class="firstline">
                    <div>날짜</div>
                    <div>태그</div>
                    <div>메모</div>
                    <div>수입</div>
                    <div>지출</div>
                    <div>메뉴</div>
                </li>
                <li v-for="ledger in ledgers" :key="ledger.id" v-bind:style="ledger.isIncome ? 'background-color: rgba(255, 0, 0, 0.25);' : 'background-color: rgba(0, 0, 255, 0.25)'">
                    <Ledger v-bind:ledger="ledger" @updateModal="updateModal"></Ledger>
                </li>
            </ul>
            <createLedger v-on:closeModal="closeModal"/>
        </div>
        <h2 v-else>Please Sign in first!</h2>
    </div>
    
</template>

<script>
import Ledger from "./Ledger.vue";
import CreateLedger from "./CreateLedger.vue";
import axios from "axios";
const BaseUrl = "http://10.10.90.170:8080/api";

export default {
    name: "LedgerBoard",
    data() {
        return {
            ledgers: []
        }
    },
    async created() {
        try {
            if (this.$session.has('id')) {
                const res = await axios.get(`${BaseUrl}/ledger/${this.$session.get('id')}`);
                this.ledgers = res.data;  
            } else {
                location.href = "signin"
            }
        } catch (error) {
            console.error(error)
        }
    },
    mounted() {
        this.getInputElement();
    },
    components: {
        Ledger,
        CreateLedger
    },
    methods: {
        getInputElement() {
            this.isCreate = document.querySelector("#isCreate");
        },
        openModal() {
            document.querySelector(".buttons button:nth-child(1)").style.display = "inline"
            document.querySelector(".buttons button:nth-child(2)").style.display = "none"
            document.querySelector(".modal").style.opacity = "1";
            document.querySelector(".modal").style.visibility = "visible";
        },
        closeModal() {
            document.querySelector(".modal").style.opacity = "0";
            document.querySelector(".modal").style.visibility = "hidden";
        },
        updateModal(ledgerObj) {
            console.log(ledgerObj)
            document.querySelector("#ledgerId").value = ledgerObj.id;
            document.querySelector("#isIncome").value = ledgerObj.isIncome;
            document.querySelector("#date").value = ledgerObj.date;
            document.querySelector("#tag").value = ledgerObj.tag;
            document.querySelector("#amount").value = ledgerObj.amount;
            document.querySelector("#memo").value = ledgerObj.memo;
            document.querySelector(".buttons button:nth-child(1)").style.display = "none"
            document.querySelector(".buttons button:nth-child(2)").style.display = "inline"
            document.querySelector(".modal").style.opacity = "1";
            document.querySelector(".modal").style.visibility = "visible";
        }
    }
}
</script>

<style>
.modal{
    opacity: 0;
    visibility: hidden;
}
</style>