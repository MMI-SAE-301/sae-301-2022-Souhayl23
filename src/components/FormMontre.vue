<script setup lang="ts">
import type { Montre } from "@/types";
import { colors } from "@/types";
import { materiaux } from "@/types";
import { ref } from "vue";
import { useRouter } from "vue-router";
import MontreSvg from "./MontreSvg.vue";
import FormKitListColors from "./FormKitListColors.vue";


const router = useRouter();
const montre = ref({});
const props = defineProps(["id", "Montre"]);
if (props.id) {
  // On charge les données de la table montre
  let { data, error } = await supabase
    .from("Montre")
    .select("*")
    .eq("id", props.id);
  if (error || !data)
    console.log("n'a pas pu charger la table Montre :", error);
  else montre.value = data[0];
}

async function upsertMontre(dataForm, node) {
  const { data, error } = await supabase.from("Montre").upsert(dataForm);
  if (error) node.setErrors([error.message]);
  else {
    node.setErrors([]);
    router.push({ name: "basket-edit-id", params: { id: data[0].id } });
  }
}

const montres = ref<Montre>(props.data?? {});
</script>

<template>
  <div class="css flex justify-center">
    <div class="flex max-w-full content-center w-[900px] h-[1292px] rounded-[10px]  bg-Blanc gap-20 pl-56 pr-0 p-4" 
    style="box-shadow: 7px 7px 4px 0 rgba(0,0,0,0.25);">
      <div class="flex ">
      <div class="flex content-start">
        <div class=" w-60">
          <MontreSvg
            class=" w-60"
            v-bind="montre"
            id="montresvg"
          />
        </div>
      </div>
      <div class="pl-32">
        <FormKit type="form" v-model="montre" :submit-attrs="{inputClass: 'flex item-center  justify-center w-[160px] h-[30px] relative pt-1 rounded-[7px] bg-[#38a3a5] text-[16px] font-bold text-center text-[#f7faff]'}" @submit="upsertMontre">
            <svg
              width="71"
              height="18"
              viewBox="0 0 71 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-[71px] h-[18px] relative"
              preserveAspectRatio="none"
            >
              <path
                d="M7.62692 6.70264L8.05716 8.03585C8.25707 8.65533 8.83372 9.07518 9.48467 9.07518H10.8914C11.3749 9.07518 11.5769 9.69325 11.1866 9.97873L10.0368 10.8198C9.51468 11.2018 9.29624 11.8754 9.49493 12.4911L9.93133 13.8434C10.0802 14.3047 9.55147 14.6867 9.16029 14.4005L8.03669 13.5786C7.5093 13.1928 6.79285 13.1928 6.26547 13.5786L5.14187 14.4005C4.75068 14.6867 4.22198 14.3047 4.37083 13.8434L4.80723 12.4911C5.00591 11.8754 4.78748 11.2018 4.26533 10.8198L3.11557 9.97873C2.72531 9.69324 2.92724 9.07518 3.41077 9.07518H4.81749C5.46843 9.07518 6.04508 8.65534 6.245 8.03585L6.67524 6.70264C6.82431 6.24072 7.47785 6.24072 7.62692 6.70264Z"
                fill="#FDCA8B"
                stroke="#FDCA8B"
              ></path>
              <path
                d="M21.9291 6.70264L22.3593 8.03585C22.5593 8.65533 23.1359 9.07518 23.7869 9.07518H25.1936C25.6771 9.07518 25.879 9.69325 25.4888 9.97873L24.339 10.8198C23.8169 11.2018 23.5984 11.8754 23.7971 12.4911L24.2335 13.8434C24.3824 14.3047 23.8537 14.6867 23.4625 14.4005L22.3389 13.5786C21.8115 13.1928 21.095 13.1928 20.5677 13.5786L19.4441 14.4005C19.0529 14.6867 18.5242 14.3047 18.673 13.8434L19.1094 12.4911C19.3081 11.8754 19.0897 11.2018 18.5675 10.8198L17.4178 9.97873C17.0275 9.69324 17.2294 9.07518 17.713 9.07518H19.1197C19.7706 9.07518 20.3473 8.65534 20.5472 8.03585L20.9774 6.70264C21.1265 6.24072 21.78 6.24072 21.9291 6.70264Z"
                fill="#FDCA8B"
                stroke="#FDCA8B"
              ></path>
              <path
                d="M36.2312 6.70264L36.6615 8.03585C36.8614 8.65533 37.438 9.07518 38.089 9.07518H39.4957C39.9792 9.07518 40.1812 9.69325 39.7909 9.97873L38.6411 10.8198C38.119 11.2018 37.9006 11.8754 38.0992 12.4911L38.5356 13.8434C38.6845 14.3047 38.1558 14.6867 37.7646 14.4005L36.641 13.5786C36.1136 13.1928 35.3972 13.1928 34.8698 13.5786L33.7462 14.4005C33.355 14.6867 32.8263 14.3047 32.9751 13.8434L33.4115 12.4911C33.6102 11.8754 33.3918 11.2018 32.8696 10.8198L31.7199 9.97873C31.3296 9.69324 31.5315 9.07518 32.0151 9.07518H33.4218C34.0727 9.07518 34.6494 8.65534 34.8493 8.03585L35.2796 6.70264C35.4286 6.24072 36.0822 6.24072 36.2312 6.70264Z"
                fill="#FDCA8B"
                stroke="#FDCA8B"
              ></path>
              <path
                d="M50.5334 6.70264L50.9637 8.03585C51.1636 8.65533 51.7402 9.07518 52.3912 9.07518H53.7979C54.2814 9.07518 54.4833 9.69325 54.0931 9.97873L52.9433 10.8198C52.4212 11.2018 52.2027 11.8754 52.4014 12.4911L52.8378 13.8434C52.9867 14.3047 52.458 14.6867 52.0668 14.4005L50.9432 13.5786C50.4158 13.1928 49.6993 13.1928 49.172 13.5786L48.0484 14.4005C47.6572 14.6867 47.1285 14.3047 47.2773 13.8434L47.7137 12.4911C47.9124 11.8754 47.694 11.2018 47.1718 10.8198L46.0221 9.97873C45.6318 9.69324 45.8337 9.07518 46.3173 9.07518H47.724C48.3749 9.07518 48.9516 8.65534 49.1515 8.03585L49.5817 6.70264C49.7308 6.24072 50.3843 6.24072 50.5334 6.70264Z"
                fill="#FDCA8B"
                stroke="#FDCA8B"
              ></path>
              <path
                d="M64.3247 6.70264L64.755 8.03585C64.9549 8.65533 65.5315 9.07518 66.1825 9.07518H67.5892C68.0727 9.07518 68.2747 9.69325 67.8844 9.97873L66.7346 10.8198C66.2125 11.2018 65.9941 11.8754 66.1927 12.4911L66.6291 13.8434C66.778 14.3047 66.2493 14.6867 65.8581 14.4005L64.7345 13.5786C64.2071 13.1928 63.4907 13.1928 62.9633 13.5786L61.8397 14.4005C61.4485 14.6867 60.9198 14.3047 61.0686 13.8434L61.505 12.4911C61.7037 11.8754 61.4853 11.2018 60.9631 10.8198L59.8134 9.97873C59.4231 9.69324 59.6251 9.07518 60.1086 9.07518H61.5153C62.1662 9.07518 62.7429 8.65534 62.9428 8.03585L63.3731 6.70264C63.5221 6.24072 64.1757 6.24072 64.3247 6.70264Z"
                fill="#F9F8F6"
                stroke="#FDCA8B"
              ></path>
              <path
                d="M63.5098 7.85165V12.7855C63.5098 12.945 63.4338 13.0949 63.305 13.1891L62.0005 14.1434C61.6093 14.4295 61.0806 14.0475 61.2294 13.5862L61.6658 12.2339C61.8645 11.6182 61.6461 10.9445 61.124 10.5626L59.9741 9.72145C59.5839 9.43597 59.7858 8.81791 60.2693 8.8179L61.7846 8.81788C62.384 8.81788 62.8991 8.39265 63.0127 7.80411C63.0313 7.70759 63.0722 7.66447 63.1068 7.64111C63.1487 7.6128 63.2112 7.59509 63.2829 7.60195C63.3546 7.60881 63.4125 7.63803 63.4484 7.67377C63.4779 7.70327 63.5098 7.75335 63.5098 7.85165Z"
                fill="#FDCA8B"
                stroke="#FDCA8B"
              ></path>
            </svg>

          <p class="flex-grow-0 flex-shrink-0 text-[20px] font-bold text-left text-[#000910]">Classic Chronograph</p>
          <p class="text-[15px] font-thin text-left text-[#000910]">Montre connectée mixte</p>
          <p class="text-[25px] font-bold text-left text-[#38a3a5]">119,99€</p>
              <FormKitListColors name="bracelet" label="Bracelet" />
              <FormKitListColors name="cadran_extérieur" label="Cadran extérieur" />
              <FormKitListColors name="cadran_intérieur" label="Cadran intérieur" />
              <FormKitListColors name="écran" label="Ecran" />
              <FormKit label="matériaux" value="#FFFFFF"  type="radio" :options="materiaux" :sections-schema="{
          inner: {$el: null},  decorator: {$el: null},
        }" input-class="peer sr-only" options-class="flex gap-1">
          <template #label="context">
            <div
            class="h-6 w-6 rounded-full border-2 peer-checked:border-black"
            :style="{ backgroundImage: `url('${context.option.value}')`}"
            />
            <span class="sr-only">{{ context.option.label}}</span>

                </template>
              </FormKit>
              <FormKit name="commander" label="Commander" type="checkbox" />
              </FormKit>
          
      </div>
    </div>
   
  </div>
  
  </div>
</template>
<style>
body {background-color:#F9F8F6}



</style>
