<template>
  <div class="form-group" v-if="loading">
    <button class="btn btn-primary btn-block">loading...</button>
  </div>
  <div class="list-group" v-else>
    <div id="inputANDbutton" class="d-flex flex-row">
    <input
      type="text"
      class="form-control p-2"
      v-model="description"
      placeholder="Task"
    />
    <button type="button" class="btn btn-primary btn-block p-2" @click="addTasks" >
      Add
    </button>
   </div>
    <ul v-for="task in tasks"
        v-bind:key="task._id"
        @click="deleteTask(task._id)" 
        class="d-flex flex-column">
      <li
        class="list-group-item list-group-item-action "
      >
        {{ task.description }}

      </li>
    </ul>
     
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "Tasks",
  computed: {
    ...mapGetters(["user"]),
  },
  data() {
    return {
      loading: false,
      tasks: [],
      description: '',
    };
  },
  created() {
    this.loadTasks();
  },
  methods: {
    loadTasks() {
      this.loading = true;
      axios
        .get("tasks?sortBy=createdAt_asc")
        .then((response) => {
          (this.loading = false), (this.tasks = response.data);
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },
    async addTasks() {
        console.log(localStorage)
      try {
        await axios.post("tasks", {
          header: {
            Authorization: `Bearer ${localStorage.token}`,
          },
          description: this.description,
          user: this.user._id,
        })
        this.loadTasks();
      } catch (e) {
        console.log(e);
      }
    },
    async deleteTask(id) {
      try {
        await axios.delete(`tasks/${id}`, {
          header: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        this.loadTasks();     
      } catch (e) {
          console.log(e);
      }
    },
  },
};
</script>

<style>
li {
  font-size: 17px;
}
#inputANDbutton{
  margin: 10px 0;
}
ul{
  margin: 0;
  padding: 0;
}
</style>
