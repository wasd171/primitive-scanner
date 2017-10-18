<template>
  <styled-main>
      <slot></slot>
  </styled-main>
</template>

<script>
import { styled } from 'styletron-vue'

const StyledMain = styled('main', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh'
})

export default {
	components: {
		StyledMain
	}
}
</script>
