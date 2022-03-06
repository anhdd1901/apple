import "./Main.scss";
import { TAB_ICON, TAB_ICON_SUB, USER_TYPE, VIEWER } from "../../config";

import { Input, message } from "antd";
import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PT {}

const Main: React.FC<PT> = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    let iconDiv: any = document.getElementById("tab-browser-icon");
    iconDiv.href = TAB_ICON_SUB;
  }, []);

  const onConfirmUser = () => {
    if (user.trim() === "") {
      message.error("Please enter your name");
      return;
    }

    const filteredData = USER_TYPE.filter((a) => a.value === user);
    if (filteredData.length === 0) {
      navigate("/apple-store");
    } else {
      let iconDiv: any = document.getElementById("tab-browser-icon");
      iconDiv.href = TAB_ICON;
      if (filteredData[0].type === VIEWER) navigate("/Apple's-diary");
      else navigate("/this-is-your-site-Apple");
    }
  };

  return (
    <div>
      <Input
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
        placeholder="You are ..."
        onPressEnter={onConfirmUser}
      />
      Poker game
    </div>
  );
};

export default memo(Main);
