import React from "react";
import Status from "../Status/Status";
import "./serverCard.css";

const ServerCard = (props) => {
  const { id, name, ip, hosting_company, status, datetime } = props;

  return (
    <div className="server-item">
      <Status id={id} status={status} />
      <ul>
        <li>
          <strong>ID:</strong> {id}
        </li>
        <li>
          <strong>Name:</strong> {name}
        </li>
        <li>
          <strong>Ip:</strong> {ip}
        </li>
        <li>
          <strong>Hosting:</strong> {hosting_company}
        </li>
        <li>
          <strong>Status:</strong> {status}
        </li>
        <li>
          <strong>Timestamp:</strong> {datetime}
        </li>
      </ul>
    </div>
  );
};

export default ServerCard;
