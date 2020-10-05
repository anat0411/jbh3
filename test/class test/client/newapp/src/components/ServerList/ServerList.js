import React, { useEffect, useState } from "react";
import ServerCard from "../ServerCard/ServerCard";
import DataContext from "../../contexts/DataContext";
import "./serverList.css";

const ServerList = (props) => {
  const [servers, setServers] = useState([]);
  const [filterServers, setFilterServers] = useState(false);
  const [sort, setSort] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3001/api/servers");
        const { success, data } = await res.json();

        if (success) {
          setServers(data);
          setError(false);
        } else {
          setError(true);
        }
      } catch (e) {
        setError(true);
      }
    })();
  }, []);

  const renderServers = () => {
    let actualServers = [...servers];

    if (filterServers) {
      actualServers = actualServers.filter((server) => server.status === 1);
    }

    if (sort) {
      actualServers = actualServers.sort((a, b) => {
        return new Date(a.datetime) - new Date(b.datetime);
      });
    }

    return actualServers.map((server) => (
      <ServerCard key={server.id} {...server} />
    ));
  };

  return (
    <DataContext.Provider value={{ servers, setServers }}>
      <header>
        <h1>Mission 3 YES YOU CAN DO IT!</h1>
      </header>
      <div className="sort-wrapper">
        <div className="checkbox-wrapper">
          <input
            id="checkbox"
            type="checkbox"
            value={filterServers}
            onChange={(e) => setFilterServers(e.target.checked)}
          />
          <label htmlFor="checkbox">Only active server</label>
        </div>
        <div className="sort">
          Sort data&nbsp;
          <button onClick={() => setSort(!sort)}>{String(sort)}</button>
        </div>
      </div>
      <div className="server-list">
        {renderServers()}
        {error && <div>Error</div>}
      </div>
    </DataContext.Provider>
  );
};

export default ServerList;
