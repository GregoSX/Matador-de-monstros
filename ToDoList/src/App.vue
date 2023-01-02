<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TaskProgress :progress="progress"/>
		<NewTask @taskAdded="addTask"/>
		<TaskGrid 
			:tasks="tasks" 
			@taskDeleted="deleteTask"
			@taskStateChanged="toggleTaskState"
		/>
	</div>
</template>

<script>
import TaskProgress from './components/TaskProgress.vue';
import NewTask from './components/NewTask.vue';
import TaskGrid from './components/TaskGrid.vue';

export default {
	data() {
		return {
			tasks: []
		}
	},
	watch: {
		tasks: {
			deep: true,
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	computed: {
		progress() {
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return Math.round((done / total) * 100) || 0
		}
	},
	components: {
		TaskProgress,
		NewTask,
		TaskGrid
	},
	methods: {
		addTask(task) {
			const sameName = t => t.name.toUpperCase() === task.name.toUpperCase()
			const reallyNew = this.tasks.filter(sameName).length == 0 
			if(reallyNew) {
				this.tasks.push(task)
			}
		},
		deleteTask(index) {
			this.tasks.splice(index, 1)
		},
		toggleTaskState(index) {
			this.tasks[index].pending = !this.tasks[index].pending
		}
	},
	created() {
		const json = localStorage.getItem('tasks')
		this.tasks = JSON.parse(json) || []

	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}

</style>
