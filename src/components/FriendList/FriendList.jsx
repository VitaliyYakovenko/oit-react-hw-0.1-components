import PropTypes from "prop-types";
import FriendListItem from "components/FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ elems }) {
  
    return (
        <ul className={css.friendList}>
            {elems.map(friend => (
                <li className={css.friendItem} key={friend.id}>
                <FriendListItem
                    id={friend.id}
                    avatar={friend.avatar}
                    isOnline={friend.isOnline}
                    name={friend.name}
                    />
                </li>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    elems: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
};