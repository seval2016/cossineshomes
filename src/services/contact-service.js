import { CONTACT_CREATE_API} from "@/helpers/api-routes";

export const createMessage = (payload) => {
	return fetch(CONTACT_CREATE_API, {
		method: "post",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};
