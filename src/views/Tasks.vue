<template>
  <div class="form-group" v-if="loading">
    <button class="btn btn-primary btn-block">loading...</button>
  </div>
  <div class="list-group" v-else>
    <input
      type="text"
      class="form-control"
      v-model="description"
      placeholder="Task"
    />
    <button type="button" class="btn btn-primary btn-block" @click="addTasks">
      Add
    </button>
    <ul>
      <li
        class="list-group-item list-group-item-action"
        v-for="task in tasks"
        v-bind:key="task._id"
        @click="deleteTask(task._id)"
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
      description: "",
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
      //   console.log(localStorage.token)
      try {
        await axios.post("tasks", {
          header: {
            Authorization: `Bearer ${localStorage.token}`,
          },
          description: this.description,
          user: this.user._id,
        });

       this.loadTasks();
      } catch (e) {
        console.log("error");
      }
    },
    async deleteTask(id) {
      try {
        await axios.delete(`tasks/${id}`, {
          header: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        });
         this.loadTasks();
      } catch (e) {
          console.log("error");
      }
    },
  },
};
</script>

<style>
li {
  font-size: 17px;
}
button {
  padding: 15px;
}
</style>
