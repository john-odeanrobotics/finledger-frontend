<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/ledger">Ledger</router-link>
        <a v-if="this.$session.has('id')" @click="logout" class="remove" href="/">Sign out</a>
        <div v-else class="set">
            <router-link to="/signin">Sign in</router-link>
            <router-link to="/signup">Sign up</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        logout(){
            this.$session.destroy()
        }
    }
}
</script>

<style>

nav{
    margin: auto;
}
nav a{
    padding: 0 10px;
}
nav div{
    display: inline;
}

</style>