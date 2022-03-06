import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const CHAT_ENGINE_PROJECT_ID = "2845d519-cf70-4ed6-8db4-20d78a700e48";
const data = { _id: "61b9942a2ec6fa55f5e4721d", chatSecret: "xpy0m5fa" };
const baseURL = `wss://api.chatengine.io/person/?publicKey=${CHAT_ENGINE_PROJECT_ID}&username=${data._id}&secret=${data.chatSecret}`;

export const useConnectSocket = () => {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : sessionStorage.getItem("token")
    ? sessionStorage.getItem("token")
    : "";
  const [isConnected, setConnected] = useState(false);
  const [client, setClient] = useState<Socket>();

  // useEffect(() => {
  //   // Todo: Init socket client
  //   if (!isConnected) {
  //     const client = io(baseURL ? baseURL : "", {
  //       timeout: 5000,
  //       extraHeaders: {
  //         auth: token ? token : "",
  //       },
  //     });

  //     // Todo: Listen events
  //     setClient(client);
  //     client.on("connect", () => {
  //       setConnected(true);
  //     });

  //     client.on("disconnect", () => {
  //       setConnected(false);
  //     });

  //     return () => {
  //       client.disconnect();
  //     };
  //   }
  // }, [token]);

  return { isConnected, client };
};
