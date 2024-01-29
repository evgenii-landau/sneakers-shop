import axios from "axios";

export const BasketServices = {
	async getAllBasket() {
		const response = await axios('https://65b6e4e7da3a3c16ab013d9a.mockapi.io/cart')
		return response.data
	}
}