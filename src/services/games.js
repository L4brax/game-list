import { wildgames } from "./api";
import axios from "axios";

export const getGames = async () => {
  let jsonResponse;
  await axios.get(wildgames).then(response => (jsonResponse = response.data));
  return jsonResponse.map(game => {
    return {
      id: game.id,
      name: game.name,
      genders: game.genres.map(genre => genre.name),
      released: game.released,
      rating: game.rating,
      screenshot: game.short_screenshot
    };
  });
};
