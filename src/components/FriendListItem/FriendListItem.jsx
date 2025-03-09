import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";


export default function FriendListItem({avatar , isOnline , name}) {
    
  return (
    <>
      <div className={css.boxFriend}>
      <span 
      className={css.isOnline}
      style={{
      backgroundColor: isOnline ? 'green' : 'red',
      }}></span>
      <img src={avatar} alt="User avatar" width="48" />
      </div>
      <p>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};