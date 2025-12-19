import { useLocalParticipant } from "@livekit/components-react";
import "@livekit/components-styles";
import { Mic } from "lucide-react";
import { MicOff } from "lucide-react";
import VideoCamOffIcon from "@mui/icons-material/VideocamOff";
import VideoCamIcon from "@mui/icons-material/Videocam";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import ConfirmLeaveButton from "./ConfirmLeaveButton";
import ChatToggleWithPanel from "./ChatToggelWithPanel";

export default function CustomControlBar() {
  const { localParticipant } = useLocalParticipant();
  console.log("value: ", localParticipant.isMicrophoneEnabled);

  const handleToggleTrack = (track: "AUDIO" | "VIDEO" | "SCREEN_SHARE") => {
    if (track === "AUDIO") {
      localParticipant.setMicrophoneEnabled(
        !localParticipant.isMicrophoneEnabled
      );
    } else if (track === "VIDEO") {
      localParticipant.setCameraEnabled(!localParticipant.isCameraEnabled);
    } else {
      localParticipant.setScreenShareEnabled(
        !localParticipant.isScreenShareEnabled
      );
    }
  };

  return (
    <div className="control-box justify-center items-center gap-2.5 flex">
      <button onClick={() => handleToggleTrack("AUDIO")}>
        {localParticipant.isMicrophoneEnabled ? (
          <span className="flex justify-between gap-2">
            <Mic /> <p className="hidden md:block">Mute</p>
          </span>
        ) : (
          <span className="flex justify-between gap-2">
            <MicOff /> <p className="hidden md:block">Unmute</p>
          </span>
        )}
      </button>
      <button onClick={() => handleToggleTrack("VIDEO")}>
        {localParticipant.isCameraEnabled ? (
          <span className="flex justify-between gap-2">
            <VideoCamIcon /> <p className="hidden md:block">Camera</p>
          </span>
        ) : (
          <span className="flex justify-between gap-2">
            <VideoCamOffIcon /> <p className="hidden md:block">Camera</p>
          </span>
        )}
      </button>
      <ConfirmLeaveButton />
      <button onClick={() => handleToggleTrack("SCREEN_SHARE")}>
        {localParticipant.isScreenShareEnabled ? (
          <span className="flex justify-between gap-2">
            <StopScreenShareIcon />{" "}
            <p className="hidden md:block">Stop Share</p>
          </span>
        ) : (
          <span className="flex justify-between gap-2">
            <ScreenShareIcon /> <p className="hidden md:block">Share Screen</p>
          </span>
        )}
      </button>
      {/* <ControlBar controls={{ leave: false }} /> */}

      <ChatToggleWithPanel />
    </div>
  );
}
