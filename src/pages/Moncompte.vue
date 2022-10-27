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
    <LoginLougout />
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

