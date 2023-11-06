<template>
	<template>
		<v-row justify="center">
			<v-dialog v-model="dialog" width="1024">
				<v-card>
					<v-card-title>
						<span class="text-h5">
              {{ modalContext?.context == "CREATE" ? "Créer une nouvelle tâche" : "Modifier la tâche"}}
            </span>
					</v-card-title>
					<v-form validate-on="submit lazy" @submit.prevent="submitForm">
						<v-card-text>
							<v-container>
								<v-row>
									<v-col cols="12" sm="6" md="4">
										<v-text-field 
                      label="Titre de la tâche" 
                      v-model="taskFormValues.title" 
                      :rules="[titleRules.required]"
											required
                    ></v-text-field>
									</v-col>
									<v-col cols="12" sm="6" md="4">
										<v-text-field 
                      label="Description" 
                      hint="Voilà ma super tâche ..." 
                      v-model="taskFormValues.description"
										  :rules="[descriptionRules.required]" 
                      required
                    >
                    </v-text-field>
									</v-col>
								</v-row>
							</v-container>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="blue-darken-1" variant="text" @click="emit('update:showModal')">
								Annuler
							</v-btn>
							<v-btn type="submit" color="blue-darken-1" variant="text">
                {{ modalContext?.context == "CREATE" ? "Créer" : "Modifier"}}
							</v-btn>
						</v-card-actions>
					</v-form>
				</v-card>
			</v-dialog>
		</v-row>
	</template>
</template>

<script setup lang="ts">
import { ref,reactive, onUpdated } from 'vue'

const props = defineProps({
	showModal: {
		type: Boolean,
	},
	modalContext: {
		type: Object
	}
})

const dialog = ref(props.showModal)
const taskFormValues = reactive({
  id: props.modalContext?.task.id,
  title: props.modalContext?.task.title,
  description: props.modalContext?.task.description,
  status: props.modalContext?.task.status
})

// TODO : Find why props dont be load in reactive object before modal is rendering
onUpdated(() => {
  console.log('updated :', taskFormValues)
	dialog.value = props.showModal
  taskFormValues.id = props.modalContext?.task.id
  taskFormValues.title = props.modalContext?.task.title
  taskFormValues.description = props.modalContext?.task.description
  taskFormValues.status = props.modalContext?.task.status
})

// rules
const ruleRequired = (value: string) => !!value || 'Champ requis.'

const titleRules = {
	required: ruleRequired
}
const descriptionRules = {
	required: ruleRequired
}

const emit = defineEmits(['update:showModal', 'update:modelValue'])

const submitForm = () => {
  console.log('modal values :', taskFormValues)
  emit('update:modelValue', taskFormValues)
	emit('update:showModal')
}
</script>
<style scoped></style>