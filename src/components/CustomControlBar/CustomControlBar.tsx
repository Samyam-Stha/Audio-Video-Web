import { useLocalParticipant } from "@livekit/components-react";
import "@livekit/components-styles";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Monitor,
  MonitorOff,
} from "lucide-react";
import ConfirmLeaveButton from "./ConfirmLeaveButton";
import ChatToggleWithPanel from "./ChatToggelWithPanel";

export default function CustomControlBar() {
  const { localParticipant } = useLocalParticipant();
  console.log("value: ", localParticipant.isMicrophoneEnabled);

  const handleToggleTrack = (track: "AUDIO" | "VIDEO" | "SCREEN_SHARE") => {
    if (track === "AUDIO") {
      localParticipant.setMicrophoneEnabled(
        !localParticipant.isMicrophoneEnabled,
      );
    } else if (track === "VIDEO") {
      localParticipant.setCameraEnabled(!localParticipant.isCameraEnabled);
    } else {
      localParticipant.setScreenShareEnabled(
        !localParticipant.isScreenShareEnabled,
      );
    }
  };

  return (
    <div className="control-box">
      <button
        onClick={() => handleToggleTrack("AUDIO")}
        className={localParticipant.isMicrophoneEnabled ? "" : "danger-state"}
        title={
          localParticipant.isMicrophoneEnabled
            ? "Mute Microphone"
            : "Unmute Microphone"
        }
      >
        {localParticipant.isMicrophoneEnabled ? (
          <span>
            <Mic size={20} /> <p className="hidden md:block">Mute</p>
          </span>
        ) : (
          <span>
            <MicOff size={20} /> <p className="hidden md:block">Unmute</p>
          </span>
        )}
      </button>
      <button
        onClick={() => handleToggleTrack("VIDEO")}
        className={localParticipant.isCameraEnabled ? "" : "danger-state"}
        title={
          localParticipant.isCameraEnabled
            ? "Turn Off Camera"
            : "Turn On Camera"
        }
      >
        {localParticipant.isCameraEnabled ? (
          <span>
            <Video size={20} /> <p className="hidden md:block">Stop Video</p>
          </span>
        ) : (
          <span>
            <VideoOff size={20} />{" "}
            <p className="hidden md:block">Start Video</p>
          </span>
        )}
      </button>

      <ConfirmLeaveButton />

      <button
        onClick={() => handleToggleTrack("SCREEN_SHARE")}
        className={localParticipant.isScreenShareEnabled ? "active-state" : ""}
        title={
          localParticipant.isScreenShareEnabled
            ? "Stop Sharing"
            : "Share Screen"
        }
      >
        {localParticipant.isScreenShareEnabled ? (
          <span>
            <MonitorOff size={20} />{" "}
            <p className="hidden md:block">Stop Share</p>
          </span>
        ) : (
          <span>
            <Monitor size={20} />{" "}
            <p className="hidden md:block">Share Screen</p>
          </span>
        )}
      </button>

      <ChatToggleWithPanel />
    </div>
  );
}
