import "./Story.scss";
import React, { memo, useEffect, useState } from "react";
import { useConnectSocket } from "../../useConnectSocket";

interface PT {}

const CHAT_ENGINE_PROJECT_ID = "2845d519-cf70-4ed6-8db4-20d78a700e48";
const data = { _id: "61b9942a2ec6fa55f5e4721d", chatSecret: "xpy0m5fa" };

const Story: React.FC<PT> = () => {
  const [newMess, setNewMess] = useState<string>("");
  const { isConnected, client } = useConnectSocket();

  useEffect(() => {
    if (newMess !== "") {
      const data = JSON.parse(newMess);
      if (data.action === "new_message") {
        console.log(data.data.message.text);
      }
    }
  }, [newMess]);

  // useEffect(() => {
  //   if (isConnected) {
  //     const socket = client as any;

  //     socket.onopen = (event: any) => {
  //       console.log("Socket connect: ", event);
  //     };

  //     socket.onmessage = (event: any) => {
  //       if (event.type === "message") setNewMess(event.data);
  //     };
  //   }
  // }, [isConnected]);

  useEffect(() => {
    let socket = new WebSocket(
      `wss://api.chatengine.io/person/?publicKey=${CHAT_ENGINE_PROJECT_ID}&username=${data._id}&secret=${data.chatSecret}`
    );

    socket.onopen = (event) => {
      console.log("Socket connect: ", event);
    };

    socket.onmessage = (event) => {
      if (event.type === "message") setNewMess(event.data);
    };

    return () => {
      socket.onclose = (event) => {
        console.log("Socket disconnect:", event);
      };
    };
  }, []);

  return <div>Library, Story & Album</div>;
};

export default memo(Story);
