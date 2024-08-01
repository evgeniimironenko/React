import css from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => (
  <article className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt={username} />
      <h3>{username}</h3>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>

    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </article>
);

export default Profile;
