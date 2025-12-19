import { Chat, useChatToggle } from "@livekit/components-react";

export default function ChatPanel() {
  const { mergedProps } = useChatToggle({
    props: {
      className: " rounded border",
      type: "button",
    },
  });
  const open = mergedProps["aria-pressed"] === "true";

  if (!open) return null;

  return (
    <div
      style={{
        borderLeft: "1px solid #2a2a2a",
        height: "90%",
        overflow: "hidden",
      }}
    >
      <Chat style={{ height: "85vh", width: "100%", overflow: "scroll" }} />
    </div>
  );
}
