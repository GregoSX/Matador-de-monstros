<template>
    <div class="task-grid">
        <p v-if="!tasks.length" class="no-task">
            Sua vida está em dia :)
        </p>
        <template v-else>
            <Task v-for="(task, index) in tasks" :key="task.name" 
                :task="task" 
                @taskDeleted="$emit('taskDeleted', index)" 
                @taskStateChanged="$emit('taskStateChanged', index)"
            />
        </template>
    </div>
</template>

<script>
import Task from './Task.vue';

export default {
    props: {
        tasks: {
            type: Array,
            required: true
        }
    },
    components: {
        Task,
    }
}
</script>

<style scoped>
    .task-grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .task {
        margin: 10px;
    }

    .no-task {
        color: #AAA;
        font-size: 1.7rem;
    }
</style>