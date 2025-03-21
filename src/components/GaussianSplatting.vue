<template></template>

<script>
import { inject } from "vue";

export default {
    name: "GaussianSplatting",
    onOpen() {
        console.log("GaussianSplatting opened");
        window.open("/gaussian-viewer.html?filename=", "_blank");
    },
    setup() {
        const $viewer = inject("$viewer");
        const $plugin = inject("$plugin");
    },
    mounted() {
        console.log("GaussianSplatting mounted");
    },
    methods: {},
};
</script>

<style scoped></style>
