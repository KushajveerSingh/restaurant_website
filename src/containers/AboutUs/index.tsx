import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div
      className={`${styles.app__aboutus} app__bg flex__center section__padding`}
      id="about"
    >
      <div className={`${styles.app__aboutus_overlay} flex__center`}>
        <img src="/G.png" alt="g letter" />
      </div>

      <div className={`${styles.app__aboutus_content} flex__center`}>
        <div className={styles.app__aboutus_content_about}>
          <h1 className="headtext__cormorant">About Us</h1>
          <img src="/spoon.png" alt="about_spoon" className="spoon_img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
            adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu
            proin mauris et.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className={`${styles.app__aboutus_content_knife} flex__center`}>
          <img src="/knife.png" alt="about knife" />
        </div>

        <div className={styles.app__aboutus_content_history}>
          <h1 className="headtext__cormorant">Our History</h1>
          <img src="/spoon.png" alt="about_spoon" className="spoon_img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
            adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu
            proin mauris et.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
