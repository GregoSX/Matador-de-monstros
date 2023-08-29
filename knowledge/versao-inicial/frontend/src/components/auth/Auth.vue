<template>
    <div class="auth-content">
        <div class="auth-modal">
            <img src="@/assets/logo.png" width="200" alt="Logo">
            <hr>
            <div class="auth-title">
                {{ showSignup ? 'Cadastro' : 'Login' }}
            </div>

            <input v-if="showSignup" type="text" v-model="user.name" placeholder="Nome">
            <input type="email" name="email" v-model="user.email" placeholder="E-mail">
            <input type="password" name="password" v-model="user.password" placeholder="Senha">
            <input v-if="showSignup" type="password" v-model="user.confirmPassword" 
                placeholder="Confirme a senha">
            
            <button v-if="showSignup" @click="signUp">Registrar</button>
            <button v-else @click="signIn">Entrar</button>

            <a href @click.prevent="showSignup = !showSignup">
                <span v-if="showSignup"> Já tem cadastro ? Acesse o Login!</span>
                <span v-else>Não tem cadastro ? Registre-se aqui!</span>
            </a>
        </div>
    </div>
</template>

<script>
import { baseApiUrl, showError, userKey } from '../../global'
import axios from 'axios'

export default {
    name: 'Auth',
    data() {
        return {
            showSignup: false,
            user: {}
        }
    },
    methods: {
        signIn() {
            axios.post(`${baseApiUrl}/signin`, this.user)
                .then(res => {
                    this.$store.commit('setUser', res.data)
                    localStorage.setItem(userKey, JSON.stringify(res.data))
                    this.$router.push('/')
                })
                .catch(showError)
        },
        signUp() {
            axios.post(`${baseApiUrl}/signup`, this.user)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.user = {}
                    this.showSignup = false
                })
                .catch(showError)
        }
    }
}
</script>

<style>
    .auth-content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .auth-modal {
        background-color: white;
        padding: 30px;
        width: 350px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .auth-title {
        font-size: 1.2rem;
        font-weight: 100;
        margin-top: 10px;
        margin-bottom: 15px;
    }

    .auth-modal input {
        border: 1px solid #BBB;
        width: 100%;
        margin-bottom: 15px;
        padding: 3px 8px;
        outline: none;
    }

    .auth-modal button {
        align-self: flex-end;
        background-color: #2460ae;
        color: #fff;
        padding: 5px 15px;
        border: none;
        cursor: pointer;
    }

    .auth-modal a {
        margin-top: 25px;
    }

    .auth-modal hr {
        border: none;
        width: 100%;
        height: 1px;
        background: linear-gradient(to right, 
            rgba(120, 120, 120, 0),
            rgba(120, 120, 120, 0.75),
            rgba(120, 120, 120, 0)
        );
    }

</style>