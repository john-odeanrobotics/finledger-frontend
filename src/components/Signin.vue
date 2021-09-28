<template>
    <div id="signin" v-on:submit.prevent="signinSubmit">
        <form>
            <label for="uid">User ID</label>
            <input type="text" name="uid" id="uid">
            <label for="password">Password</label>
            <input type="password" name="password" id="password">
            <input type="submit" value="sign in" id="submit">
        </form>
        <p class="signinFailed"></p>
    </div>
</template>

<script>
import axios from "axios";
const BaseUrl = "http://10.10.90.170:8080/api";

export default {
    name: "SigninForm",
    mounted () {
        this.getInputElement();
    },
    data() {
        return{
            uid: "",
            password: "",
            signinFailed: ""
        }
    },
    methods: {
        getInputElement() {
            this.uid = document.querySelector("#uid");
            this.password = document.querySelector("#password");
            this.signinFailed = document.querySelector(".signinFailed");
        },
        async signinSubmit() {
            const res = await axios.post(`${BaseUrl}/user/signin`, {
                uid: this.uid.value,
                password: this.password.value
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
                this.signinFailed.innerText = "User ID or Password is incorrect.";
                this.uid.value = "";
                this.password.value = "";
                this.uid.focus();
            }
        }
    }
}

</script>

<style>

</style>