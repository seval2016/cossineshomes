
export {ValidationError as YupValidationError} from "yup";

export const convertFormDataToJson = (formData) => {
  Object.fromEntries(formData.entries()); //gelen datayı json'a çevirdik
};

//Bu kod, bir işlemin sonucunu kolayca takip etmeyi sağlar ve kullanıcıya işlemin durumu hakkında
// geri bildirim vermek için kullanılır.

export const response = (ok, message, errors) => ({
  ok,
  message,
  errors,
});
export const initialResponse = response(false, "", {});

export const transformYupErrors = (errors) => { //error olması halinde okunur bir hata döndürmesi için
	const errObject = {};
	errors.forEach((error) => (errObject[error.path] = error.message));

	return response(false, "", errObject);
};

export const isStringArray = (str) => {
	if (!str) return false;
	const arr = JSON.parse(str);
	return Array.isArray(arr) && arr.length > 0;
};