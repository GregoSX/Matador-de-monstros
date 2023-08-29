<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible || !user}">
		<Header title="Comp Júnior - Base de Conhecimento" 
			:hideToggle="!user" :hideUserDropdown="!user"/>
		<Menu v-if="user"/>
		<Loading v-if="validatingToking"/>
		<Content v-else/>
		<Footer />
	</div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl, userKey } from './global';
import { mapState } from 'vuex';

import Content from './components/template/Content.vue';
import Footer from './components/template/Footer.vue';
import Header from './components/template/Header.vue';
import Loading from './components/template/Loading.vue';
import Menu from './components/template/Menu.vue';


export default {
	name: "App",
	components: { Content, Footer, Header, Loading, Menu },
	computed: mapState(['isMenuVisible', 'user']),
	data() {
		return {
			validatingToking: false,
		}
	},
	methods: {
		async validateToken() {
			this.validateToken = true

			const json = localStorage.getItem(userKey)
			const userData = JSON.parse(json)

			this.$store.commit('setUser', null)

			if(!userData) {
				this.validateToken = false
				this.$router.push({ name: 'auth' })
				return
			}

			const res = await axios.post(`${baseApiUrl}/validateToken`, userData)

			if(res.data) {
				this.$store.commit('setUser', userData)
			} else {
				localStorage.removeItem(userKey)
				this.$router.push('/auth')
			}
			
			this.validateToken = false
		}
	},
	mounted() {
		this.validateToken()
	}
}
</script>

<style>
	* {
		font-family: 'Lato', sans-serif;
	}

	body {
		margin: 0;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr 40px;
		grid-template-columns: 250px 1fr;
		grid-template-areas: 
			"header header"
			"menu content"
			"menu footer"
		;
	}

	#app.hide-menu {
		grid-template-areas: 
			"header header"
			"content content"
			"footer footer"
		;
	}
</style>