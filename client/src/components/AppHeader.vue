<<template>
  <container>
      <wrapper @click="handleClick">
        Scanner
      </wrapper>
  </container>
</template>

<script>
import { styled } from 'styletron-vue'

const Container = styled('header', {
	minHeight: '50px',
	width: '100%',
	borderBottom: '10px solid black',
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	paddingLeft: '34px'
})

const Wrapper = styled('span', {
	fontSize: '34px',
	fontWeight: 'bold',
	cursor: 'pointer'
})

export default {
	components: {
		Container,
		Wrapper
	},
	methods: {
		handleClick() {
			this.$router.push('/')
		}
	}
}
</script>
