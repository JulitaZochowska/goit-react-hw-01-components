import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Stat = props => {
  const { label, percentage } = props.stat;
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
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
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
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
