"use server";
import {
  response,
  transformYupErrors,
  YupValidationError,
  convertFormDataToJson,
} from "@/helpers/form-validation";

import { ContactSchema } from "@/helpers/schemas/contact-schema";
//import { revalidatePath } from "next/cache";

//1.aşama : gelen datayı json'a çevirme
export const createContactAction = async (prevData, formData) => {
  try {
    const fields = convertFormDataToJson(formData);

    //2.aşama : Gelen datanın formatını kontrol etme. Bunun için Yup kullanılır.
    ContactSchema.validateSync(fields, { abortEarly: false });

    const res = await createMessage(fields);
    const data = await res.json();

    if (!res.ok) {
      return response(false, "", {});
    }

    // revalidatePath("/dashboard/admin");
    return response(true, "Your message was sent", {});
  } catch (err) {
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner);
    }

    throw err;
  }
};
