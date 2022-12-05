const NavBar = ({ showPlanet, setShowPlanet }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 20,
        paddingBottom: 20,
        position: "relative",
        zIndex: 99,
      }}
    >
      <div
        style={{
          color: showPlanet === "MEW" ? "#bb99ff" : "white",
          fontSize: 20,
          cursor: "pointer",
        }}
        onClick={() => {
          setShowPlanet("MEW");
        }}
      >
        Mew
      </div>
      <div
        style={{
          color: showPlanet === "THANOS" ? "#bb99ff" : "white",
          fontSize: 20,
          cursor: "pointer",
        }}
        onClick={() => {
          setShowPlanet("THANOS");
        }}
      >
        Thanos
      </div>
      <div
        style={{
          color: showPlanet === "RINNEGAN" ? "#bb99ff" : "white",
          fontSize: 20,
          cursor: "pointer",
        }}
        onClick={() => {
          setShowPlanet("RINNEGAN");
        }}
      >
        Rinnegan
      </div>
      <div
        style={{
          color: showPlanet === "EARTH" ? "#bb99ff" : "white",
          fontSize: 20,
          cursor: "pointer",
        }}
        onClick={() => {
          setShowPlanet("EARTH");
        }}
      >
        Earth
      </div>
      <div
        style={{
          color: showPlanet === "MOON" ? "#bb99ff" : "white",
          fontSize: 20,
          cursor: "pointer",
        }}
        onClick={() => {
          setShowPlanet("MOON");
        }}
      >
        Moon
      </div>
      <div
        style={{
          color: showPlanet === "SUN" ? "#bb99ff" : "white",
          fontSize: 20,
          cursor: "pointer",
        }}
        onClick={() => {
          setShowPlanet("SUN");
        }}
      >
        Sun
      </div>
    </div>
  );
};

export default NavBar;
