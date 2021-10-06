<template>
    <div class="modal">
        <div class="modal-content" v-on:submit.prevent="createSubmit">
            <font-awesome-icon :icon="['fas','angle-left']" class="back" @click="cancel"/>
            <form>
                <p>
                    <input type="hidden" id="ledgerId">
                    <label for="isIncome">수입/지출</label>
                    <select name="isIncome" id="isIncome">
                        <option value="true">수입</option>
                        <option value="false">지출</option>
                    </select>
                </p>
                <p>
                    <label for="date">날짜</label>
                    <input type="date" name="date" id="date">
                </p>
                <p>
                    <label for="tag">태그</label>
                    <input type="text" name="tag" id="tag" placeholder="insert Tag">
                </p>
                <p>
                    <label for="amount">금액</label>
                    <input type="number" name="amount" id="amount" placeholder="insert Amount">
                </p>
                <p>
                    <label for="memo">메모</label>
                    <textarea type="text" name="memo" id="memo" placeholder="insert Memo"></textarea>
                </p>
                <div class="buttons">
                    <button type="submit">기입</button>
                    <button type="button" @click="updateSubmit">수정</button>
                    <button type="button" @click="cancel">취소</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
const BaseUrl = "http://10.10.90.170:8080/api";

export default {
    name: "CreateLedger",
    mounted() {
        this.getInputElement();
        this.resetValues();
        this.cancel();
    },
    data() { 
        return{
            isIncome: "true",
            date: "",
            tag: "",
            amount: "",
            memo: "",
            ledgerId: ""
        }
    },
    methods: {
        getInputElement() {
            this.isIncome = document.querySelector("#isIncome");
            this.date = document.querySelector("#date");
            this.tag = document.querySelector("#tag");
            this.amount = document.querySelector("#amount");
            this.memo = document.querySelector("#memo");
            this.ledgerId = document.querySelector("#ledgerId");
        },
        resetValues(){
            this.isIncome.value = "true";
            this.date.value = "";
            this.tag.value = "";
            this.amount.value = "";
            this.memo.value = "";
            this.ledgerId.value = "";
        },
        async createSubmit() {
            const object = {
                isIncome: (this.isIncome.value === "true"),
                date: this.date.value,
                tag: this.tag.value,
                amount: parseInt(this.amount.value, 10),
                memo: this.memo.value,
                userId: this.$session.get("id")
            }
            const check = confirm("입력한 내용을 저장하시겠습니까?");
            if (check) {
                await axios.post(`${BaseUrl}/ledger`, object);
                this.$emit("syncLedger");
                location.href = "/ledger";
            } 
        },
        async updateSubmit() {
            const ledgerId = this.ledgerId.value;
            const object = {
                isIncome: (this.isIncome.value === "true"),
                date: this.date.value,
                tag: this.tag.value,
                amount: parseInt(this.amount.value, 10),
                memo: this.memo.value,
                userId: this.$session.get("id"),
            }
            const check = confirm("입력한 내용을 저장하시겠습니까?");
            if (check) {
                await axios.post(`${BaseUrl}/ledger/update/${ledgerId}`, object);
                this.$emit("syncLedger");
                location.href = "/ledger";
            } 
        },
        cancel() {
            this.resetValues();
            this.$emit("closeModal");
        }
    }
}
</script>

<style>
.modal{
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100vw;
    height: 100vh;
    transition: 0.5s;
}
.modal-content{
    width: 80%;
    height: 80%;
    min-height: 525px;
    background-color: #fff;
    position: absolute;
    box-sizing: border-box;
    padding: 30px;
    border-radius: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-content form{
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    font-size: 20px;
    width: 50%;
    min-width: 200px;
}
.modal-content form p{
    padding: 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #000;
}
.modal-content form label{
    width: 50%;
    text-align: left;
}
.modal-content form input{
    width: 50%;
    margin: auto;
    height: 30px;
    font-size: 20px;
}
.modal-content form textarea{
    margin: auto;
    width: 50%;
    font-size: 20px;
    resize: none;
}
.modal-content form select{
    margin: auto;
    width: 50%;
    height: 30px;
    font-size: 20px;
}
.modal-content form button{
    padding: 10px 18px ;
    margin: 10px;
    border: none;
    border-radius: 5px;
    transition: 0.2s;
}
.modal-content form button:nth-child(1),
.modal-content form button:nth-child(2){
    background-color: teal;
    color: #fff;
}
.modal-content form button:hover{
    opacity: 0.8;
}
.back{
    font-size: 42px;
    position: absolute;
    top: 15%;
    left: 18%;
    color: teal;
    display: none;
}
</style>