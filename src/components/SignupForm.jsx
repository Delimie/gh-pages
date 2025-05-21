import { useRef, useState } from "react"
import * as Yup from 'yup';
import { yupToFormError } from "../utils/yupToFormError";
import { SignupSchema } from "../schemas/SignupSchema";

export default function SignupForm() {
  const styles = {
    divInput: "flex gap-2",
    input: "border-1 rounded-lg",
    textError: "text-red-500 font-medium"
  }

  const [form, setForm] = useState({
    username: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    tel: "",
    age: "",
    terms: false,
  })

  const refs = {
    username: useRef(null),
    nickname: useRef(null),
    password: useRef(null),
    confirm: useRef(null),
    tel: useRef(null),
    terms: useRef(null),
  }
  const [errors, setErrors] = useState({

  })

  const handleChange = async (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })
  }

  const handleCheck = async (e) => {
    setForm({
      ...form, [e.target.name]: e.target.checked
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await SignupSchema.validate(form, { abortEarly: false })
      alert("สมัครสำเร็จ");
      setErrors({});
    } catch (err) {

      const errorObj = yupToFormError(err, refs);
      console.log(err);
      setErrors(errorObj);
    }
  }

  return (
    <>
      <p className="text-2xl font-bold pb-10">CC20 Sign up Form</p>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <div className={styles.divInput}>
          <label>Username</label>
          <input
            className={styles.input}
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            ref={refs.username}
          />
          <p className={styles.textError}>{errors.username}</p>
        </div>
        <div className={styles.divInput}>
          <label>Nickname</label>
          <input className={styles.input}
            type="text"
            name="nickname"
            value={form.nicknaame}
            onChange={handleChange}
            ref={refs.classname} />
          <p className={styles.textError}>{errors.nickname}</p>
        </div>
        <div className={styles.divInput}>
          <label>Password</label>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            ref={refs.password} />
          <p className={styles.textError}>{errors.password}</p>
        </div>
        <div className={styles.divInput}>
          <label>confirm password</label>
          <input
            className={styles.input}
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            ref={refs.confirmPassword} />
          <p className={styles.textError}>{errors.confirmPassword}</p>
        </div>
        <div className={styles.divInput}>
          <label>Age: </label>
          <input
            className={styles.input}
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            ref={refs.age} />
          <p className={styles.textError}>{errors.age}</p>
        </div>
        <div className={styles.divInput}>
          <label>Telephone </label>
          <input
            className={styles.input}
            type="number"
            name="tel"
            value={form.tel}
            onChange={handleChange}
            ref={refs.tel} />
          <p className={styles.textError}>{errors.tel}</p>
        </div>
        <div className={styles.divInput}>
          <label>Terms: </label>
          <input
            type="checkbox"
            name="terms"
            value={form.terms}
            onChange={handleCheck}
            ref={refs.terms} />
          <p className={styles.textError}>{errors.terms}</p>
        </div>
        <button type="submit">Signup</button>
      </form>
    </>
  )
}