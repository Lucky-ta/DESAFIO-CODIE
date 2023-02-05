import { formatData } from "utils/formatData/formatUserData";

import { DataShape } from "interfaces/interfaces";

import { schema } from "./yupSchemas";
import * as Yup from "yup";

export const yupFormValidation = async (formData: DataShape) => {
  const formatedData = formatData(formData);

  try {
    await schema.validate(formatedData, {
      abortEarly: false,
    });
  } catch (e: any) {
    if (e instanceof Yup.ValidationError) {
      const errorMessages = {};

      e.inner.forEach((error) => {
        errorMessages[error.path] = error.message;
      });

      return errorMessages;
    }
  }
};
