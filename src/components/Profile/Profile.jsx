import s from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.box}>
        <img className={s.image} src={image} alt="User avatar" />
        <p className={s.bold}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={s.ul}>
        <li className={s.li}>
          <span>Followers</span>
          <span className={s.bold}>{followers}</span>
        </li>
        <li className={s.li}>
          <span>Views</span>
          <span className={s.bold}>{views}</span>
        </li>
        <li className={s.li}>
          <span>Likes</span>
          <span className={s.bold}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
