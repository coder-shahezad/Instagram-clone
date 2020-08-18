import * as yup from "yup";
import { setIn } from "final-form";

export const signupSchema = yup.object({
  name: yup.string().required().min(3),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  userName: yup.string().required().min(6),
  // address: yup.string().required().min(3),
  // state: yup.string().required().min(2),
  // city: yup.string().required().min(2),
  // phoneNumber: yup.string().required().min(10),
});

export const loginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

export const validate = (schema) => async (values) => {
  if (typeof schema === "function") schema = schema();

  try {
    await schema.validate(values, { abortEarly: false });
  } catch (e) {
    return e.inner.reduce((errors, error) => {
      return setIn(errors, error.path, error.message);
    }, {});
  }
};
