// import {
//   LiveKitRoom,
//   GridLayout,
//   ParticipantTile,
//   ControlBar,
//   RoomAudioRenderer,
//   useTracks,
//   Chat,
//   useParticipants,
//   // ParticipantName,
// } from "@livekit/components-react";
// import "@livekit/components-styles";
// import { Track } from "livekit-client";
// import { useSearchParams } from "react-router-dom";

// const TOKENS: Record<string, string> = {
//   user1:
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjU5Mzk3MzcsImlkZW50aXR5IjoidXNlcjEiLCJpc3MiOiJBUElabWV3QkdtTUphdUEiLCJuYW1lIjoidXNlcjEiLCJuYmYiOjE3NjU4NTMzMzcsInN1YiI6InVzZXIxIiwidmlkZW8iOnsicm9vbSI6IlRlc3QtUm9vbSIsInJvb21Kb2luIjp0cnVlfX0.-pN2hVFDVx6Xq1azmhgk3Ylfm7OfzVyvkyQ7QzlVgs8",
//   user2:
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjU5Mzk4NTgsImlkZW50aXR5IjoidXNlcjIiLCJpc3MiOiJBUElabWV3QkdtTUphdUEiLCJuYW1lIjoidXNlcjIiLCJuYmYiOjE3NjU4NTM0NTgsInN1YiI6InVzZXIyIiwidmlkZW8iOnsicm9vbSI6IlRlc3QtUm9vbSIsInJvb21Kb2luIjp0cnVlfX0.I2Sy5mKE1QHe_EvLfPuXS0COHh4eLzS733hVr0VrEyw",
// };

// function Stage() {
//   const trackRefs = useTracks([Track.Source.Camera, Track.Source.ScreenShare], {
//     onlySubscribed: false,
//   });

//   console.log(trackRefs);

//   const participants = useParticipants();
//   console.log(participants);

//   return (
//     <div style={{ height: "100%", display: "grid", gap: 12 }}>
//       <GridLayout tracks={trackRefs} style={{ height: "65vh" }}>
//         <ParticipantTile />
//       </GridLayout>
//     </div>
//   );
// }

// export default function Room() {
//   const [searchParams] = useSearchParams();
//   const who = (searchParams.get("user") || "user1").toLowerCase();
//   const token = TOKENS[who];

//   console.log("Joining as:", who);

//   if (!token) {
//     return (
//       <div style={{ padding: 16, fontFamily: "system-ui" }}>
//         <h2>Missing token for: {who}</h2>
//         <p>
//           Open:
//           <br />
//           <p>http://localhost:5173/room?user=user1</p>
//           <br />
//           <p>http://localhost:5173/room?user=user2</p>
//         </p>
//       </div>
//     );
//   }

//   return (
//     <LiveKitRoom
//       data-lk-theme="default"
//       token={token}
//       serverUrl="wss://audio-video-hasxox5d.livekit.cloud"
//       connect
//       video
//       audio
//       style={{ height: "90vh" }}
//     >
//       <Stage />
//       <Chat style={{ width: "100%", height: 250 }} />
//       <ControlBar />
//       <RoomAudioRenderer />
//     </LiveKitRoom>
//   );
// }
