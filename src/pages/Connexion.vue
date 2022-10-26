<script setup>
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'

defineProps({
    msg: String
})
const count = ref(0)
supabase.auth.onAuthStateChange((event, session) => {
    if (session == null) {
        document.getElementById('status').innerHTML = 'You are not logged !!!';
    } else {
        //alert('session value: ' + JSON.stringify(session)) 
        document.getElementById('status').innerHTML = 'Vous êtes connecté avec le compte: ' + session.user.email;
    }
})

</script>

<template>
    <div>
        <div class="">
            <div>

            </div>
            <div class="flex justify-center min-h-screen ">
                <div class="container sm:mt-40 mt-24 my-auto max-w-md  p-3 shadow-xl bg-noirfond">

                    <div class="text-center m-6">
                        <h1 class="text-3xl font-semibold font-roboto text-blanctext">S'INSCRIRE</h1>
                        <p class="font-thin text-sm font-roboto text-blanctext">Créer votre compte, afin de pouvoir
                            réaliser
                            toutes vos
                            envies en personnalisant nos montre TikTak.</p>
                    </div>

                    <div class=" m-6">
                        <form class="mb-4">
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                    Address mqil</label>
                                <input type="email" name="email" id="email" placeholder="xxx@xxx.xxx"
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div class="mb-6">
                                <button type="button"
                                    class="w-full px-3 py-4 text-noirfond bg-blanctext focus:outline-none duration-100 ease-in-out">S'INSCRIRE</button>
                            </div>

                        </form>
                        <!-- seperator -->
                        <div class="flex flex-row justify-center mb-8">
                            <span class="absolute bg-noirfond px-4 text-blanctext">ou connectez-vous avec</span>
                            <div class="w-full bg-gray-200 mt-3 h-px"></div>
                        </div>
                        <!-- alternate sign-in -->
                        <div class="flex flex-row gap-2">
                            <button @click="login()"
                                class="bg-blanctext text-noirfond  w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-beige duration-100 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    class="w-5" viewBox="0 0 48 48">
                                    <defs>
                                        <path id="a"
                                            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                                    </defs>
                                    <clipPath id="b">
                                        <use xlink:href="#a" overflow="visible" />
                                    </clipPath>
                                    <path clip-path="url(#b)" fill="#1A1B20" d="M0 37V11l17 13z" />
                                    <path clip-path="url(#b)" fill="#1A1B20" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                    <path clip-path="url(#b)" fill="#1A1B20" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                    <path clip-path="url(#b)" fill="#1A1B20" d="M48 48L17 24l-4-3 35-10z" />
                                </svg>
                                Google
                            </button>
                            <button @click="loginWithFacebook()" class=" bg-blanctext text-noirfond  w-full p-2 flex flex-row justify-center gap-2 items-center
                        rounded-sm hover:bg-beige duration-100 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px">
                                    <path fill="#1A1B20" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
                                    <path fill="#fff"
                                        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z" />
                                </svg>
                                Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- component -->
<!-- component -->
<div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
  <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <h1 class="font-bold text-center text-2xl mb-5">    <svg width="96,66" height="30" viewBox="0 0 116 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.78783 23.613V2.78738H0V0H18.7372V2.78738H10.9162V23.613H7.78783ZM20.3817 3.33497V0H23.2834V3.33497H20.3817ZM20.3817 23.613V6.50717H23.2834V23.613H20.3817ZM27.9605 23.613V0H31.0878V11.7103L42.8264 0H47.0677L37.1508 9.56833L47.5025 23.613H43.3746L34.9581 11.6619L31.0878 15.4312V23.613H27.9605ZM49.3253 12.0489C49.3253 10.9208 49.7227 9.9598 50.5186 9.16482C51.3243 8.37094 52.2864 7.97289 53.4048 7.97289C54.5331 7.97289 55.4952 8.37094 56.291 9.16482C57.0968 9.9598 57.4996 10.9208 57.4996 12.0489C57.4996 13.176 57.0968 14.1425 56.291 14.9474C55.4952 15.7424 54.5331 16.1393 53.4048 16.1393C52.2864 16.1393 51.3243 15.7424 50.5186 14.9474C49.7227 14.1425 49.3253 13.176 49.3253 12.0489ZM67.7071 23.613V2.78738H59.9191V0H78.6553V2.78738H70.8355V23.613H67.7071ZM89.0081 21.5029C87.9326 22.4155 86.8957 23.0599 85.8951 23.4359C84.9066 23.812 83.8421 24 82.7028 24C80.8216 24 79.3763 23.5437 78.3658 22.6311C77.3553 21.7074 76.8501 20.5309 76.8501 19.1037C76.8501 18.2658 77.0372 17.5027 77.4137 16.8155C77.8011 16.1184 78.3009 15.5598 78.914 15.1409C79.537 14.722 80.236 14.4053 81.0099 14.1909C81.579 14.0402 82.4398 13.8951 83.5901 13.7555C85.9336 13.4762 87.6585 13.1441 88.7659 12.7571C88.7769 12.3601 88.7813 12.1072 88.7813 12.0006C88.7813 10.8185 88.5072 9.98727 87.959 9.50347C87.2182 8.84813 86.1163 8.52156 84.6534 8.52156C83.2885 8.52156 82.278 8.76236 81.623 9.24616C80.9779 9.71787 80.4991 10.5612 80.1876 11.7741L77.3498 11.3881C77.6074 10.1742 78.0323 9.1978 78.6234 8.45669C79.2145 7.7046 80.0687 7.13065 81.1871 6.73371C82.3055 6.32467 83.6 6.12125 85.0728 6.12125C86.5346 6.12125 87.7235 6.29277 88.6371 6.63693C89.5507 6.97999 90.2222 7.41542 90.6526 7.94101C91.0819 8.4567 91.3835 9.11202 91.5552 9.9059C91.6521 10.3996 91.7005 11.2913 91.7005 12.58V16.4461C91.7005 19.1411 91.76 20.8476 91.8778 21.5678C92.0065 22.2759 92.2542 22.9576 92.6197 23.613H89.5882C89.2865 23.0115 89.0939 22.3089 89.0081 21.5029ZM88.7659 15.0277C87.7124 15.4576 86.1317 15.8226 84.0249 16.1239C82.8316 16.2954 81.9884 16.489 81.4931 16.7034C80.9989 16.9178 80.6169 17.2345 80.3483 17.6534C80.0797 18.0613 79.9454 18.5176 79.9454 19.0223C79.9454 19.7953 80.236 20.4397 80.8161 20.9554C81.4072 21.471 82.2669 21.7283 83.3963 21.7283C84.5136 21.7283 85.5087 21.4864 86.3794 21.0037C87.2501 20.51 87.8897 19.8382 88.2981 18.9904C88.6096 18.3351 88.7659 17.3686 88.7659 16.0909V15.0277ZM96.457 23.613V0H99.5853V11.7103L111.324 0H115.564L105.648 9.56833L116 23.613H111.872L103.456 11.6619L99.5853 15.4312V23.613H96.457Z" fill="#000910"/>
