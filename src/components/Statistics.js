import PropTypes from 'prop-types';

const Stat = props => {
  const { label, percentage } = props.stat;
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

Stat.propTypes = {
  stat: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};

export const Statistics = props => {
  const { title, stats } = props;
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {/* mapem otrzymuje dostęp do kadego pojedynczego obiektu tablicy (mozesz uyć pętli for of jako zamiennik) */}
        {stats.map(stat => (
          <Stat stat={stat} key={stat.id} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
