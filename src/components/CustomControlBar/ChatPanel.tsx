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
    <div className="md:border- w-[35%]  ">
      <Chat />
    </div>
  );
}
