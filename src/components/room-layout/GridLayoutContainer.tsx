import {
  // GridLayout,
  useTracks,
  // FocusLayoutContainer,
  // TrackRefContext,
  FocusLayoutContainer,
  TrackRefContext,
  TrackLoop,
} from "@livekit/components-react";
import "./Grid.css";
import FocusLayoutContainerInner from "./FocusLayoutContainerInner";
import { Track } from "livekit-client";
const GridLayoutContainer = () => {
  const tracks = useTracks([Track.Source.Camera, Track.Source.ScreenShare], {
    onlySubscribed: false,
  });

  const localTracks = tracks.filter((tr) => tr.participant.isLocal);
  console.log("Local Tracks", localTracks);

  const RemoteTracks = tracks.filter((tr) => !tr.participant.isLocal);
  console.log("Remote Trakcs", RemoteTracks);

  // return (
  //   <>

  //     <div>
  //       <GridLayout tracks={tracks} style={{ height: "90vh" }}>
  //         {/* Main video area */}
  //         {/* <div className="flex-1">
  //              <Stage />
  //              </div> */}
  //         <ParticipantTile />
  //         {/* Controls */}
  //       </GridLayout>
  //     </div>
  //   </>
  // );

  // console.log(trackRefs);
  return (
    <FocusLayoutContainer className="!md:flex !md:flex-row ">
      <div className="w-full md:order-2 ">
        <TrackLoop tracks={localTracks}>
          <TrackRefContext.Consumer>
            {(trackRef) =>
              trackRef && <FocusLayoutContainerInner trackRef={trackRef} />
            }
          </TrackRefContext.Consumer>
        </TrackLoop>
      </div>
      <div className="flex gap-10 flex-wrap remotevideo scroll-smooth overflow-auto p-3 md:order-1  md:gap-5  md:w-[30%] md:justify-center md:items-start">
        <TrackLoop tracks={RemoteTracks}>
          <TrackRefContext.Consumer>
            {(trackRef) =>
              trackRef && <FocusLayoutContainerInner trackRef={trackRef} />
            }
          </TrackRefContext.Consumer>
        </TrackLoop>

        {/* <GridLayout tracks={RemoteTracks} className="">
          <ParticipantTile />
        </GridLayout> */}
      </div>

      {/* <ParticipantTile>
        <FocusToggle />
      </ParticipantTile>

      <CarouselLayout tracks={tracks}>
        <ParticipantTile></ParticipantTile>
      </CarouselLayout> */}

      {/* <TrackLoop tracks={RemoteTracks}>
        <ParticipantTile />
      </TrackLoop> */}
    </FocusLayoutContainer>

    // <div className="flex w-full justify-around ">
    //   <div className="flex w-[500x] flex-col overflow-hidden gap-5">
    //     <TrackLoop tracks={RemoteTracks}>
    //       <ParticipantTile />
    //     </TrackLoop>
    //   </div>
    //   <div className="">
    //     <TrackLoop tracks={localTracks}>
    //       <ParticipantTile />
    //     </TrackLoop>
    //   </div>
    // </div>
  );
};

export default GridLayoutContainer;
