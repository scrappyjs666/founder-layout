import styles from './PaginateBar.module.scss'

export const PaginateBar = ({children}) => {
  return (
      <div className = {styles.wrapper} >
        {children}
      </div>
  );
};