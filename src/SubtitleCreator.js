import React, { useState, useRef } from "react";
import "react-datetime/css/react-datetime.css";
import "./SubtitleCreator.css";
import Timeline from "react-subtitle-editor";
import subtitles from "../src/subtitles.json";
import satsang from "../src/satsang.mp4";
import ReactPlayer from "react-player";
import { Box } from "@mui/material";
import videosubtitles from "../src/subs/dummySRTFile.srt";
import videosubtitlesVTT from "../src/subs/dummyVTTFile.vtt";

function SubtitleCreator() {
  const data = subtitles;
  const mediaRef = useRef();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // margin: "1%",
          backgroundColor: "#1C2938",
        }}
      >
        <div style={{ width: "100%", overflow: "scroll", height: "700px" }}>
          {subtitles.map((e) => {
            return (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "1%",
                    width: "90%",

                    margin: "1%",
                    bgcolor: "#2C3D50",
                    color: "white",
                    border: "1px solid",
                    borderColor: "#2C3D50",
                    p: 1,
                    borderRadius: 2,
                    fontSize: "0.875rem",
                    fontWeight: "700",
                  }}
                >
                  <div>
                    {new Date(e.begin * 1000).toISOString().slice(12, 23)}
                    <br></br>
                    {new Date(e.end * 1000).toISOString().slice(12, 23)}
                  </div>
                  <textarea
                    style={{
                      marginLeft: "auto",
                      width: "80%",
                      resize: "none",
                      borderRadius: "5px",
                      paddingLeft: "2%",
                      backgroundColor: "#2C3D50",
                      borderColor: "#34475B",
                      color: "white",
                    }}
                  >
                    {e.text}
                  </textarea>
                </Box>
              </>
            );
          })}
        </div>

        {/* <ReactPlayer playing controls url={RazorVideo} 
        config={{ file: {

tracks: [
    {kind: 'subtitles', src: vtt, srcLang: 'English', default: true,color:'orange'},
]
}}}
onReady={() => console.log('ready')}
onStart={() => console.log('onStart')}
onPause={() => console.log('onPause')}
onEnded={() => console.log('onEnded')}
onError={() => console.log('onError')}
onPlay={() => {console.log('onPlay')}}

/> */}

        <div style={{ margin: "0" }}>
          <ReactPlayer
            config={{
              file: {
                tracks: [
                  {
                    kind: "subtitles",
                    src: videosubtitlesVTT,
                    srcLang: "English",
                    default: true,
                    // color: "orange",
                  },
                ],
              },
            }}
            // config={{
            //   file: {
            //     attributes: { crossOrigin: "anonymous" },
            //     tracks: [
            //       {
            //         kind: "subtitles",
            //         src: videosubtitlesVTT,
            //         srcLang: "en",
            //         default: true,
            //         label: "eng",
            //       },
            //     ],
            //   },
            // }}
            onSeek={(e) => {
              console.log("SEEK", e);

              console.log(mediaRef.current);
            }}
            onPlay={(e) => {
              console.log("PLAYYYY");
              mediaRef.current.play();
            }}
            onProgress={(e) => {
              console.log(e);
            }}
            onPause={(e) => {
              console.log("PAUSEEE");
              mediaRef.current.pause();
            }}
            url={satsang}
            playing={true}
            width="90%"
            height="600px"
            controls={true}
          />
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          padding: "1%",
          backgroundColor: "#2C3D50",
        }}
      >
        <Timeline
          autoScroll
          changeAreaShow={(start, end) => {
            // console.log("SE", start, end);
          }}
          changeZoomLevel={(zoomLevel) => {
            // console.log("zoomLevel", zoomLevel);
          }}
          changeShift={(shift) => {
            // console.log("shift", shift);
          }}
          setAligns={(alignments) => {
            console.log("setAligns", alignments);
          }}
          audioRef={mediaRef}
          src={satsang}
          data={data}
          colors={{
            background: "transparent",
            box: "#c2c9d6",
            boxHover: "#80add6",
            selectedBox: "#1890ff",
            playingBox: "#f0523f",
            text: "#212b33",
            selectedText: "white",
            tooltipBackground: "#474e54",
            tooltipText: "white",
            scrollBarBackground: "#f1f3f9",
            scrollBar: "#c2c9d6",
            scrollBarHover: "#5e636e",
          }}
        />
      </div>
    </>
  );
}

export default SubtitleCreator;
