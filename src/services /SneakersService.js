import axios from "axios";

export const SneakersService = {
	async getAllUsers() {
		const response = await axios({
			url: 'https://604781a0efa572c1.mokky.dev/items'
		})
		return response.data.splice(0, 12)
	}
}