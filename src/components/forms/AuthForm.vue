<template>
  <v-sheet width="500" class="auth-form">
    <!-- TODO: manage the loading state before change page -->
    <v-card :loading="loading" title="Connexion - Front Task Manager">
      <v-form validate-on="submit lazy" @submit.prevent="submitForm">
        <v-text-field
          :rules="[usernameRules.required]"
          v-model="username"
          label="Pseudo"
        ></v-text-field>
        <v-text-field
          :rules="[passwordRules.required]"
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          label="Mot de passe"
          counter
          @click:append="showPassword = !showPassword"
        ></v-text-field>
        <div class="rules" v-for="message in messages" :key="message">
          <p>{{ message }}</p>
        </div>
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
import { ref, defineProps } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  messages: {
    type: [String]
  }
})

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
  required: ruleRequired
}
const passwordRules = {
  required: ruleRequired
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

<style scoped>
.rules {
  color: red;
  font-size: 12px;
}

.auth-form {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>
