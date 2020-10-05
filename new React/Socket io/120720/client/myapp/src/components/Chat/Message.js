import React from "react";

const Message = (props) => {
  const { name, msg, image } = props;

  if (image) {
    return <img src={`/api/images/${image}`} />;
  }

  return (
    <div>
      <strong>{name}</strong>
      {msg}
    </div>
  );
};

export default Message;
