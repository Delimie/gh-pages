import { useState } from "react"
import * as Yup from 'yup';
import { loginSchema } from "../schemas/LoginSchema";
import { yupToFormError } from "../utils/yupToFormError";


export default function LoginForm() {

  const styles = {
    divInput: "flex gap-2",
    input: "border-1 rounded-lg",
    textError: "text-red-500 font-medium"
  }

  const [form, setForm] = useState({
    email: "",
    password: "",
    day:"",
    age:""
  })
  const [errors, setErrors] = useState({

  })

  const handleChange = async (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginSchema.validate(form, { abortEarly: false })
      alert("ส่งสำเร็จ");
      setErrors({});
    } catch (err) {

      const errorObj = yupToFormError(err);
      console.log(err);
      setErrors(errorObj);
    }
  }

  return (
    <>
      <p className="text-2xl font-bold pb-10">CC20 Sign up Form</p>
      <form className="space-y-2 w-[200px]" onSubmit={handleSubmit}>
        <div className={styles.divInput}>
          <label>Email</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <p className={styles.textError}>{errors.email}</p>
        </div>
        <div className={styles.divInput}>
          <label>Password</label>
          <input className={styles.input}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange} />
          <p className={styles.textError}>{errors.password}</p>
        </div>
        <div className={styles.divInput}>
          <label>Day:</label>
          <input
            className={styles.input}
            type="number"
            name="day"
            value={form.day}
            onChange={handleChange} />
          <p className={styles.textError}>{errors.day}</p>
        </div>
        <div className={styles.divInput}>
          <label>Age:</label>
          <input
            className={styles.input}
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange} />
          <p className={styles.textError}>{errors.age}</p>
        </div>
        <button type="submit">Register</button>
        <button type="submit">Sign Up</button>
      </form>
    </>
  )
}