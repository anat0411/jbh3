import React, { useState, useEffect, useRef } from "react";
import SocketIo from "socket.io-client";
import Message from "./Message";

const Chat = (props) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const myIo = useRef();
  const imageRef = useRef();

  useEffect(() => {
    myIo.current = SocketIo();

    return () => {
      myIo.current.disconnect();
    };
  }, []);

  useEffect(() => {
    myIo.current.on("msg", (msg) => {
      setMessages([...messages, msg]);
    });

    myIo.current.on("image", (msg) => {
      setMessages([...messages, { image: msg }]);
    });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();

    myIo.current.emit("get_msg", text);
    setText("");
  };

  const handleImageSubmit = (e) => {
    e.preventDefault();

    const files = imageRef.current.files;

    if (files.length) {
      const fd = new FormData();
      fd.append("image", files[0]);

      (async () => {
        const res = await fetch("/api/images", {
          method: "POST",
          credentials: "include",
          body: fd,
        });

        if (res.status === 200) {
          console.log("images sent");
        }
      })();
    }
  };

  return (
    <>
      <h1>My First Chat</h1>
      <div>
        {messages.map((msg) => (
          <Message key={msg.id || msg.image} {...msg} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" />
      </form>
      <form onSubmit={handleImageSubmit}>
        <input type="file" ref={imageRef} name="image" />
        <input type="submit" />
      </form>
    </>
  );
};

export default Chat;
