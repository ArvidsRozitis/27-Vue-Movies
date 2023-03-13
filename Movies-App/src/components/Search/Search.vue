<script lang="ts">
export default {
    props: ['moviesFound'],
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    handleInput() {
      this.$emit('search', this.searchText)
    }
  }
}
</script>


<template>
    <div class="searchContainer">
        <label class="searchBox">
            <span class="searchTopText">search by Title</span>
            <div class="inputContainer">
                <input type="text" placeholder="search" class="searchInput" v-model="searchText" @input="handleInput" />
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </div>
        </label>
        <span v-if="moviesFound > 0">Search matches: {{ moviesFound }}</span>
    </div>
</template>

<style scoped>
.searchContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.searchBox {
    display: flex;
    flex-direction: column;
}

.searchTopText {
    padding-left: 25px;
}

.inputContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
}

.searchInput {
    all: unset;
    width: 100px;
    border: solid 1px grey;
    border-radius: 20px;
    padding: 4px 15px 2px 10px;
    padding-bottom: 5px;
    font-size: 1.25rem;
    color: rgb(141, 141, 141);
    transition: width 0.2s ease-in-out, box-shadow 0.3s;
}

.searchInput:hover {
    box-shadow: 1px 1px 1px 1px;
}

.searchInput:focus {
    width: 280px;
}

.searchInput::placeholder {
    color: rgb(201, 201, 200);
}
</style>