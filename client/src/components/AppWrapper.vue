<template>
  <styled-div>
      <slot></slot>
  </styled-div>
</template>

<script>
import { styled } from 'styletron-vue'

const StyledDiv = styled('div', {
	minHeight: '100vh',
	maxHeight: '100vh',
	width: '100vw',
	display: 'flex',
	flexDirection: 'column'
})

export default {
	components: {
		StyledDiv
	}
}
</script>

