<script setup lang="ts">
import ListeMontre from "@/components/ListeMontre.vue";
import { user } from "@/supabase";
import type { Montre } from "@/types";
import MontreSvg from "../components/MontreSvg.vue";


</script>

<template>
  <div class="flex ml-auto gap-5 justify-end pr-56 h-540">
      <div class="pt-28 ">
        <h1 class="text-3xl">
            Personnalise ta propre <br />montre connectée</h1>
        <p>HOLLYWOOD</p>
      </div>

    
    <img class="-mr-10" src="../assets/SVGMEDIUM.svg" alt="Montre de taille medium" />
    <img src="../assets/SVGBIG.svg" alt="Montre de grande taille" />
  </div>
  <div class="static">
<div class=" absolute bottom-0 left-0">
  <img  src="../assets/Illustrationtikt&k.svg" alt="Illustration" />
</div>
</div>

<div>
<div class="bg-black h-9 -mt-">

</div>
</div>
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