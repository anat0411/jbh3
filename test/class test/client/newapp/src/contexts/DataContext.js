import React from "react";

const DataContext = React.createContext({ servers: [], setServers: () => {} });

export default DataContext;
