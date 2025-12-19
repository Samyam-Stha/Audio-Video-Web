import {
  LiveKitRoom,
  // ControlBar,
  RoomAudioRenderer,
  // Chat,
  LayoutContextProvider,
  // useLocalParticipant,
  // useChatToggle,
  useCreateLayoutContext,
  // useRoomContext,
} from "@livekit/components-react";
import "@livekit/components-styles";
import GridLayoutContainer from "../room-layout/GridLayoutContainer";
import RoomContainer from "../room/RoomContainer";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./user.css";

import CustomControlBar from "../CustomControlBar/CustomControlBar";
import ChatPanel from "../CustomControlBar/ChatPanel";
// function HandleControlBar() {
//   const { localParticipant } = useLocalParticipant();
//   console.log("value: ", localParticipant.isMicrophoneEnabled);

//   const handleToggleTrack = (track: "AUDIO" | "VIDEO" | "SCREEN_SHARE") => {
//     if (track === "AUDIO") {
//       localParticipant.setMicrophoneEnabled(
//         !localParticipant.isMicrophoneEnabled
//       );
//     } else if (track === "VIDEO") {
//       localParticipant.setCameraEnabled(!localParticipant.isCameraEnabled);
//     } else {
//       localParticipant.setScreenShareEnabled(
//         !localParticipant.isScreenShareEnabled
//       );
//     }
//   };

//   return (
//     <div className="control-box justify-center items-center gap-2.5 flex">
//       <button onClick={() => handleToggleTrack("AUDIO")}>
//         {localParticipant.isMicrophoneEnabled ? (
//           <span className="flex justify-between gap-2">
//             <Mic /> <p className="hidden md:block">Mute</p>
//           </span>
//         ) : (
//           <span className="flex justify-between gap-2">
//             <MicOff /> <p className="hidden md:block">Unmute</p>
//           </span>
//         )}
//       </button>
//       <button onClick={() => handleToggleTrack("VIDEO")}>
//         {localParticipant.isCameraEnabled ? (
//           <span className="flex justify-between gap-2">
//             <VideoCamIcon /> <p className="hidden md:block">Camera</p>
//           </span>
//         ) : (
//           <span className="flex justify-between gap-2">
//             <VideoCamOffIcon /> <p className="hidden md:block">Camera</p>
//           </span>
//         )}
//       </button>
//       <ConfirmLeaveButton />
//       <button onClick={() => handleToggleTrack("SCREEN_SHARE")}>
//         {localParticipant.isScreenShareEnabled ? (
//           <span className="flex justify-between gap-2">
//             <StopScreenShareIcon /> <p className="hidden md:block">Stop Share</p>
//           </span>
//         ) : (
//           <span className="flex justify-between gap-2">
//             <ScreenShareIcon /> <p className="hidden md:block">Share Screen</p>
//           </span>
//         )}
//       </button>
//       {/* <ControlBar controls={{ leave: false }} /> */}

//       <ChatToggleWithPanel />
//     </div>
//   );
// }

// function HandleMobileControlBar() {
//   const { localParticipant } = useLocalParticipant();
//   console.log("value: ", localParticipant.isMicrophoneEnabled);

//   return (
//     <div className="flex justify-center items-center gap-2.5 md:hidden ">
//       <button
//         onClick={() =>
//           localParticipant.setMicrophoneEnabled(
//             !localParticipant.isMicrophoneEnabled
//           )
//         }
//       >
//         {localParticipant.isMicrophoneEnabled ? (
//           <span className="flex justify-between gap-2">
//             <Mic />
//           </span>
//         ) : (
//           <span className="flex justify-between gap-2">
//             <MicOff />
//           </span>
//         )}
//       </button>
//       <button
//         onClick={() =>
//           localParticipant.setCameraEnabled(!localParticipant.isCameraEnabled)
//         }
//       >
//         {localParticipant.isCameraEnabled ? (
//           <span className="flex justify-between gap-2">
//             <VideoCamIcon />
//           </span>
//         ) : (
//           <span className="flex justify-between gap-2">
//             <VideoCamOffIcon />
//           </span>
//         )}
//       </button>
//       <ConfirmLeaveButton />

//       <button
//         onClick={() =>
//           localParticipant.setScreenShareEnabled(
//             !localParticipant.isScreenShareEnabled
//           )
//         }
//       >
//         {localParticipant.isScreenShareEnabled ? (
//           <span className="flex justify-between gap-2">
//             <StopScreenShareIcon />
//           </span>
//         ) : (
//           <span className="flex justify-between gap-2">
//             <ScreenShareIcon />
//           </span>
//         )}
//       </button>
//       {/* <ControlBar controls={{ leave: false }} /> */}
//       <ChatToggleWithPanel />
//     </div>
//   );
// }

