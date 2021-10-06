<template>
    <div id="app">
        <Nav/>
        <h1>Financial Ledger</h1>
        <router-view/>
    </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
    name: 'App',
    components: {
        Nav
    }
}
</script>

<style>
body{
    padding: 0;
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.ledger_board{
    width: 70%;
    padding: 0;
    list-style: none;
    margin: auto;
    text-align: center;
}
.firstline,
.ledger{
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #000;
}
.firstline div,
.ledger div{
    padding: 10px 20px;
    flex: 1;
}
.firstline div:nth-child(3),
.ledger div:nth-child(3){
    flex: 2;
}
p{
    margin: 0;
    padding: 0;
}
.date_group h2{
    text-align: left;
    padding: 5px;
    margin: 10px 20px;
    border-bottom: 1px solid #000;
}
.date_group ul{
    margin: 0;
    padding: 0 5px;
    list-style: none;
}
.mobile_ledger{
    display: flex;
    justify-content: center;
    font-size: 18px;
    text-align: left;
}
.mobile_ledger div{
    padding: 2px;
}
.mobile_ledger div:nth-child(1){
    flex: 1;
    text-align: right;
    font-weight: bold;
}
.mobile_ledger div:nth-child(2){
    padding: 0 10px;
    flex: 2;
    display: flex;
}
.mobile_ledger div:nth-child(2) > span:nth-child(1){
    word-wrap: none;
}
.mobile_ledger div:nth-child(2) span:nth-child(2){
    font-size: 14px;
    color: #777;
    margin-left: 5px;
}
.mobile_ledger div:nth-child(3){
    flex: 1;
}
.ledgers{
    margin-bottom: 100px;
}
.ledgers > span{
    display: block;
    width: 30px;
    margin-left: 80%;
    padding: 0 20px;
    font-weight: bold;
    font-size: 14px;
}
.ledgers > span:nth-child(1){
    color: rgb(255, 100, 100);
    opacity: 0.5;
}
.ledgers > span:nth-child(2){
    color: cornflowerblue;
    opacity: 0.5;
}
#signinSubmit,
#signupSubmit{
    border: none;
    color: #fff;
    padding: 8px 10px;
    font-size: 18px;
    margin: 10px;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
}
#signinSubmit{
    background-color: teal;
    
}
#signupSubmit{
    background-color: cornflowerblue;
}
#signin p,
#signup p{
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 5px;
}
.top{
    position: fixed;
    right: 20px;
    bottom: 20px;
    padding: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    background-color: cornflowerblue;
    border-radius: 50%;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: visible;
    transition: 0.3s;
    cursor: pointer;
}
.create_button{
    text-decoration: none;
    color: #000;
    background-color: #fff;
    border: 1px solid black;
    border-radius: 3px;
    padding: 5px;
    display: block;
    width: 160px;
    font-size: 16px;
}
.create_button:hover{
    background-color: #000;
    color: #fff;
    transition: 0.2s;
}
.buttons{
    display: flex;
    justify-content: center;
}
.sync{
    text-decoration: none;
    color: teal;
    background-color: #fff;
    border: 2px solid teal;
    border-radius: 3px;
    padding: 5px;
    display: block;
    font-size: 20px;
    margin: 0 10px;
}
.sync:hover{
    background-color: teal;
    color: #fff;
    transition: 0.2s;
}
.sync_time{
    font-size: 12px;
    display: block;
    text-align: left;
    width: 200px;
    margin: auto;
    margin-top: 5px;
}

</style>