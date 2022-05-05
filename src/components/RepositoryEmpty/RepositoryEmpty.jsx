import listEmpty from '../../images/listEmpty.png'
import styles from './RepositoryEmpty.module.scss'

export const RepositoryEmpty = () => {
  return (
    <div className = {styles.wrapper}>
      <a 
        className = {styles.repositoryEmpty__image} 
        src = {listEmpty} 
        alt = {'image Repository list is empty'}/>
      <span 
        className = {styles.repositoryEmpty__text}>
        Repository list is empty
      </span>
    </div>
  );
};