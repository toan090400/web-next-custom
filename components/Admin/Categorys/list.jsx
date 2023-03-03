import Link from "next/link";
import style from "../../../styles/Table.module.css";
const List = ({ categoryData, deteteData }) => {
  const categorys = categoryData.categorys;
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
            <th className={style.th}>Update</th>
            <th className={style.th}>Delete</th>
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {categorys.map((item) => {
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
                <td className={style.td} data="Update">
                  <div className={style.icon}>
                    <Link
                      href={`/admin/categorys/${item._id}`}
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
