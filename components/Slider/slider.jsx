import style from "../../styles/Slider.module.css";
import imageSlider1 from "../../public/images/slider1.jpg";
import imageSlider2 from "../../public/images/slider2.jpg";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
const Slider = () => {
  useEffect(() => {
    const des = async () => {
      var counter = 1;
      setInterval(function () {
        switch (counter) {
          case 1:
            document.getElementById(style.radio1).checked = true;
            counter++;
            break;
          case 2:
            document.getElementById(style.radio2).checked = true;
            counter = 1;
            break;
          default:
            break;
        }
      }, 5000);
    };
    des();
  }, []);
  return (
    <>
      <div className={style.slider}>
        <div className={style.slides}>
          <input type="radio" name="radio-btn" id={style.radio1} />
          <input type="radio" name="radio-btn" id={style.radio2} />

          <div className={`${style.slide} ${style.first}`}>
            <Link href="#">
              <Image src={imageSlider1} alt="image slider 1" />
            </Link>
          </div>
          <div className={style.slide}>
            <Link href="#">
              <Image src={imageSlider2} alt="image slider 1" />
            </Link>
          </div>
        </div>

        <div className={style.navigation_manual}>
          <label
            id="manual1"
            htmlFor={style.radio1}
            className={style.manual_btn}
          ></label>
          <label
            id="manual2"
            htmlFor={style.radio2}
            className={style.manual_btn}
          ></label>
        </div>
      </div>
    </>
  );
};

export default Slider;
