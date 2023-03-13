<script lang="ts">
import MovieCard from './MovieCard/MovieCard.vue'

export default {
    components: { MovieCard },
    props: ['movies', 'loading'],
}

</script>

<template>
    <div class="movieList__container">
        <div class="movieList__loading" v-if="loading">Loading...</div>
        <div class="movieList__itemContainer" v-for="movie in movies" :key="movie.imdbID">
            <MovieCard :movie="movie" />
        </div>

    </div>
</template>
<style>
.movieList__container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
    max-width: 800px;
    width: 100%;
}

.movieList__itemContainer {
    display: flex;
}

.movieList__Loading {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 700;
    height: 100%;
}
</style>