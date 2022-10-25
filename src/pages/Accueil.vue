<script setup lang="ts">
import ListeMontre from "@/components/ListeMontre.vue";
import { user } from "@/supabase";
import type { Montre } from "@/types";
import MontreSvg from "../components/MontreSvg.vue";


</script>

<template>
  <section>
    <h1 class="text-2xl">
      Personnaliser votre propre montre connectée
    </h1>
    <img src="../assets/SVG MEDIUM.svg" alt="Montre de taille medium" />
    <img src="../assets/SVG BIG.svg" alt="Montre de grande taille" />

  </section>
  <section v-if="user">
 <h2>
 un extrait de vos chaussures (<RouterLink
 class="text-red-600 underline"
 to="/basket"
 >Toutes les voir</RouterLink
 >)
 </h2>
 <ListeMontre class="flex flex-wrap gap-2" :max="3" />
</section>

</template>