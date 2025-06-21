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
                    modelIds: [1410362],
                    cloudId: 31539,
                    projectId: 1378372,
                    accessToken:
                        "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1Ql9OOGk4MnlCUWZkZnVfenByMGIyQ1Rfc21jV21kZDkzSTFQRGJXTkIwIn0.eyJleHAiOjE3NTA1MTcxOTYsImlhdCI6MTc1MDUwMjc5NiwianRpIjoiNjNlOTdjOTgtMDUzZS00MWFhLWIyOWMtMDkyMWNmZWExYTE5IiwiaXNzIjoiaHR0cHM6Ly9pYW0uYmltZGF0YS5pby9hdXRoL3JlYWxtcy9iaW1kYXRhIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjYxZjljMDZkLWU2MjQtNGJlOS05OTFlLWY0NWQwZmQ3Y2M3ZSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjA5M2ViNDliLTZjZTktNGUyMC04ZDI0LTVjMGU5NWMxYzllNiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDgwIiwiaHR0cDovL2xvY2FsaG9zdDo1MTczIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtYmltZGF0YSIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJjaGVjazpyZWFkIG1vZGVsOnRva2VuX21hbmFnZSB3ZWJob29rOm1hbmFnZSBkb2N1bWVudDpyZWFkIGxvZ3M6cmVhZCB1c2VyOndyaXRlIGNsb3VkOm1hbmFnZSBiY2Y6d3JpdGUgdXNlcjpyZWFkIGRvY3VtZW50OndyaXRlIG9yZzptYW5hZ2UgcHJvZmlsZSBtb2RlbDpyZWFkIGVtYWlsIGJjZjpyZWFkIGNoZWNrOndyaXRlIG1vZGVsOndyaXRlIGNsb3VkOnJlYWQiLCJjbGllbnRIb3N0IjoiOTUuMjMyLjEyOS4xODIiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC0wOTNlYjQ5Yi02Y2U5LTRlMjAtOGQyNC01YzBlOTVjMWM5ZTYiLCJjbGllbnRBZGRyZXNzIjoiOTUuMjMyLjEyOS4xODIiLCJjbGllbnRfaWQiOiIwOTNlYjQ5Yi02Y2U5LTRlMjAtOGQyNC01YzBlOTVjMWM5ZTYifQ.kOZjG-AP2qS6NJZpeYZ1qkDpcM3BYIMV7M8atjolIWGdiE62SarUpN1AmeyBbKosxeJEk3HFAGJlKorHfB8J44uRA4teObl0lT0dQhkRPCufZbTo5K0-qoU0-Gyp_GTp7_2C4zWRrMARrlUx-vuennK68ZPFjPZKMZ8358xYIVgANHDxzK7mK0WhZF2mZb6iJicbcw_fOFnEl2OFQnOBZHKkW7TY65I97IsL4lf-I34oaCTIxYXYuRD-LnFmynlTkbMezq2ZNeVLOiFo2_uOxwSRvzbzoA0aHlMOYpp5E69R4675AW4J2Tm2Grxr1kvzO42y8ZFb5v1vh6YoD4PEmA",
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

            console.log(this.viewer);
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
