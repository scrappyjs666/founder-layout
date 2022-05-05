import styles from './Card.module.scss';

export const Card = ({name, description,link}) => {
  return (
    <div className = {styles.wrapper}>
    <ul className= {styles.card__list}>
      <li className = {styles.card__item}>
        <a className= {styles.card__name} href= {link} target="_blank">{name}</a>
        <div className= {styles.card__description}>{description}</div>
      </li>
    </ul>
    </div>
  );
};