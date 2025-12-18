import {
  FocusLayout,
  LayoutContextProvider,
  type TrackReferenceOrPlaceholder,
} from "@livekit/components-react";
import React from "react";

const FocusLayoutContainerInner = ({
  trackRef,
}: {
  trackRef: TrackReferenceOrPlaceholder;
}) => {
  console.log("track ref", trackRef);
  return <FocusLayout trackRef={trackRef} />;
};

export default FocusLayoutContainerInner;
