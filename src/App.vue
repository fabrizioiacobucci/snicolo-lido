<template>
    <div id="view">
        <BimViewer />
    </div>
</template>

<script>
import BimViewer from "./components/BimViewer.vue";

export default {
    name: "App",
    components: {
        BimViewer,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
