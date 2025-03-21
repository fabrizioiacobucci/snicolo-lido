<template>
    <div style="width: 230px" class="btn-group">
        <button @click="onIsolateWallsClick">Walls</button>
        <button @click="onIsolateColumnsClick">Columns</button>
        <button @click="onIsolateFootingsClick">Footings</button>
        <button @click="onIsolateWindowsClick">Windows</button>
        <button @click="onIsolateBeamsClick">Beams</button>
        <button @click="onIsolateSlabClick">Slabs</button>
        <button @click="onIsolateStairsClick">Stairs</button>
        <button @click="onIsolateDoorsClick">Doors</button>
        <button @click="onIsolateFurnituresClick">Furnitures</button>
        <button @click="onIsolateElementClick">Building Element</button>
        <button @click="onIsolateRoofClick">Roof</button>
        <button @click="onUnisolateClick" style="background-color: #ececec">Reset scene</button>
    </div>
</template>

<script>
import { inject } from "vue";

export default {
    name: "IsolateElements",
    setup() {
        const $viewer = inject("$viewer");
        const $plugin = inject("$plugin");
    },
    mounted() {
        console.log("IsolateElements mounted");
    },
    methods: {
        onIsolateWallsClick() {
            console.log($viewer);
            $viewer.state.hideObjects($viewer.state.objects.map((o) => o.id));
            $viewer.state.showObjects($viewer.state.getObjectsOfType("wall").map((o) => o.id));
        },
        onIsolateColumnsClick() {
            $viewer.state.hideObjects($viewer.state.objects.map((o) => o.id));
            $viewer.state.showObjects($viewer.state.getObjectsOfType("column").map((o) => o.id));
        },
        onIsolateFootingsClick() {
            $viewer.state.hideObjects($viewer.state.objects.map((o) => o.id));
            $viewer.state.showObjects($viewer.state.getObjectsOfType("footing").map((o) => o.id));
        },
        onIsolateBeamsClick() {
            $viewer.state.hideObjects($viewer.state.objects.map((o) => o.id));
            $viewer.state.showObjects($viewer.state.getObjectsOfType("beam").map((o) => o.id));
        },
        onIsolateSlabClick() {
            $viewer.state.hideObjects($viewer.state.objects.map((o) => o.id));
            $viewer.state.showObjects($viewer.state.getObjectsOfType("slab").map((o) => o.id));
        },
        onIsolateStairsClick() {
            $viewer.state.hideObjects($viewer.state.objects.map((o) => o.id));
            $viewer.state.showObjects($viewer.state.getObjectsOfType("stair").map((o) => o.id));
        },
        onIsolateDoorsClick() {
            $viewer.state.hideObjects($viewer.state.objects.map((o) => o.id));
            $viewer.state.showObjects($viewer.state.getObjectsOfType("door").map((o) => o.id));
        },
        onIsolateFurnituresClick() {
            $viewer.state.hideObjects($viewer.state.objects.map((o) => o.id));
            $viewer.state.showObjects($viewer.state.getObjectsOfType("furnishing_element").map((o) => o.id));
        },
        onIsolateElementClick() {
            $viewer.state.hideObjects($viewer.state.objects.map((o) => o.id));
            $viewer.state.showObjects($viewer.state.getObjectsOfType("building_element").map((o) => o.id));
        },
        onIsolateWindowsClick() {
            $viewer.state.hideObjects($viewer.state.objects.map((o) => o.id));
            $viewer.state.showObjects($viewer.state.getObjectsOfType("window").map((o) => o.id));
        },
        onIsolateRoofClick() {
            $viewer.state.hideObjects($viewer.state.objects.map((o) => o.id));
            $viewer.state.showObjects($viewer.state.getObjectsOfType("roof").map((o) => o.id));
        },
        onUnisolateClick() {
            $viewer.state.showObjects($viewer.state.objects.map((o) => o.id));
        },
    },
};
</script>

<style scoped></style>
