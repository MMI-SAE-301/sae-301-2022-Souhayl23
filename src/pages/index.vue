<script setup lang="ts">
import ListeMontre from "@/components/ListeMontre.vue";
import { user } from "@/supabase";
import type { Montre } from "@/types";
import MontreSvg from "../components/MontreSvg.vue";


</script>

<template>
  <section>
    <h1 class="text-2xl">
      Montre<code class="font-mono text-base">/src/pages/index.vue</code>
    </h1>
    <MontreSvg />
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