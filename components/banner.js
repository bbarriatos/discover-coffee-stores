import styles from "../src/styles/Banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span>Coffee</span>
        <span>Connosseur</span>
      </h2>
      <p className={styles.subTitle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit sunt,
        voluptas reprehenderit soluta quod voluptates quidem ipsum beatae quasi,
        molestiae nam suscipit? Non, eveniet? Velit impedit esse at beatae
        porro.
      </p>
      <button className={styles.button} onClick={props.handleOnClick}>
        {props.buttonText}
      </button>
    </div>
  );
};

export default Banner;
