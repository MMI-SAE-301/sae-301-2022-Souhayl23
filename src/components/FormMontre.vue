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
        <FormKit type="form" v-model="montre" @submit="upsertMontre">
              <FormKitListColors name="bracelet" label="bracelet" />
              <FormKitListColors name="cadran_extérieur" label="cadran extérieur" />
              <FormKitListColors name="cadran_intérieur" label="cadran intérieur" />
              <FormKitListColors name="écran" label="écran" />
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
              <FormKit name="commander" label="commander" type="button" />
              </FormKit>
           

          <router-link to="/Mon Compte"><div
    class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[160px] h-[35px] relative gap-[30px]  py-[15px] rounded-[7px] bg-[#38a3a5]"
  >
    <p class="flex-grow-0 flex-shrink-0 text-[16px] font-bold text-center text-[#f7faff]">
      <FormKit name="commander" label="Commander" type="button" />
    </p>
  </div></router-link>
      </div>
      
    </div>
   
  </div>
  
  </div>
</template>
<style>
body {background-color:#F9F8F6}



</style>
