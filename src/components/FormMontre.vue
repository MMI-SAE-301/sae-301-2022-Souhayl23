<script setup lang="ts">
import type { Montre } from "@/types";
import { colors } from "@/types";
import { ref } from "vue";
import { useRouter } from "vue-router";
import MontreSvg from "./MontreSvg.vue";



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
    router.push({ name: "montre-edit-id", params: { id: data[0].id } });
  }
}

const chaussure = ref<Montre>(props.data ?? {});
</script>

<template>
  <div class="css">
    <div class="flex content-center p-4">
      <div class="flex content-center">
        <ul class="flex gap-5">
          <li><a href="#montresvg">Profil</a></li>
        </ul>
        <div class="carousel w-60">
          <MontreSvg
            class="carousel-item w-60"
            v-bind="chaussure"
            id="montresvg"
          />
        </div>
      </div>
      <div class="place">
        <FormKit type="form" v-model="montre" @submit="upsertMontre">
              <FormKitListColors name="bracelet" label="bracelet" />
              <FormKitListColors name="cadran_extérieur" label="cadran_extérieur" />
              <FormKitListColors name=" cadran_intérieur" label=" cadran_intérieur" />
              <FormKitListColors name="écran" label="écran" />
              <FormKitListColors name="bande" label="bande" />

              <FormKit name="commander" label="commander" type="checkbox" />
              </FormKit>
      </div>
    </div>
  </div>
</template>

