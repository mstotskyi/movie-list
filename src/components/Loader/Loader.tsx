import { Circles } from "react-loader-spinner";
// import styles from "components/Loader/Loader.module.css";

export default function Spiner() {
  return (
    <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      // className={styles.loader}
    />
  );
}
