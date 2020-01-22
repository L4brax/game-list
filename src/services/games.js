import { wildgames } from "./api";
import axios from "axios";

/**
 * Async method returning all games in json format.
 */
export const getGames = async () => {
  let jsonResponse;
  await axios
    .get(wildgames)
    .then(response => (jsonResponse = response.data))
    .catch(console.log("Exception on http request."));
  return jsonResponse.map(game => {
    return {
      id: game.id,
      name: game.name,
      genders: game.genres.map(genre => genre.name),
      released: game.released,
      rating: game.rating,
      screenshot: game.short_screenshots[0].image
    };
  });
};