<circle cx="55" cy="12" r="6" fill="#38A3A5"/>
</svg></h1>  
    <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
      <div class="px-5 py-7">
        <div class="text-center m-6">
                        <h1 class="text-xl font-semibold font-roboto text-blanctext">Inscrivez vous</h1>
                        <p class="font-thin text-sm font-roboto text-blanctext">Créer votre compte pour pouvoir personnaliser la montre connectée de vos rêves!</p>
                    </div>
        <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
        <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
        <label class="font-semibold text-sm text-gray-600 pb-1 block">Mot de passe</label>
        <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
        <button type="button" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span class="inline-block mr-2">Connectez-vous</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>
      </div>
      <div class="p-5">
        <div class="flex flex-row gap-2">
                            <button @click="login()"
                                class="bg-blanctext text-noirfond  w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-beige duration-100 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    class="w-5" viewBox="0 0 48 48">
                                    <defs>
                                        <path id="a"
                                            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                                    </defs>
                                    <clipPath id="b">
                                        <use xlink:href="#a" overflow="visible" />
                                    </clipPath>
                                    <path clip-path="url(#b)" fill="#1A1B20" d="M0 37V11l17 13z" />
                                    <path clip-path="url(#b)" fill="#1A1B20" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                    <path clip-path="url(#b)" fill="#1A1B20" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                    <path clip-path="url(#b)" fill="#1A1B20" d="M48 48L17 24l-4-3 35-10z" />
                                </svg>
                                Google
                            </button>
                            <button @click="loginWithFacebook()" class=" bg-blanctext text-noirfond  w-full p-2 flex flex-row justify-center gap-2 items-center
                        rounded-sm hover:bg-beige duration-100 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px">
                                    <path fill="#1A1B20" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
                                    <path fill="#fff"
                                        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z" />
                                </svg>
                                Facebook
                            </button>
                        </div>
      </div>
        <div class="py-5">
        <div class="grid grid-cols-2 gap-1">
          <div class="text-center sm:text-left whitespace-nowrap">
            <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                <span class="inline-block ml-1">Mot de passe oublié?</span>
            </button>
          </div>
          <div class="text-center sm:text-right whitespace-nowrap">
            <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-bottom	">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span class="inline-block ml-1">Help</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5">
        <div class="grid grid-cols-2 gap-1">
          <div class="text-center sm:text-left whitespace-nowrap">
            <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span class="inline-block ml-1">Back to your-app.com</span>
            </button>
          </div>
        </div>
      </div>
  </div>
</div>
</template>


<script>
const SUPABASE_KEY = 'eeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4Z2l2ZGZ5anNnYWRseGx5dG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1NTEzODEsImV4cCI6MTk4MjEyNzM4MX0.FAKCeSkrCgNcrNv95KeBnuxXvXcIz3MC327_hxH3ZFg'
const SUPABASE_URL = "https://ahlzqgaukrgsgmorgyem.supabase.co"
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
export default {
    methods: {
        async logout() {
            try {
                const { user, session, error } = await supabase.auth.signOut();
                if (error) throw error;
                document.getElementById('status').innerHTML = 'You are disconnected !'
            } catch (error) {
                alert(error.error_description || error.message);
            }
        },
        //this method allows to log in the system using Google provider 

        async login() {
            try {
                const { user, session, error } = await supabase.auth.signIn({
                    provider: 'google',
                });
                if (error) throw error;
            } catch (error) {
                alert(error.error_description || error.message);
            }
        },

        async loginWithFacebook() {
            try {
                const { user, session, error } = await supabase.auth.signIn({
                    provider: 'facebook'
                });
                if (error) throw error;
            } catch (error) {
                alert(error.error_description || error.message);
            }
        },

        async logoutfb() {
            try {
                const { error } = await supabase.auth.signOut()
            } catch (error) {
                alert(error.error_description || error.message);
            }
        },


    }
}  
</script>

