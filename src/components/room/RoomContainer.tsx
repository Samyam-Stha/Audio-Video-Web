import { RoomContext, useRoomContext } from "@livekit/components-react";
import type { Participant } from "livekit-client";
import React, { useEffect, type ReactNode } from "react";
import { ToastContainer, toast } from "react-toastify";

const RoomContainer = ({ children }: { children: ReactNode }) => {
  const room = useRoomContext();

  useEffect(() => {
    const onParticipantDisconnected = (participant: Participant) => {
      toast.error(`${participant.identity} disconnected`, {
        position: "top-center",
        autoClose: 5000,
      });

      console.log("participant disconnected", participant);
    };

    const onParticipantConnected = (participant: Participant) => {
      toast.success(`${participant.identity} connected`, {
        position: "top-center",
        autoClose: 5000,
      });

      console.log("participant connected", participant);
    };

    room.on("participantDisconnected", onParticipantDisconnected);
    room.on("participantConnected", onParticipantConnected);

    return () => {
      room.off("participantDisconnected", onParticipantDisconnected);
      room.off("participantConnected", onParticipantConnected);
    };
  }, [room]);

  return (
    <RoomContext value={room}>
      {children}
      <ToastContainer />
    </RoomContext>
  );
};

export default RoomContainer;
