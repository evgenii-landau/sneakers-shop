import axios from "axios";

export const AllResponses = {
	async AllData() {
		const basketResponse = await axios({
			url: 'https://65b6e4e7da3a3c16ab013d9a.mockapi.io/cart'
		})
		const favoritesResponse = await axios({
			url: 'https://65b6e4e7da3a3c16ab013d9a.mockapi.io/favorites'
		})
		const sneakersResponse = await axios({
			url: 'https://604781a0efa572c1.mokky.dev/items'
		})

		return [basketResponse, favoritesResponse, sneakersResponse]
	}
}