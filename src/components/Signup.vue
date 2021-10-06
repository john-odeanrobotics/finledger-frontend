<template>
    <div id="signup" v-on:submit.prevent="signupSubmit">
        <form>
            <p>
                <label for="uid">User ID</label>
                <input type="text" name="uid" id="uidUp" placeholder="Insert User ID">
            </p>
            <p>
                <label for="password">Password</label>
                <input type="password" name="password" id="pwUp" placeholder="Insert Password">
            </p>
            <input type="submit" value="sign up" id="signupSubmit">
        </form>
    </div>
</template>

<script>
import axios from "axios";
const BaseUrl = "http://10.10.90.170:8080/api";

export default {
    name: "SignupForm",
    mounted () {
        this.getInputElement();
    },
    data() {
        return{
            uid: "",
            password: ""
        }
    },
    methods: {
        getInputElement() {
            this.uid = document.querySelector("#uidUp");
            this.password = document.querySelector("#pwUp");
        },
        async signupSubmit() {
            await axios.post(`${BaseUrl}/user`, {
                uid: this.uid.value,
                password: this.password.value
            });
            alert("Sign Up complete. Please Sign In first.")
            location.href = "/signin";
        }
    }
}

</script>

<style>

</style>