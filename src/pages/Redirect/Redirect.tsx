import "./Redirect.scss";

import React, { memo, useEffect, useState } from "react";

interface PT {}

const Redirect: React.FC<PT> = () => {
  const [count, setCount] = useState<number>(3);

  useEffect(() => {
    let currentCount = 3;
    const countDown = setInterval(() => {
      setCount(currentCount - 1);
      currentCount -= 1;
      if (currentCount === 1) clearInterval(countDown);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.location.replace("https://www.apple.com/store");
    }, 3000);
  }, []);

  return <div>Redirect to Apple'store in {count}s</div>;
};

export default memo(Redirect);
