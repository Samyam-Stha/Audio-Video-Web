import {
  LiveKitRoom,
  RoomAudioRenderer,
  LayoutContextProvider,
  useCreateLayoutContext,
} from "@livekit/components-react";
import "@livekit/components-styles";
import GridLayoutContainer from "../../components/room-layout/GridLayoutContainer";
import RoomContainer from "../../components/room/RoomContainer";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./user.css";
import CustomControlBar from "../../components/CustomControlBar/CustomControlBar";
import ChatPanel from "../../components/CustomControlBar/ChatPanel";

export default function Room() {
  const { state } = useLocation();
  const layout = useCreateLayoutContext();
  const navigate = useNavigate();

  const token = import.meta.env.VITE_LIVEKIT_TOKEN;
  const serverUrl = import.meta.env.VITE_LIVEKIT_SERVER_URL;

  if (!state) {
    return <p>No Join Data</p>;
  }
  return (
    <div className="room-layout-wrapper">
      <LiveKitRoom
        token={token}
        serverUrl={serverUrl}
        connect
        video
        audio
        style={{ height: "100%" }}
        onDisconnected={() => {
          navigate("/");
        }}
      >
        <LayoutContextProvider value={layout}>
          <RoomContainer>
            <div className="room-main-area">
              <div className="w-full h-full flex flex-col min-h-0">
                <div className="flex flex-1 min-h-0 relative">
                  <GridLayoutContainer />
                  <ChatPanel />
                </div>
                <CustomControlBar />
              </div>
            </div>
          </RoomContainer>

          <RoomAudioRenderer />
        </LayoutContextProvider>
      </LiveKitRoom>
    </div>
  );
}
