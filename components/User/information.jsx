import style from "../../styles/FormUser.module.css";
import imageUser from "../../public/images/user-avatar.png";
import Link from "next/link";
import Image from "next/image";
const Information = () => {
  return (
    <div className={style.update_profile}>
      <form className={style.form}>
        <Image className={style.image} src={imageUser} alt="user avatar" />
        <div className={style.error_message}>Error username</div>
        <div className={style.success_message}>Succcess username</div>
        <div className={style.flex}>
          <div className={style.inputBox}>
            <p className={style.text}>
              Username: <span className={style.err_message}>error name</span>
            </p>
            <input
              type="text"
              className={style.box}
              defaultValue={`jkhgkjhgh`}
            />
            <p className={style.text}>
              Update your avatar:{" "}
              <span className={style.err_message}>error name</span>
            </p>
            <input
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              className={style.box}
            />
          </div>
          <div className={style.inputBox}>
            <input type="hidden" />
            <p className={style.text}>
              Old Password:{" "}
              <span className={style.err_message}>Không thể để trống!</span>
            </p>
            <input
              type="password"
              placeholder="enter previous password"
              className={style.box}
            />
            <p className={style.text}>
              New Password:{" "}
              <span className={style.err_message}>Tối thiểu 2 ký tự!</span>
            </p>
            <input
              type="password"
              placeholder="enter new password"
              className={style.box}
            />
            <p className={style.text}>
              Confirm Password:{" "}
              <span className={style.err_message}>Password không khớp!</span>
            </p>
            <input
              type="password"
              placeholder="confirm new password"
              className={style.box}
            />
          </div>
        </div>
        <button className={style.btn}>Update</button>
        <Link href="/" className={`${style.delete_btn} ${style.link}`}>
          Go to home
        </Link>
      </form>
    </div>
  );
};

export default Information;
