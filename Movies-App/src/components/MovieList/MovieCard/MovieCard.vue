<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
    props: ['movie'],
}

</script>

<template>
    <div class="movieCard__container">
        <img class="movieCard__image" :src="movie.Poster" />
        <div class="movieCard__infoContainer">
            <h2 class="movieCard__title">{{ movie.Title }}</h2>
            <div class="movieCard__bottomContainer">
                <span class="movieCard__infoText">year: {{ movie.Year }}</span>
                <RouterLink class="movieCard__link" :to="`/movie/${movie.imdbID}`">read more</RouterLink>
            </div>
        </div>
    </div>
</template>

<style>
.movieCard__container {
    display: flex;
    flex-direction: column;
    width: 152px;
    background-color: rgb(53, 53, 53);
    border-radius: 8px;
    border: 1px solid rgb(72, 72, 72);
    overflow: hidden;
}

.movieCard__image {
    width: 100%;
    min-height: 220px;
    object-fit: cover;
}

.movieCard__infoContainer {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding: 8px;
    gap: 10px;
}

.movieCard__title {
    font-size: 1rem;
    text-align: center;
    font-weight: bold;
}

.movieCard__infoText {
    font-size: 0.75rem;
    color: rgb(148, 148, 148);
    font-weight: bold;
    align-self: flex-start;
}

.movieCard__bottomContainer {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;
}

.movieCard__link {
    font-size: 0.75rem;
    color: rgb(112, 112, 242);
    text-decoration: underline;
    cursor: pointer;
}
</style>