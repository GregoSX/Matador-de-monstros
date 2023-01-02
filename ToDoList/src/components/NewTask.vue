<template>
    <div class="new-task">
        <form>
            <input type="text" v-model="name" @keydown.enter="add" class="form-element" placeholder="Nova tarefa?">
            <button @click="add" class="form-element">+</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        add(event) {
            event.preventDefault()
            this.$emit('taskAdded', { name: this.name, pending: true})
            this.name = ''
        }
    }
}
</script>

<style scoped>
    .new-task {
        margin: 35px;
    }

    .form-element {
        outline: none;
        font-size: 2rem;
        border: 1px solid #FFF;
        padding: 5px 10px 8px;
        color: #FFF;
    }

    input.form-element {
        width: 500px;
        background-color: #FFF2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button.form-element {
        border-left: none;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        background: #2196F3;
    }
</style>