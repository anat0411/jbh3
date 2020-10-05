import React, { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import "./status.css";

const Status = (props) => {
  const { servers, setServers } = useContext(DataContext);
  const { status, id } = props;

  const updateStatus = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/server/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status: !status }),
      });

      const { success } = await res.json();

      if (success) {
        const updatedServers = servers.map((server) => {
          if (server.id === id) {
            return { ...server, status: status === 0 ? 1 : 0 };
          }

          return server;
        });

        setServers(updatedServers);
      } else {
        alert("error");
      }
    } catch (e) {
      alert("error");
    }
  };

  return (
    <div className={`toggle ${status ? "on" : "off"}`}>
      <button className="toggle-btn" onClick={updateStatus}>
        <div className="toggle-pin">{status ? "ON" : "OFF"}</div>
      </button>
    </div>
  );
};

export default Status;
