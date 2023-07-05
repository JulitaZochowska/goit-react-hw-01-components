import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Username = props => {
  const { username } = props;
  return <p className={css.name}>{username}</p>;
};

Username.propTypes = {
  username: PropTypes.string,
};

const Tag = props => {
  const { tag } = props;
  return <p className={css.tag}>@{tag}</p>;
};

Tag.propTypes = {
  tag: PropTypes.string,
};

const Location = props => {
  const { location } = props;
  return <p className={css.location}>{location}</p>;
};

Location.propTypes = {
  location: PropTypes.string,
};

const Avatar = props => {
  const { avatar } = props;
  return <img className={css.avatar} src={avatar} alt="User avatar" />;
};

Avatar.propTypes = {
  avatar: PropTypes.string,
};

const Stats = props => {
  const { followers, views, likes } = props.stats;
  return (
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
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
    <div className={css.profile}>
      <div className={css.description}>
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
