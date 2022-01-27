import React, { memo } from "react";
import { useCurrentRoom } from "../../../context/current-room.context";

const Top = () => {
  const name = useCurrentRoom((v) => v.name);

  return <div>welcome to {name}</div>;
};

export default memo(Top);
