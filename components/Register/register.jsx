import style from "../../styles/Login.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
const Login = ({ registerData }) => {
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
    await registerData(data);
    await reset();
  };
  return (
    <div className={`${style.container} ${style.sign_up_mod}`}>
      <div className={style.forms_container}>
        <div className={style.signin_signup}>
          <form
            onSubmit={handleSubmit(onSubmitRegister)}
            className={style.sign_up_form}
          >
            <h2 className={style.title}>Đăng ký</h2>
            <div className={style.input_field}>
              <i className="fas fa-user"></i>
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
            </div>
            {errors.username && (
              <p className={style.error_mesage}>{errors.username.message}</p>
            )}
            <div className={style.input_field}>
              <i className="fas fa-lock"></i>
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
            </div>
            {errors.password && (
              <p className={style.error_mesage}>{errors.password.message}</p>
            )}
            <div className={style.input_field}>
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password Confirm"
                {...register("passwordConfirm", {
                  validate: (value) =>
                    value === password || "Password không khớp",
                })}
              />
            </div>
            {errors.passwordConfirm && (
              <p className={style.error_mesage}>
                {errors.passwordConfirm.message}
              </p>
            )}
            <input type="submit" className={style.btn} value="Đăng ký" />
          </form>
        </div>
      </div>
      <div className={style.panels_container}>
        <div className={`${style.panel} ${style.left_panel}`}></div>
        <div className={`${style.panel} ${style.right_panel}`}>
          <div className={style.content}>
            <h3>Bạn đã có tài khoản ?</h3>

            <button
              className={`${style.btn} ${style.transparent}`}
              id="sign-in-btn"
            >
              <Link href="/login" className={style.link}>
                Đăng nhập !
              </Link>
            </button>
          </div>
          <img src="images/register.svg" className={style.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
