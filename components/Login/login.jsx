import style from "../../styles/Login.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
const Login = ({ loginData }) => {
  //
  // set up form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // login
  const onSubmitLogin = async (data) => {
    await loginData(data);
  };
  return (
    <div className={style.container}>
      <div className={style.forms_container}>
        <div className={style.signin_signup}>
          <form
            onSubmit={handleSubmit(onSubmitLogin)}
            className={style.sign_in_form}
          >
            <h2 className={style.title}>Đăng nhập</h2>
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
                })}
              />
            </div>
            {errors.password && (
              <p className={style.error_mesage}>{errors.password.message}</p>
            )}
            <input
              type="submit"
              value="Đăng nhập"
              className={`${style.btn} ${style.solid}`}
            />
            <p className={style.social_text}>Hoặc đăng nhập bằng:</p>
            <div className={style.social_media}>
              <Link href="/" className={style.social_icon}>
                <i className="fa-solid fa-house-chimney"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className={style.panels_container}>
        <div className={`${style.panel} ${style.left_panel}`}>
          <div className={style.content}>
            <h3>Bạn chưa có tài khoản ?</h3>

            <button
              className={`${style.btn} ${style.transparent}`}
              id="sign-up-btn"
            >
              <Link href="/register" className={style.link}>
                Đăng ký ngay !
              </Link>
              {/* Đăng ký ngay ! */}
            </button>
          </div>
          <img src="images/login.svg" className={style.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
