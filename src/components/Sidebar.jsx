import React, { useEffect, useRef, useState } from "react";
import { Divider } from "rsuite";
import CreateRoomBtnModal from "./dashboard/CreateRoomBtnModal";
import DashboardToggle from "./dashboard/DashboardToggle";
import ChatRoomList from "./rooms/ChatRoomList";

const Sidebar = () => {
  const topSideBarRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (topSideBarRef.current) {
      setHeight(topSideBarRef.current.scrollHeight);
    }
  }, [topSideBarRef]);

  return (
    <div className="h-100 pt-2">
      <div ref={topSideBarRef}>
        <DashboardToggle />
        <CreateRoomBtnModal />
        <Divider>Join Chat Room</Divider>
      </div>
      <ChatRoomList aboveElHeight={height} />
    </div>
  );
};

export default Sidebar;
