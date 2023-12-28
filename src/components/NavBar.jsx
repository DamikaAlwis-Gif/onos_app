import React from 'react'
import onosLogo from '../img/onos.png'
const NavBar = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#2A2A2A", padding: 5 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ width: "50px" }}>
            <img
              src={onosLogo}
              alt="onos logo"
              style={{ width: "50px", borderRadius: "50%" }}
            />
          </div>
          <div style={{ flex: 1, marginLeft: "10px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                ONOS Queue Management Application
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar