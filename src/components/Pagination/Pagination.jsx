import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './Pagination.module.scss';

const PaginationButton = (page, handleChange, res) => {
  return (
    <NavLink
      onClick={() => handleChange(res + 1)}
      to={`${res + 1}`}
      className={cn(styles.pagination__item, {
        [styles.active]: page === res + 1,
      })}
      key={res}
    >
      {res + 1}
    </NavLink>
  );
};
const Pagination = ({
  handleClickPrev,
  pageSize,
  page,
  reposCount,
  amount,
  handleChange,
  handleClickNext,
}) => {
  return (
    <div className={styles.pagination__wrap}>
      <ul className={styles.pagination__list}>
        <div className={styles.pagination__count}>
          {pageSize * page <= reposCount ? pageSize * page - 4 : reposCount}
          -
          {pageSize * page <= reposCount ? pageSize * page : reposCount}
          {' '}
          of
          {' '}
          {' '}
          {reposCount}
          {' '}
          items
        </div>
        <button
          type="button"
          className={styles.pagination__arrowleft}
          draggable="false"
          onClick={() => handleClickPrev()}
        >
        </button>
        {amount?.length > 7 ? (
          <>
            {page < 3
                && [...amount].splice(0, 3).map((res) => {
                  return PaginationButton(page, handleChange, res);
                })}
            {page === 3
                && [...amount].splice(0, 4).map((res) => {
                  return PaginationButton(page, handleChange, res);
                })}
            {page > 3
                && [...amount].splice(0, 1).map((res) => {
                  return PaginationButton(page, handleChange, res);
                })}
            <span className={styles.pagination__item}>...</span>
            {page > 3
                // eslint-disable-next-line no-unsafe-optional-chaining
                && page < amount?.length - 2
                && [...amount].splice(page - 2, 3).map((res) => {
                  return PaginationButton(page, handleChange, res);
                })}
            {page > 3 && page < amount.length - 2 && (
            <span className={styles.pagination__item}>...</span>
            )}
            {page < amount.length - 2
                && [...amount].splice(amount.length - 1, 1).map((res) => {
                  return PaginationButton(page, handleChange, res);
                })}
            {page === amount.length - 2
                && [...amount].splice(amount.length - 4, 4).map((res) => {
                  return PaginationButton(page, handleChange, res);
                })}
            {page > amount.length - 2
                && [...amount].splice(amount.length - 3, 3).map((res) => {
                  return PaginationButton(page, handleChange, res);
                })}
          </>
        ) : (
          amount?.map((res) => {
            return PaginationButton(page, handleChange, res);
          })
        )}
        <button
          type="button"
          className={styles.pagination__arrowright}
          draggable="false"
          onClick={() => handleClickNext()}
        >
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
