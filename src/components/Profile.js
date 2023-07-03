import PropTypes from 'prop-types';

const Username = props => {
  const { username } = props;
  return <p className="name">{username}</p>;
};

Username.propTypes = {
  username: PropTypes.string,
};

const Tag = props => {
  const { tag } = props;
  return <p className="tag">{tag}</p>;
};

Tag.propTypes = {
  tag: PropTypes.string,
};

const Location = props => {
  const { location } = props;
  return <p className="location">{location}</p>;
};

Location.propTypes = {
  location: PropTypes.string,
};

const Avatar = props => {
  const { avatar } = props;
  return <img className="avatar" src={avatar} alt="User avatar" />;
};

Avatar.propTypes = {
  avatar: PropTypes.string,
};

const Stats = props => {
  const { followers, views, likes } = props.stats;
  return (
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <div className="profile">
      <div className="description">
        <Avatar avatar={avatar} />
        <Username username={username} />
        <Tag tag={tag} />
        <Location location={location} />
      </div>
      <Stats stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
