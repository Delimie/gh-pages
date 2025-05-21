import * as Yup from 'yup';

export const SignupSchema = Yup.object({
  username: Yup.string()
    // .min(3, "ต้องมีตัวอักษรอย่างน้อย 3 ตัว")
    .matches(/^[a-zA-Z  ]{5,12}$/,"กรุณากรอกภาษาอังกฤษ 5-12 ตัว")
    .required("กรุณากรอก username"),
  nickname: Yup.string()
    .min(3, ({ path, value }) => `${path} ต้องมีอย่างน้อย 3-10 ตัว ตอนนี้มีแค่ ${value.length}`)
    .max(10, ({ path, value }) => `${path} ต้องมีไม่เกิน 10 ตัวอักษร ตอนนี้มี ${value.length}`)
    .required("กรุณากรอก nickname"),
  password: Yup.string()
    .min(6, ({ path, value }) => `${path} ต้องมีอย่างน้อย 6 ตัว ตอนนี้มีแค่ ${value.length}`)
    .required("กรุณากรอกรหัสผ่าน"),
  confirmPassword: Yup.string()
    .min(6, ({ path, value }) => `${path} ต้องมีอย่างน้อย 6 ตัว ตอนนี้มีแค่ ${value.length}`)
    .required("กรุณากรอกรหัสผ่าน"),
  age: Yup.number()
    .typeError("กรุณากรอกเป็นตัวเลข")
    .min(13, ({ path, value }) => `${path} ต้องมีอายุมากกว่า 13 ปี ตอนนี้คือ ${value} `),
  terms: Yup.boolean()
    .oneOf([true], "กรุณายอมรับเงื่อนไขก่อนสมัคร"),
  tel: Yup.string()
    .matches(/^\d{10}$/,"เบอร์โทรต้องมี 10 ตัวเลข")

})