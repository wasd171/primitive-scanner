<template>
    <styled-button @click="onClick">
         <slot></slot>
    </styled-button>
</template>

<script>
import { styled } from 'styletron-vue'

const StyledButton = styled('button', {
	fontSize: '17px',
	backgroundColor: 'white',
	textTransform: 'uppercase',
	padding: '8px 17px',
	border: '3px solid black',
	cursor: 'pointer',
	outline: 'none'
})

export default {
	props: ['onClick'],
	components: {
		StyledButton
	}
}
</script>
