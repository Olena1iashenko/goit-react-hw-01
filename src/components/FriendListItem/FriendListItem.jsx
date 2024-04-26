import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.friend}>
      <img className={s.avatar} src={avatar} alt={name} />
      <p className={s.name}>{name}</p>
      <p className={isOnline ? s.online : s.offline}>
        {isOnline ? "online" : "offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
