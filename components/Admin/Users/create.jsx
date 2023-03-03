import style from "../../../styles/Register.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
const Create = ({ registerData, statusMessage, messageData }) => {
  // message
  const status = messageData.success;
  const message = messageData.message;
  const data = status ? (
    <p className={style.success_msg}>{message}</p>
  ) : (
    <p className={style.error_msg}>{message}</p>
  );
  // set up form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const password = watch("password");

  // register
  const onSubmitRegister = async (data) => {
    const isAdmin = data.isAdmin;
    var newData = true;
    if (isAdmin === "User") {
      const isAdminBoolean = false;
      newData = { ...data, isAdmin: isAdminBoolean };
    } else {
      const isAdminBoolean = true;
      newData = { ...data, isAdmin: isAdminBoolean };
    }
    console.log(newData);
    registerData(newData);
    reset();
  };
  return (
    <div className={style.form_container}>
      <form
        onSubmit={handleSubmit(onSubmitRegister)}
        className={style.form_login2}
      >
        <h3>Register New User</h3>
        {statusMessage && data}

        <input
          type="text"
          placeholder="Username"
          {...register("username", {
            required: {
              value: true,
              message: "Username không được trống",
            },
            minLength: {
              value: 3,
              message: "Username tối thiểu có 3 ký tự",
            },
          })}
        />
        {errors.username && (
          <p className={style.error}>{errors.username.message}</p>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: {
              value: true,
              message: "Password không được trống",
            },
            minLength: {
              value: 3,
              message: "Password tối thiểu có 3 ký tự",
            },
          })}
        />
        {errors.password && (
          <p className={style.error}>{errors.password.message}</p>
        )}
        <input
          type="password"
          placeholder="Confirm password"
          {...register("passwordConfirm", {
            validate: (value) => value === password || "Password không khớp",
          })}
        />
        {errors.passwordConfirm && (
          <p className={style.error}>{errors.passwordConfirm.message}</p>
        )}
        <select
          name="user_type"
          {...register("isAdmin", {
            required: {
              value: true,
              message: "isAdmin không được trống",
            },
          })}
        >
          <option>User</option>
          <option>Admin</option>
        </select>
        {errors.isAdmin && (
          <p className={style.error}>{errors.isAdmin.message}</p>
        )}

        <button className={style.form_btn}>Add</button>
        <p className={style.text}>
          Already have an account?{" "}
          <Link href="/" className={style.link}>
            Home
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Create;
