<script lang="ts">
import { useMovieStore } from '../../stores/MovieStore';

export default {
    setup() {
        const movieStore = useMovieStore()

        const clickHandler = (newPage: string) => {
            movieStore.changePage(newPage)
        }

        const prevPage = () => {
            return String(Number(movieStore.page) - 1)
        }
        const nextPage = () => {
            return String(Number(movieStore.page) + 1)
        }

        return {
            movieStore,
            clickHandler,
            prevPage,
            nextPage
        }
    }
}


</script>
<template>
    <div v-if="movieStore.pageCount >= 4">
        <button @click="() => clickHandler('1')" :disabled="1 === Number(movieStore.page)">first</button>
        <button @click="() => clickHandler(prevPage())" :disabled="1 === Number(movieStore.page)">Previous</button>
        <button @click="() => clickHandler(nextPage())"
            :disabled="movieStore.pageCount <= Number(movieStore.page) + 1">Next</button>
        <button @click="() => clickHandler(`${movieStore.pageCount}`)"
            :disabled="movieStore.pageCount === Number(movieStore.page)">last</button>
    </div>
</template>