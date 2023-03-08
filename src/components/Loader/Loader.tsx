import { Circles } from "react-loader-spinner";

export default function Spiner() {
  const style: {} = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div style={style}>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
