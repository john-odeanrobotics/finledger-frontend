<template>
    <div>
        <div v-if="this.$session.has('id')">
            <div class="greeting">Hello, {{this.$session.get('uid')}}!</div>
            <div class="buttons">
                <button class="create_button" @click="openModal">+ 가계부 기입하기</button>
                <font-awesome-icon :icon="['fas','redo']" class="sync" @click="syncLedger"/>
            </div>
            <span class="sync_time">마지막 동기화:</span>
            <ul class="ledger_board" v-if="width>=1200">
                <li class="firstline">
                    <div>날짜</div>
                    <div>태그</div>
                    <div>메모</div>
                    <div>수입</div>
                    <div>지출</div>
                    <div>메뉴</div>
                </li>
                <li v-for="ledger in ledgers" :key="ledger.id" v-bind:style="ledger.isIncome ? 'background-color: rgba(255, 0, 0, 0.25);' : 'background-color: rgba(0, 0, 255, 0.25)'">
                    <Ledger v-bind:ledger="ledger" @updateModal="updateModal" @deleteLedger="deleteLedger"></Ledger>
                </li>
            </ul>
            <div class="m_ledger_board" v-else>
                <MobileLedger v-bind:ledgers="mobileLedgers" @updateModal="updateModal" @deleteLedger="deleteLedger" @ledgerMode="ledgerMode"/>
            </div>
            <createLedger @closeModal="closeModal" @syncLedger="syncLedger"/>
        </div>
        <h2 v-else>Please Sign in first!</h2>
    </div>
    
</template>

<script>
import Ledger from "./Ledger.vue";
import CreateLedger from "./CreateLedger.vue";
import MobileLedger from "./mobile/MobileLedger.vue";
import axios from "axios";
const BaseUrl = "http://10.10.90.170:8080/api";

export default {
    name: "LedgerBoard",
    data() {
        return {
            ledgers: [],
            width: 0,
            height: 0,
            scrollLocation: 0,
            timer: null,
            mobileLedgers: []
        }
    },
    async created() {
        try {
            if (this.$session.has('id')) {
                if (localStorage.getItem("localLedger") === null) {
                    await this.syncLedger();
                }
                this.ledgers = JSON.parse(localStorage.getItem("localLedger")); 
                this.mobileLedgers = this.ledgers;
            } else {
                location.href = "/signin"
            }
        } catch (error) {
            console.error(error)
        }
        
    },
    mounted() {
        window.addEventListener("resize", this.handleResize);
        window.addEventListener("scroll", this.handleScroll);
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.createFormResize();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
        window.removeEventListener('resize', this.handleScroll)
    },
    components: {
        Ledger,
        CreateLedger,
        MobileLedger
    },
    methods: {
        async syncLedger() {
            localStorage.removeItem("localLedger");
            try {
                if (this.$session.has('id')) {
                    const res = await axios.get(`${BaseUrl}/ledger/${this.$session.get('id')}`);
                    localStorage.setItem("localLedger", JSON.stringify(res.data))
                } else {
                    location.href = "/signin"
                }
            } catch (error) {
                console.error(error)
            }
        },
        openModal() {
            document.querySelector(".modal .buttons button:nth-child(1)").style.display = "inline"
            document.querySelector(".modal .buttons button:nth-child(2)").style.display = "none"
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
            document.querySelector(".modal .buttons button:nth-child(1)").style.display = "none"
            document.querySelector(".modal .buttons button:nth-child(2)").style.display = "inline"
            document.querySelector(".modal").style.opacity = "1";
            document.querySelector(".modal").style.visibility = "visible";
        },
        handleResize() {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.createFormResize();
        },
        handleScroll(){
            this.scrollLocation = document.documentElement.scrollTop;
            const topBtn = document.querySelector(".top")
            if (this.scrollLocation > 0) {
                topBtn.style.opacity = "1";
                topBtn.style.visibility = "visible";
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    if (document.documentElement.scrollTop === 0){
                        topBtn.style.opacity = "0";
                        topBtn.style.visibility = "hidden";
                    } else {
                        topBtn.style.opacity = "0.3";
                        topBtn.style.visibility = "visible";
                    }
                }, 1700);
            } else {
                clearTimeout(this.timer);
                topBtn.style.opacity = "0";
                topBtn.style.visibility = "hidden";
            }
        },
        createFormResize() {
            if (this.width <= 1200) {
                const modalContent = document.querySelector(".modal-content");
                modalContent.style.width = "120%"
                modalContent.style.height = "120%"
                modalContent.querySelector("form").style.width = "70%"
                modalContent.querySelector(".back").style.display = "block"
            } else {
                const modalContent = document.querySelector(".modal-content");
                modalContent.style.width = "80%"
                modalContent.style.height = "80%"
                modalContent.querySelector("form").style.width = "50%"
                modalContent.querySelector(".back").style.display = "none"
            }
        },
        async deleteLedger(ledgerId){
            console.log(ledgerId)
            await axios.post(`${BaseUrl}/ledger/delete/${ledgerId}`);
            this.syncLedger();
            location.href = "/ledger";
        },
        ledgerMode(mode) {
            if (mode === "inc") {
                const tempArr = []
                this.ledgers.forEach(ledger => {
                    if (ledger.isIncome) {
                        tempArr.push(ledger)
                    }
                });
                this.mobileLedgers = tempArr;
            } else if (mode === "exp") {
                const tempArr = []
                this.ledgers.forEach(ledger => {
                    if (!ledger.isIncome) {
                        tempArr.push(ledger);
                    }
                });
                this.mobileLedgers = tempArr;
            } else {
                this.mobileLedgers = this.ledgers;
            }
        }
    }
}
</script>

<style>
</style>