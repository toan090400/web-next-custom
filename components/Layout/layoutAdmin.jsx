import style from "../../styles/LayoutAdmin.module.css";
import Link from "next/link";
const LayoutAdmin = ({ userData }) => {
  return (
    <div className={style.wrapper}>
      <nav>
        <input type="checkbox" id={style.show_search} />
        <input type="checkbox" id={style.show_menu} />
        <label htmlFor={style.show_menu} className={style.menu_icon}>
          <i className="fas fa-bars"></i>
        </label>
        <div className={style.content}>
          <div className={style.logo}>
            <Link href="#" className={style.link}>
              {userData ? userData.username : "CodingNepal"}
            </Link>
          </div>
          <ul className={style.links}>
            <li>
              <Link href="/" className={style.link}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className={style.desktop_link}>
                Books
              </Link>
              <input type="checkbox" id={style.show_features} />
              <label htmlFor={style.show_features}>
                Books <i className="fa-solid fa-arrow-down"></i>
              </label>
              <ul>
                <li>
                  <Link href="/admin/books" className={style.link}>
                    List
                  </Link>
                </li>
                <li>
                  <Link href="/admin/books/create" className={style.link}>
                    Create
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#" className={style.desktop_link}>
                Category
              </Link>
              <input type="checkbox" id={style.show_services} />
              <label htmlFor={style.show_services}>
                Category <i className="fa-solid fa-arrow-down"></i>
              </label>
              <ul>
                <li>
                  <Link href="/admin/categorys" className={style.link}>
                    List
                  </Link>
                </li>
                <li>
                  <Link href="/admin/categorys/create" className={style.link}>
                    Create
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#" className={style.desktop_link}>
                User
              </Link>
              <input type="checkbox" id={style.show_users} />
              <label htmlFor={style.show_users}>
                User <i className="fa-solid fa-arrow-down"></i>
              </label>
              <ul>
                <li>
                  <Link href="/admin/users" className={style.link}>
                    List
                  </Link>
                </li>
                <li>
                  <Link href="/admin/users/create" className={style.link}>
                    Create
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* <label htmlFor={style.show_search} className={style.search_icon}>
          <i className="fas fa-search"></i>
        </label>
        <form action="#" className={style.search_box}>
          <input
            type="text"
            placeholder="Type Something to Search..."
            required
          />
          <button type="submit" className={style.go_icon}>
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </form> */}
      </nav>
    </div>
  );
};

export default LayoutAdmin;
