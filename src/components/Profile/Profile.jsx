import PropTypes from "prop-types";
import css from "./Profile.module.css";

export default function Profile({
    name,
    tag,
    location,
    avatar,
    stats }) {
    
    return (
        <div className={css.box}>
            <img className={css.avatarImg} src={avatar} alt={name} />
            <h2 className={css.name}>{name}</h2>
            <p className={css.tag}>&#64; {tag}</p>
            <p className={css.location}> {location}</p>
            <ul className={css.profileList}>
                <li className={css.profileItem}>
                    <p className={css.profileInfo}>followers</p>
                    <p className={css.profileStat}>{stats.followers}</p>
                </li>
                 <li className={css.profileItem}>
                    <p className={css.profileInfo}>views</p>
                    <p className={css.profileStat}>{stats.views}</p>
                </li>
                 <li className={css.profileItem}>
                    <p className={css.profileInfo}>likes</p>
                    <p className={css.profileStat}>{stats.likes}</p>
                </li>
            </ul>
        </div>
    )
};




Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};