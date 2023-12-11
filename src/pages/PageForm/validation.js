import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/[а-яА-ЯёЁa-zA-Z]$/, "Не може мати числові значення")
    .min(2, "Занадто коротке імʼя")
    .max(16, "Занадто довге імʼя")
    .required("Обовʼязкове поле"),
  lastName: Yup.string()
    .matches(/[а-яА-ЯёЁa-zA-Z]$/, "Не може мати числові значення")
    .min(2, "Занадто коротке прізвище")
    .max(16, "Занадто довге прізвище")
    .required("Обовʼязкове поле"),
  age: Yup.string()
    // .positive()
    // .integer("Число має бути цілим")
    .min(2, "Запитай дозволу у батьків")
    .matches(/[0-9]$/, "Має містити цифрове значення")
    .required("Обовʼязкове поле"),
  addressToDelivery: Yup.string()
    .matches(/[а-яА-ЯёЁa-zA-Z]$/, "Не може мати числові значення")
    .min(4, "Занадто коротка назва")
    .required("Обовʼязкове поле"),
  phone: Yup.string()
    .matches(/[0-9]$/, "Цифрове значення")
    .min(9, "Закороткий номер")
    .required("Обовʼязкове поле"),
});
