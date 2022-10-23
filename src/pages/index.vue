<script setup lang="ts">
import ListeMontre from "@/components/ListeMontre.vue";
import { user } from "@/supabase";
import type { Montre } from "@/types";
import MontreSvg from "../components/MontreSvg.vue";

const exemple0: Montre = {
    bracelet: "#FF0000",
    cadran_extérieur: "#FF0000",
    cadran_intérieur: "#FF0000",
    écran: "#FF0000",
};

</script>

<template>
    <section>
    <h1 class="text-2xl">Exemples de Montres</h1>
    <div class="flex flex-wrap gap-2">
      <div class="w-64">
        <RouterLink
          :to="{
            name: 'montre-exemple-data',
            params: { data: JSON.stringify(exemple0) },
          }"
        >
          <MontreSvg class="w-64" v-bind="exemple0" />
        </RouterLink>
      </div>
    </div>
  </section>
  <section>
    <h1 class="text-2xl">
      Montre<code class="font-mono text-base">/src/pages/index.vue</code>
    </h1>
    <MontreSvg />
  </section>
  <section v-if="user">
  <h2>
  un extrait de vos montres (<RouterLink
  class="text-red-600 underline"
  to="/montres"
  >Toutes les voir</RouterLink
  >)
  </h2>
  </section>
  <ListeMontre class="flex flex-wrap gap-2" :max="3" />
</template>