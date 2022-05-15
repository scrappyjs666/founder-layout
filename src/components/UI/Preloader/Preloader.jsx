import styles from './Prealoder.module.scss';

const Prealoder = () => {
  return (
    <div className={styles.prealoder}>
      <lottie-player
        src="https://assets.website-files.com/5e994ccfe5296410a383baa8/61893039be285c15058983ee_venture%20logo_white.json"
        background="transparent"
        speed="0.7"
        loop
        autoplay
      >
      </lottie-player>
    </div>
  );
};

export default Prealoder;
