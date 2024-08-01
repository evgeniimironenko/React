import css from "./Users.module.css";

const Users = ({ usersData }) => (
  <ul className={css.usersList}>
    {usersData.map((item) => (
      <li className={css.item} key={item.id}>
        <span className={item.isOnline ? css.online : css.offline}></span>
        <img className={css.ava} src={item.avatar} alt={item.name} width="48" />
        <p className={css.Name}>{item.name}</p>
      </li>
    ))}
  </ul>
);

export default Users;
