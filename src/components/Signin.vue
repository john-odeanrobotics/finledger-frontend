<template>
    <div id="signin">
        <label for="uid">User ID</label>
        <input type="text" name="uid" id="uid">
        <label for="password">Password</label>
        <input type="password" name="password" id="password">
        <input @click="signinSubmit" @keyup.enter="signinSubmit" type="button" value="sign in">
        <p class="signinFailed"></p>
    </div>
</template>

<script>
import axios from "axios";
const BaseUrl = "http://localhost:8080/api";
let uidInput;
let pwInput;
let signinFailed;

export default {
    name: "SigninForm",
    mounted () {
        this.getInputElement();
    },
    methods: {
        getInputElement() {
            uidInput = document.querySelector("#uid");
            pwInput = document.querySelector("#password");
            signinFailed = document.querySelector(".signinFailed");
            console.log(uidInput, pwInput, signinFailed)
        },
        async signinSubmit() {
            const res = await axios.post(`${BaseUrl}/user/signin`, {
                uid: uidInput.value,
                password: pwInput.value
            });
            const id = await res.data.id;
            const uid = await res.data.uid;
            this.$session.set("id",id);
            this.$session.set("uid",uid);
            const hasId = this.$session.has("id");
            console.log(hasId)
            if (hasId) {
                location.href = "/";
            } else {
                signinFailed.innerText = "User ID or Password is incorrect.";
                uidInput.value = "";
                pwInput.value = "";
                uidInput.focus();
            }
        }
    }
}

</script>

<style>

</style>