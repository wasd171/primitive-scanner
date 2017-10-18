<template>
    <app-button :on-click="handleClick">Scan</app-button>
</template>

<script>
import AppButton from './AppButton'

export default {
	components: {
		AppButton
	},
	methods: {
		handleClick() {
			this.$router.push('/options')
		}
	}
}
</script>
