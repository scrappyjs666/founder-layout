import { Link } from 'react-router-dom';
import githublogo from './img/githublogo.svg';
import styles from './Header.module.scss';

export const Header = ({
  findUser, setInputValue, inputValue, children,
}) => {
  return (
    <div className={styles.header__wrapper}>
      {children}
      <canvas className="canvas"></canvas>
      <header className={styles.header}>
        <a href="/#">
          <img
            draggable="false"
            src={githublogo}
            alt="githublogo"
            className={styles.header__logo}
          />
        </a>
        <div className={styles.header__input}>
          <form
            onSubmit={(e) => e.preventDefault()}
            action="#"
            type="submit"
          >
            <input
              onKeyPress={(e) => e.key === 'Enter' && findUser()}
              placeholder="Enter GitHub username"
              onChange={(event) => setInputValue(event.target.value)}
              type="text"
              className={styles.input}
            />
            <Link to={`StartPage/repos/users:${inputValue}/page/`}>
              <button
                onClick={() => findUser()}
                type="button"
                className={styles.header__loupe}
              >
              </button>

            </Link>
          </form>
        </div>
      </header>
    </div>
  );
};
