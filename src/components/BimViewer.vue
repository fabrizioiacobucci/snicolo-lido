<template>
    <div id="viewer" style="width: 100%"></div>
</template>

<script>
import makeBIMDataViewer from "@bimdata/viewer";
import IsolateElements from "./IsolateElements.vue";
import { nextTick } from "vue";
import GaussianSplatting from "./GaussianSplatting.vue";

export default {
    name: "BimViewer",
    mounted() {
        nextTick(() => {
            this.viewer = makeBIMDataViewer({
                locale: "en",
                api: {
                    modelIds: [1367721],
                    cloudId: 31539,
                    projectId: 1378372,
                    accessToken:
                        "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1Ql9OOGk4MnlCUWZkZnVfenByMGIyQ1Rfc21jV21kZDkzSTFQRGJXTkIwIn0.eyJleHAiOjE3NDE5ODg5ODEsImlhdCI6MTc0MTk3NDU4MSwianRpIjoiYWNhYmRhMDctMzcwZi00YjRjLTk0NGQtYTVjMGY2MTQzMmQ5IiwiaXNzIjoiaHR0cHM6Ly9pYW0uYmltZGF0YS5pby9hdXRoL3JlYWxtcy9iaW1kYXRhIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjYxZjljMDZkLWU2MjQtNGJlOS05OTFlLWY0NWQwZmQ3Y2M3ZSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjA5M2ViNDliLTZjZTktNGUyMC04ZDI0LTVjMGU5NWMxYzllNiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDgwIiwiaHR0cDovL2xvY2FsaG9zdDo1MTczIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtYmltZGF0YSIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJjaGVjazpyZWFkIG1vZGVsOnRva2VuX21hbmFnZSB3ZWJob29rOm1hbmFnZSBkb2N1bWVudDpyZWFkIGxvZ3M6cmVhZCB1c2VyOndyaXRlIGNsb3VkOm1hbmFnZSBiY2Y6d3JpdGUgdXNlcjpyZWFkIGRvY3VtZW50OndyaXRlIG9yZzptYW5hZ2UgcHJvZmlsZSBtb2RlbDpyZWFkIGVtYWlsIGJjZjpyZWFkIGNoZWNrOndyaXRlIG1vZGVsOndyaXRlIGNsb3VkOnJlYWQiLCJjbGllbnRIb3N0IjoiODcuOS4xNTUuMTIwIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtMDkzZWI0OWItNmNlOS00ZTIwLThkMjQtNWMwZTk1YzFjOWU2IiwiY2xpZW50QWRkcmVzcyI6Ijg3LjkuMTU1LjEyMCIsImNsaWVudF9pZCI6IjA5M2ViNDliLTZjZTktNGUyMC04ZDI0LTVjMGU5NWMxYzllNiJ9.UWzCh2V8yt8xT6zyxfSgs5TFNXeJdOAhZI1WM-GfgBGrcAH-DtSv55A5DiMfIOD7BYcOlnWcCBjuclgyZiS5smkiw_-Dbk5bcGIIeRadh_NksbUnInFnL6VOzF7FlXs5o7iangzmsPK_cCh4pQh5VUfUHYMI6hExir-i3WNAw68EZ8UsHowVUDmb6_FTrA_KR6pn18wgOhmsaUaP7MKHf6lozdCm7FWVnX3DD01Q0tm9dAvuU6yoGA0UbeqwGmIVT2_u9yEV-DRzuZxJ_isV47DFGcGKntLdJYj3n5pDxhwJtGxJaQxlFs_eBarDPG0FuyJ48PtgNBxdi0YR5wwfSg",
                },
            });

            this.viewer.registerPlugin({
                name: "Isolate Elements",
                addToWindows: ["3d"],
                component: IsolateElements,
                button: {
                    position: "left",
                    content: "simple",
                    tooltip: "Isolate Elements",
                    icon: {
                        imgUri: "/icons/select-cell.png",
                    },
                },
                i18n: {
                    en: {
                        myCustomPlugin: {
                            textKey: "Isolate Elements",
                        },
                    },
                },
            });

            this.viewer.registerPlugin({
                name: "Gaussian Splatting",
                addToWindows: ["3d"],
                component: GaussianSplatting,
                button: {
                    position: "left",
                    content: "simple",
                    tooltip: "Gaussian Splatting",
                    icon: {
                        imgUri: "/icons/projection-icon-12.jpg",
                    },
                },
                i18n: {
                    en: {
                        myCustomPlugin: {
                            textKey: "Gaussian Splatting",
                        },
                    },
                },
            });

            this.viewer.mount("#viewer");
        });
    },
    beforeDestroy() {
        if (this.viewer) {
            this.viewer.dispose();
        }
    },
};
</script>

<style scoped>
#viewer {
    width: 100%;
    height: 100vh !important;
}
</style>
