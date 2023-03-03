import Link from "next/link";
import style from "../../../styles/Table.module.css";
const List = ({ bookData, deteteData }) => {
  const books = bookData.books;
  const deleteHandelr = async (item) => {
    await deteteData(item);
  };
  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr className={style.tr}>
            <th className={style.th}>Name</th>
            <th className={style.th}>Description</th>
            <th className={style.th}>User</th>
            <th className={style.th}>Category</th>
            <th className={style.th}>Image</th>
            <th className={style.th}>Update</th>
            <th className={style.th}>Delete</th>
            <th className={style.th}>Image</th>
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {books.map((item) => {
            return (
              <tr key={item._id} className={style.tr}>
                <td className={style.td} data="Name">
                  {item.name}
                </td>
                <td className={style.td} data="Description">
                  {item.description}
                </td>
                <td className={style.td} data="User">
                  {item.userId.username}
                </td>
                <td className={style.td} data="Category">
                  {item.categoryId.map((item) => {
                    return <p key={item._id}>{item.name}</p>;
                  })}
                </td>
                <td className={style.td} data="Image">
                  {item.imageGogle ? (
                    <img
                      className={style.image}
                      src={`${item.imageLink}/${item.imageGogle.id}`}
                      alt={item.name}
                      loading="lazy"
                    />
                  ) : (
                    <p>null</p>
                  )}
                </td>
                <td className={style.td} data="Update">
                  <div className={style.icon}>
                    <Link
                      href={`/admin/books/${item._id}`}
                      className={style.link}
                    >
                      <i className="fa-solid fa-wrench"></i>
                    </Link>
                  </div>
                </td>
                <td className={style.td} data="Delete">
                  <div className={style.icon}>
                    <button
                      onClick={() => deleteHandelr(item)}
                      className={style.btn}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
                <td className={style.td} data="Image">
                  <div className={style.icon}>
                    <Link
                      href={`/admin/books/image/${item._id}`}
                      className={style.link}
                    >
                      <i className="fa-solid fa-image"></i>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
