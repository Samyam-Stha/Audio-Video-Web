import { useChatToggle } from "@livekit/components-react";
import { MessageSquare, MessageSquareOff } from "lucide-react";

export default function ChatToggleWithPanel() {
  const { mergedProps } = useChatToggle({
    props: {
      type: "button",
    },
  });

  const open = mergedProps["aria-pressed"] === "true";
  console.log("check", open);

  return (
    <button
      {...mergedProps}
      className={open ? "active-state" : ""}
      title={open ? "Close Chat" : "Open Chat"}
      style={{
        padding: "0",
        height: "44px",
        width: "44px",
      }}
    >
      {open ? <MessageSquareOff size={20} /> : <MessageSquare size={20} />}
    </button>
  );
}
