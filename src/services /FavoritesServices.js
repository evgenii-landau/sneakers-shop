import axios from "axios";

export const FavoritesServices = {
	async getAllFavorites() {
		const response = await axios({
			url: 'https://65b6e4e7da3a3c16ab013d9a.mockapi.io/favorites'
		})
		return response.data
	}
}