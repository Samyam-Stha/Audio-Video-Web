import { useRoomContext } from "@livekit/components-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PhoneOff, LogOut } from "lucide-react";

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
        className="danger-state"
        title="Leave Call"
        style={{
          width: "44px",
          height: "44px",
          padding: "0",
        }}
      >
        <PhoneOff size={20} />
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
      className="leave-dialog"
    >
      <div className="leave-dialog-content">
        <div className="leave-dialog-icon">
          <LogOut size={28} />
        </div>
        <h3>Leave session?</h3>
        <p>Are you sure you want to disconnect from this video call?</p>
        <div className="leave-dialog-actions">
          <button onClick={onConfirm} className="btn-leave">
            Disconnect
          </button>
          <button onClick={onClose} className="btn-cancel">
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
}
