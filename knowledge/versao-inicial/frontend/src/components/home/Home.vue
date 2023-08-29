<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard" sub="Base de Conhecimento"/>
        <div class="stats">
            <Stat title="Categorias" color="#d54d50" :value="stat.categories" icon="fa fa-folder" />
            <Stat title="Artigos" color="#3bc480" :value="stat.articles" icon="fa fa-file" />
            <Stat title="Usuários" color="#3282cd" :value="stat.users" icon="fa fa-user" />
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle.vue'
import Stat from './Stat.vue';
import axios from 'axios'
import { baseApiUrl} from '@/global'

export default {
    name: 'Home',
    components: { PageTitle, Stat },
    data() {
        return {
            stat: {}
        }
    },
    methods: {
        getStats() {
            axios.get(`${baseApiUrl}/stats`)
                .then(res => this.stat = res.data)
        }
    },
    mounted() {
        this.getStats()
    }
}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>