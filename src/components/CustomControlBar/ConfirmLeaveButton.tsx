import { useRoomContext } from "@livekit/components-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CallEndIcon from "@mui/icons-material/CallEnd";

export default function ConfirmLeaveButton() {
  const room = useRoomContext();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    room.disconnect();
    navigate("/", { replace: true });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "10px 16px",
          background: "red",
          color: "white",
          borderRadius: "6px",
          fontWeight: 500,
        }}
      >
        <CallEndIcon />
      </button>

      <NativeDialogComponent
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={handleConfirm}
      />
    </>
  );
}

function NativeDialogComponent({
  isOpen,
  onClose,
  onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (isOpen) dialogRef.current.showModal();
    else dialogRef.current.close();
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onCancel={onClose}
      className=" bg-white text-black px-20 py-5 rounded-2xl left-[5%]  md:left-[35%]"
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <h3>Leave room?</h3>
        <p>Are you sure you want to leave the call?</p>
        <div className="flex justify-between gap-10">
          <button onClick={onConfirm} className="bg-red-500! text-white!">
            Leave
          </button>
          <button onClick={onClose} className="text-white">
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
}
