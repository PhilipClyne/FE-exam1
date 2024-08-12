// src/services/GlobalApi.jsx
import axios from "axios";

const key = "f013b89a651d4a6d9f7775d73ff06f30";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api/",
});

// Các phương thức API khác
const getGenreList = axiosCreate.get(`/genres?key=${key}`);
const getAllGames = axiosCreate.get(`/games?key=${key}`);
const getGameListByGenreId = (id) =>
  axiosCreate.get(`/games?key=${key}&genres=${id}`);
const getGameDetail = (id) => axiosCreate.get(`/games/${id}?key=${key}`);

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
  getGameDetail,
};
