<template>
  <!-- component -->
<nav class="flex px-20 items-center justify-between flex-wrap bg-teal dark:bg-gray-800 dark:text-BlancCreme py-6">
  <router-link to="/"><div class="flex items-center flex-no-shrink text-white mr-6">
    <svg width="120" height="15" viewBox="0 0 116 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.78783 23.613V2.78738H0V0H18.7372V2.78738H10.9162V23.613H7.78783ZM20.3817 3.33497V0H23.2834V3.33497H20.3817ZM20.3817 23.613V6.50717H23.2834V23.613H20.3817ZM27.9605 23.613V0H31.0878V11.7103L42.8264 0H47.0677L37.1508 9.56833L47.5025 23.613H43.3746L34.9581 11.6619L31.0878 15.4312V23.613H27.9605ZM49.3253 12.0489C49.3253 10.9208 49.7227 9.9598 50.5186 9.16482C51.3243 8.37094 52.2864 7.97289 53.4048 7.97289C54.5331 7.97289 55.4952 8.37094 56.291 9.16482C57.0968 9.9598 57.4996 10.9208 57.4996 12.0489C57.4996 13.176 57.0968 14.1425 56.291 14.9474C55.4952 15.7424 54.5331 16.1393 53.4048 16.1393C52.2864 16.1393 51.3243 15.7424 50.5186 14.9474C49.7227 14.1425 49.3253 13.176 49.3253 12.0489ZM67.7071 23.613V2.78738H59.9191V0H78.6553V2.78738H70.8355V23.613H67.7071ZM89.0081 21.5029C87.9326 22.4155 86.8957 23.0599 85.8951 23.4359C84.9066 23.812 83.8421 24 82.7028 24C80.8216 24 79.3763 23.5437 78.3658 22.6311C77.3553 21.7074 76.8501 20.5309 76.8501 19.1037C76.8501 18.2658 77.0372 17.5027 77.4137 16.8155C77.8011 16.1184 78.3009 15.5598 78.914 15.1409C79.537 14.722 80.236 14.4053 81.0099 14.1909C81.579 14.0402 82.4398 13.8951 83.5901 13.7555C85.9336 13.4762 87.6585 13.1441 88.7659 12.7571C88.7769 12.3601 88.7813 12.1072 88.7813 12.0006C88.7813 10.8185 88.5072 9.98727 87.959 9.50347C87.2182 8.84813 86.1163 8.52156 84.6534 8.52156C83.2885 8.52156 82.278 8.76236 81.623 9.24616C80.9779 9.71787 80.4991 10.5612 80.1876 11.7741L77.3498 11.3881C77.6074 10.1742 78.0323 9.1978 78.6234 8.45669C79.2145 7.7046 80.0687 7.13065 81.1871 6.73371C82.3055 6.32467 83.6 6.12125 85.0728 6.12125C86.5346 6.12125 87.7235 6.29277 88.6371 6.63693C89.5507 6.97999 90.2222 7.41542 90.6526 7.94101C91.0819 8.4567 91.3835 9.11202 91.5552 9.9059C91.6521 10.3996 91.7005 11.2913 91.7005 12.58V16.4461C91.7005 19.1411 91.76 20.8476 91.8778 21.5678C92.0065 22.2759 92.2542 22.9576 92.6197 23.613H89.5882C89.2865 23.0115 89.0939 22.3089 89.0081 21.5029ZM88.7659 15.0277C87.7124 15.4576 86.1317 15.8226 84.0249 16.1239C82.8316 16.2954 81.9884 16.489 81.4931 16.7034C80.9989 16.9178 80.6169 17.2345 80.3483 17.6534C80.0797 18.0613 79.9454 18.5176 79.9454 19.0223C79.9454 19.7953 80.236 20.4397 80.8161 20.9554C81.4072 21.471 82.2669 21.7283 83.3963 21.7283C84.5136 21.7283 85.5087 21.4864 86.3794 21.0037C87.2501 20.51 87.8897 19.8382 88.2981 18.9904C88.6096 18.3351 88.7659 17.3686 88.7659 16.0909V15.0277ZM96.457 23.613V0H99.5853V11.7103L111.324 0H115.564L105.648 9.56833L116 23.613H111.872L103.456 11.6619L99.5853 15.4312V23.613H96.457Z" fill="#000910"/>
<circle cx="55" cy="12" r="6" fill="#38A3A5"/>
</svg>
    <span class="font-semibold text-xl tracking-tight"></span>
  </div></router-link>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
      <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <router-link to="/" class="block mt-4 lg:inline-block text-[16px] font-bold lg:mt-0 text-teal-lighter hover:text-black mr-4">
        Accueil
      </router-link>
      <router-link to="#" class="block mt-4 lg:inline-block text-[16px] font-bold lg:mt-0 text-teal-lighter hover:text-black mr-4">Contact</router-link>
    
      <router-link to="/Personnalisation" class="block mt-4 lg:inline-block text-[16px] font-bold lg:mt-0 text-teal-lighter hover:text-black mr-4">
        Personnalisation
      </router-link></div>
      <section v-if="user">
      </section>

      <router-link to="/Connexion"><div
    class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[160px] h-[35px] relative gap-[30px]  py-[15px] rounded-[7px] bg-[#38a3a5]"
  >
    <p class="flex-grow-0 flex-shrink-0 text-[16px] font-bold text-center text-[#f7faff]">
      S'identifier
    </p>
  </div></router-link>
  </div>
</nav>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>

    
<footer class="p-4 bg-BleuJade rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2022 <a class="hover:underline">TiK•TaK™</a>. Tout droits réservés.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">A propos</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Mentions légales</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licence</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
</footer>


</template>

<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";
import LoginLougout from './components/LoginLougout.vue'
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'
</script>

<style>
body {background-color:#E3DEDA}



</style>
