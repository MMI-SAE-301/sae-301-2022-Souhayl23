<script setup lang="ts">
import { ref } from 'vue'
import MontreSvg from "../components/MontreSvg.vue";



const listeMontre = ref()

async function Montres() {
    const { error, data } = await supabase
        .from('Montre')
        .select('*')
        .eq('utilisateur', supabase.auth.user().id)
    listeMontre.value = data
}

Montres()

const montre = defineProps(["id", "Montre"]);


</script>
<template>
    <section>
        <div class="flex justify-center flex-col ">

            <div class="flex justify-center py-10"> <h2>
  <p class="text-[30px] font-bold text-center">
  <span class="text-[30px] font-bold text-center text-[#000910]">Mes </span>
  <span class="text-[30px] font-bold text-center text-[#38a3a5]">modèles </span>
</p></h2> </div>
            <div class="w-full flex justify-center">


                <div class=" w-7/12 justify-center pb-20 mr-28 grid grid-cols-3 pt-16 gap-44 ">
                    <div v-for="Liste_Montre in listeMontre" :key="Liste_Montre.id"
                        class="grid grid-cols-3 justify-center">
                        <MontreSvg class="w-64" v-bind="Liste_Montre" />
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>