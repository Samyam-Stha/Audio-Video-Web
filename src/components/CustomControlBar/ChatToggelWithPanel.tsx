import { useChatToggle } from "@livekit/components-react";
import MessageIcon from "@mui/icons-material/Message";
import CommentsDisabledIcon from "@mui/icons-material/CommentsDisabled";

export default function ChatToggleWithPanel() {
  const { mergedProps } = useChatToggle({
    props: {
      className: "rounded border",
      type: "button",
    },
  });

  const open = mergedProps["aria-pressed"] === "true";
  console.log("check", open);

  return (
    <button {...mergedProps} style={{ padding: "10px", height: "45px" }}>
      {open ? <CommentsDisabledIcon /> : <MessageIcon />}
    </button>
  );
}
