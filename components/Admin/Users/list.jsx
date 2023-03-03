import moment from "moment";
import Link from "next/link";
import style from "../../../styles/Table.module.css";
const List = ({ userData }) => {
  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr className={style.tr}>
            <th className={style.th}>Username</th>
            <th className={style.th}>isAdmin</th>
            <th className={style.th}>Time</th>
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {userData.map((item) => {
            const isAdmin = item.isAdmin;
            return (
              <tr key={item._id} className={style.tr}>
                <td className={style.td} data="Username">
                  {item.username}
                </td>
                <td className={style.td} data="isAdmin">
                  {isAdmin ? "Admin" : "User"}
                </td>
                <td className={style.td} data="Time">
                  {moment(item.createdAt).format("DD-MM-YYYY")}
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
