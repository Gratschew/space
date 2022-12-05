import { Html } from "@react-three/drei";
const Loader = () => {
  return (
    <Html
      center
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#030007",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Html>
  );
};
export default Loader;
