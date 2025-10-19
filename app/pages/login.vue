<script setup lang="ts">
const supabase = useSupabaseClient()
const email = ref('')

const signInWithOtp = async () => {
  console.log('signInWithOtp called', email.value)
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: 'http://localhost:3000/confirm'
    }
  })
  if (error) console.log(error)
}
</script>
<template>
  <div class="flex flex-col gap-4 max-w-md mx-auto mt-32">
    <u-button @click="signInWithOtp">Sign In with E-Mail</u-button>
    <u-input v-model="email" type="email" />
  </div>
</template>
