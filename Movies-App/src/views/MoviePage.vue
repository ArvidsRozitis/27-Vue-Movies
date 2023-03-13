<script lang="ts">
import { useMovieStore } from '../stores/MovieStore';
import { RouterLink } from 'vue-router';

export default {
    data() {
        const movieStore = useMovieStore()

        return {
            movieStore,
            id: this.$route.params.id
        }
    },
    async mounted() {
        this.movieStore.getSingleMovie(String(this.id))
    }
}

</script>
<template>
    <div class="home__pageContainer">
        <RouterLink :to="`/`">back</RouterLink>
        <h2>{{ movieStore.singleMovie.Title }}</h2>
        <img :src="movieStore.singleMovie.Poster" alt="">
        <h3>{{ movieStore.singleMovie.Rated }}</h3>
        <span>{{ movieStore.singleMovie.Genre }}</span>
        <span>{{ movieStore.singleMovie.Year }}</span>
        <span>{{ movieStore.singleMovie.Director }}</span>
        <span>{{ movieStore.singleMovie.Actors }}</span>
        <span>{{ movieStore.singleMovie.Country }}</span>
        <span>{{ movieStore.singleMovie.Awards }}</span>
        <span>{{ movieStore.singleMovie.Language }}</span>
        <span>{{ movieStore.singleMovie.Plot }}</span>
    </div>
</template>