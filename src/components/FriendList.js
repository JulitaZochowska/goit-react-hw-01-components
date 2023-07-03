import PropTypes from 'prop-types';

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

// FriendListItem.propTypes = {
//   // do obiektu zawsze shape
//   friendListItem: PropTypes.shape({
//     avatar: PropTypes.string,
//     name: PropTypes.string,
//     isOnline: PropTypes.string,
//   }),
// };

export const FriendList = props => {
  const { friends } = props;
  return (
    <ul className="friend-list">
      {friends.map(friendListItem => (
        <FriendListItem
          avatar={friendListItem.avatar}
          name={friendListItem.name}
          isOnline={friendListItem.isOnline}
          key={friendListItem.id}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  // do tablicy zawsze arrayOf
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
