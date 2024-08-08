"use server";

export const createContactAction = async (prevData, formData) => {

	const fields=Object.fromEntries(formData.entries()); //gelen datayı json'a çevirdik

	console.log(fields)
};
