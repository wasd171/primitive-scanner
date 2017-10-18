<template>
  <app-wrapper id="app">
    <app-header></app-header>
    <app-main>
      <router-view></router-view>
    </app-main>
  </app-wrapper>
</template>

<script>
import AppWrapper from '@/components/AppWrapper'
import AppHeader from '@/components/AppHeader'
import AppMain from '@/components/AppMain'

export default {
	components: {
		AppWrapper,
		AppHeader,
		AppMain
	}
}
</script>

<style>
@font-face {
	font-family: lunchtype23italic;
	src: url('/static/lunchtype23-regular-italic-webfont.woff2') format('woff2');
}

body {
	margin: 0;
}

* {
	font-family: lunchtype23italic;
}
</style>