// function ChatToggleWithPanel() {
//   const { mergedProps } = useChatToggle({
//     props: {
//       className: "rounded border",
//       type: "button",
//     },
//   });

//   const open = mergedProps["aria-pressed"] === "true";

//   return (
//     <button {...mergedProps} style={{ padding: "10px", height: "45px" }}>
//       {open ? <CommentsDisabledIcon /> : <MessageIcon />}
//     </button>
//   );
// }

// function ChatPanel() {
//   const { mergedProps } = useChatToggle({
//     props: {
//       className: " rounded border",
//       type: "button",
//     },
//   });
//   const open = mergedProps["aria-pressed"] === "true";

//   if (!open) return null;

//   return (
//     <div
//       style={{
//         borderLeft: "1px solid #2a2a2a",
//         height: "90%",
//         overflow: "hidden",
//       }}
//     >
//       <Chat style={{ height: "85vh", width: "100%", overflow: "scroll" }} />
//     </div>
//   );
// }

// function NativeDialogComponent({
//   isOpen,
//   onClose,
//   onConfirm,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
//   onConfirm: () => void;
// }) {
//   const dialogRef = useRef<HTMLDialogElement>(null);

//   useEffect(() => {
//     if (!dialogRef.current) return;

//     if (isOpen) dialogRef.current.showModal();
//     else dialogRef.current.close();
//   }, [isOpen]);

//   return (
//     <dialog
//       ref={dialogRef}
//       onCancel={onClose}
//       className=" bg-white text-black px-20 py-5 rounded-2xl left-[5%]  md:left-[35%]"
//     >
//       <div className="flex flex-col justify-center items-center gap-5">
//         <h3>Leave room?</h3>
//         <p>Are you sure you want to leave the call?</p>
//         <div className="flex justify-between gap-10">
//           <button onClick={onConfirm} className="bg-red-500! text-white!">
//             Leave
//           </button>
//           <button onClick={onClose} className="text-white">
//             Cancel
//           </button>
//         </div>
//       </div>
//     </dialog>
//   );
// }

// function ConfirmLeaveButton() {
//   const room = useRoomContext();
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const handleConfirm = () => {
//     room.disconnect();
//     navigate("/", { replace: true });
//   };

//   return (
//     <>
//       <button
//         onClick={() => setOpen(true)}
//         style={{
//           padding: "10px 16px",
//           background: "red",
//           color: "white",
//           borderRadius: "6px",
//           fontWeight: 500,
//         }}
//       >
//         <CallEndIcon />
//       </button>

//       <NativeDialogComponent
//         isOpen={open}
//         onClose={() => setOpen(false)}
//         onConfirm={handleConfirm}
//       />
//     </>
//   );
// }

export default function Room() {
  const { state } = useLocation();
  const layout = useCreateLayoutContext();
  const navigate = useNavigate();

  if (!state) {
    return <p>No Join Data</p>;
  }
  return (
    <div style={{ height: "95vh", display: "flex", width: "100vw" }}>
      <LiveKitRoom
        data-lk-theme="default"
        token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjY4MzM3ODYsImlkZW50aXR5IjoidXNlcjEiLCJpc3MiOiJBUElabWV3QkdtTUphdUEiLCJuYmYiOjE3NjU5MzM3ODYsInN1YiI6InVzZXIxIiwidmlkZW8iOnsiY2FuUHVibGlzaCI6dHJ1ZSwiY2FuUHVibGlzaERhdGEiOnRydWUsImNhblN1YnNjcmliZSI6dHJ1ZSwicm9vbSI6IlRlc3QtUm9vbSIsInJvb21Kb2luIjp0cnVlfX0.7dUMJF6We3uyRVMk5vPrqTdGDRNc-M19u5vIZT_z8wo"
        serverUrl="wss://audio-video-hasxox5d.livekit.cloud"
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
            <div style={{ display: "flex", height: "100%" }}>
              <div className="w-full h-full flex flex-col ">
                <GridLayoutContainer />
                <CustomControlBar />
                {/* <HandleControlBar /> */}
                {/* <HandleMobileControlBar /> */}
              </div>
              <ChatPanel />
            </div>
          </RoomContainer>

          <RoomAudioRenderer />
        </LayoutContextProvider>
      </LiveKitRoom>
    </div>
  );
}
