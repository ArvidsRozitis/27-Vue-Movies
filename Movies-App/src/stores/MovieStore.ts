import { defineStore } from "pinia";
const API_KEY = "5d64aa19";

interface MovieSearchResponse {
  Search: SearchMovie[];
  totalResults: string;
}

interface SearchMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
}

export const useMovieStore = defineStore("moviesStore", {
  state: () => ({
    movies: [] as SearchMovie[],
    singleMovie: {} as Movie,
    loading: false,
    searchByTitle: "",
    page: "1",
    pageCount: 0,
    moviesFound: 0,
  }),
  actions: {
    async searchMovies() {
      if (this.searchByTitle.length > 3) {
        this.loading = true;
        const res = await fetch(
          `http://www.omdbapi.com/?s=${this.searchByTitle}&page=${this.page}&type=movie&apikey=${API_KEY}`
        );
        const data: MovieSearchResponse = await res.json();

        this.movies = data.Search;
        this.pageCount = Math.ceil(Number(data.totalResults) / 10);
        this.moviesFound = Number(data.totalResults);
        this.loading = false;

        console.log(data);
        console.log(this.pageCount);
      }
      if (this.searchByTitle.length < 4) {
        this.movies = [];
        this.pageCount = 0;
        this.loading = false;
        this.page = "1";
        this.moviesFound = 0;
      }
    },
    changePage(page: string) {
      this.page = page;
      this.searchMovies();
    },
    async getSingleMovie(movieId: string) {

      this.loading = true;

      const res = await fetch(
        `http://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`
      );

      const data: Movie = await res.json();
      this.singleMovie = data;
      
      this.loading = false;
      console.log(data);
    },
  },
});
