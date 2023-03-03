import style from "../../styles/Pagination.module.css";
import Link from "next/link";
const Pagination = ({ Page_Total, Page, PageLink, PageLinkIndex }) => {
  // let pagination = [];
  // for (let i = 1; i <= Page_Total; i++) {
  //   pagination.push(i);
  // }
  return (
    <div className={style.container}>
      <ul className={style.pagination}>
        {Page > 1 ? (
          <>
            <li className={`${style.button} ${style.button_l}`}>
              <Link className={style.page_link} href={PageLinkIndex}>
                <i className="fa-solid fa-angles-left"></i>
              </Link>
            </li>
            <li className={`${style.button} ${style.button_l}`}>
              <Link
                className={style.page_link}
                href={`${PageLink}/${Page - 1}`}
              >
                <i className="fa-solid fa-angle-left"></i>
              </Link>
            </li>
            <li className={`${style.button}`}>
              <Link
                className={style.page_link}
                href={`${PageLink}/${Page - 1}`}
              >
                {Page - 1}
              </Link>
            </li>
          </>
        ) : null}

        <li className={`${style.button} ${style.page_link__current}`}>
          <Link className={style.page_link} href={`${PageLink}/${Page}`}>
            {Page}
          </Link>
        </li>

        {Page < Page_Total ? (
          <>
            <li className={`${style.button}`}>
              <Link
                className={style.page_link}
                href={`${PageLink}/${Page + 1}`}
              >
                {Page + 1}
              </Link>
            </li>
            <li className={`${style.button} ${style.button_l}`}>
              <Link
                className={style.page_link}
                href={`${PageLink}/${Page + 1}`}
              >
                <i className="fa-solid fa-angle-right"></i>
              </Link>
            </li>
            <li className={`${style.button} ${style.button_r}`}>
              <Link
                className={style.page_link}
                href={`${PageLink}/${Page_Total}`}
              >
                <i className="fa-solid fa-angles-right"></i>
              </Link>
            </li>
          </>
        ) : null}
      </ul>
    </div>
  );
};

export default Pagination;
