<script lang="ts">
import MovieList from '../components/MovieList/MovieList.vue';
import { useMovieStore } from '../stores/MovieStore';
import Paginator from '../components/Paginator/Paginator.vue';
import Search from '../components/Search/Search.vue';
export default {
    components: { MovieList, Paginator, Search },
    setup() {
        const movieStore = useMovieStore()

        movieStore.searchMovies()

        const updateSearch = (searchText: string) => {
            movieStore.searchByTitle = searchText
            movieStore.searchMovies()
        }

        return { movieStore, updateSearch }
    }
}
</script>

<template>
    <div class="home__pageContainer">
        <h1>Movies Page</h1>
        <div class="home__searchContainer">
            <Search @search="updateSearch" :moviesFound="movieStore.moviesFound" />
            <Paginator />
        </div>
        <MovieList :movies="movieStore.movies" :loading="movieStore.loading" />
    </div>
</template>

<style>
.home__pageContainer {
    display: flex;
    min-width: 800px;
    min-height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px
}
.home__searchContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: center;
}
</style>