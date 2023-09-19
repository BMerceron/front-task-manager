<template>
  <v-sheet width="500" class="mx-auto">
    <!-- TODO: manage the loading state before change page -->
    <v-card :loading="loading" title="Front Task Manager">
      <v-form validate-on="submit lazy" @submit.prevent="submitForm">
        <v-text-field
          v-model="username"
          :rules="[usernameRules.required, usernameRules.min, usernameRules.max]"
          label="Pseudo"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eyeOff'"
          :type="showPassword ? 'text' : 'password'"
          :rules="[passwordRules.required, passwordRules.min, passwordRules.max]"
          label="Mot de passe"
          hint="At least 12 characters"
          counter
          @click:append="showPassword = !showPassword"
        ></v-text-field>
        <v-card-actions>
          <v-btn
            :loading="loading"
            color="primary"
            size="x-large"
            variant="flat"
            type="submit"
            block
            class="mt-2"
            :text="
              route.name === 'signin' ? buttonLabels.connectAccount : buttonLabels.createAccount
            "
          ></v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn
            :loading="loading"
            size="x-large"
            variant="flat"
            block
            class="mt-2"
            :text="
              route.name === 'signin' ? buttonLabels.createAccount : buttonLabels.connectAccount
            "
            @click="switchForm"
          ></v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

// datas
const loading = ref(false)
const buttonLabels = ref({
  connectAccount: 'Se connecter',
  createAccount: 'Créer mon compte'
})
const username = ref('')
const showPassword = ref(false)
const password = ref('')

// rules
const ruleRequired = (value: string) => !!value || 'Champ requis.'
const usernameRules = {
  required: ruleRequired,
  min: (value: string) => value.length >= 4 || 'Minimum : 4 caractères',
  max: (value: string) => value.length <= 20 || 'Maximum : 20 caractères'
}
const passwordRules = {
  required: ruleRequired,
  min: (value: string) => value.length >= 8 || 'Minimum : 8 caractères',
  max: (value: string) => value.length <= 32 || 'Maximum : 32 caractères'
}

// functions
const switchForm = () => {
  if (route.name === 'signin') return router.push({ name: 'signup' })
  if (route.name === 'signup') return router.push({ name: 'signin' })
}

// Submit Actions
const emit = defineEmits(['update:modelValue'])
const submitForm = () => {
  let credentials = {
    username: username.value,
    password: password.value
  }
  emit('update:modelValue', credentials)
}
</script>

<style scoped></style>
