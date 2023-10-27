import React, { useState, useRef } from "react";

import "react-datetime/css/react-datetime.css";
import "./SubtitleCreator.css";

import Timeline from "react-subtitle-editor";
import audio from "../src/audio.mp3";
import subtitles from "../src/subtitles.json";
import satsang from "../src/satsang.mp4";
import ReactPlayer from "react-player";
import { Box } from "@mui/material";
// import { styled } from "@mui/material/styles";

function SubtitleCreator() {
  const data = subtitles;
  const audioRef = useRef(null);
  const setAligns = () => {};
  const changeAreaShow = () => {};
  const changeShift = () => {};
  const changeZoomLevel = () => {};

  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
  };
  const handlePauseVideo = () => {
    vidRef.current.pause();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "1%",
        }}
      >
        <div style={{ width: "100%", overflow: "scroll" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "1%",
              width: "90%",
              // display: "grid",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "grey.100",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              p: 1,
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            <div>
              0:00:04.880
              <br></br>
              0:00:08.240
            </div>
            <textarea
              style={{
                marginLeft: "auto",
                width: "80%",
                resize: "none",
                borderRadius: "5px",
                paddingLeft: "2%",
              }}
            >
              Subtitle 1
            </textarea>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "1%",
              width: "90%",
              // display: "grid",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "grey.100",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              p: 1,
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            <div>
              0:00:11.230
              <br></br>
              0:00:13.720
            </div>
            <textarea
              style={{
                marginLeft: "auto",
                width: "80%",
                resize: "none",
                borderRadius: "5px",
                paddingLeft: "2%",
              }}
            >
              Subtitle 2
            </textarea>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "1%",
              width: "90%",
              // display: "grid",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "grey.100",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              p: 1,
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            <div>
              0:00:14.330
              <br></br>
              0:00:16.230
            </div>
            <textarea
              style={{
                marginLeft: "auto",
                width: "80%",
                resize: "none",
                borderRadius: "5px",
                paddingLeft: "2%",
              }}
            >
              Subtitle 3
            </textarea>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "1%",
              width: "90%",
              // display: "grid",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "grey.100",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              p: 1,
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            <div>
              0:00:16.870
              <br></br>
              0:00:20.810
            </div>
            <textarea
              style={{
                marginLeft: "auto",
                width: "80%",
                resize: "none",
                borderRadius: "5px",
                paddingLeft: "2%",
              }}
            >
              Subtitle 4
            </textarea>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "1%",
              width: "90%",
              // display: "grid",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "grey.100",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              p: 1,
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            <div>
              0:00:21.350
              <br></br>
              0:00:24.130
            </div>
            <textarea
              style={{
                marginLeft: "auto",
                width: "80%",
                resize: "none",
                borderRadius: "5px",
                paddingLeft: "2%",
              }}
            >
              Subtitle 5
            </textarea>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "1%",
              width: "90%",
              // display: "grid",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "grey.100",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              p: 1,
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            <div>
              0:00:24.670
              <br></br>
              0:00:25.970
            </div>
            <textarea
              style={{
                marginLeft: "auto",
                width: "80%",
                resize: "none",
                borderRadius: "5px",
                paddingLeft: "2%",
              }}
            >
              Subtitle 6
            </textarea>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "1%",
              width: "90%",
              // display: "grid",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "grey.100",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              p: 1,
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            <div>
              0:00:25.970
              <br></br>
              0:00:32.930
            </div>
            <textarea
              style={{
                marginLeft: "auto",
                width: "80%",
                resize: "none",
                borderRadius: "5px",
                paddingLeft: "2%",
              }}
            >
              Subtitle 7
            </textarea>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "1%",
              width: "90%",
              // display: "grid",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "grey.100",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              p: 1,
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            <div>
              0:00:34.830
              <br></br>
              0:00:35.510
            </div>
            <textarea
              style={{
                marginLeft: "auto",
                width: "80%",
                resize: "none",
                borderRadius: "5px",
                paddingLeft: "2%",
              }}
            >
              Subtitle 8
            </textarea>
          </Box>
        </div>

        <video ref={vidRef} controls style={{ width: "50%", height: "360px" }}>
          <source src={satsang} type='video/webm;codecs="vp8, vorbis"' />
        </video>
        {/* <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" /> */}
      </div>
      <Timeline
        changeAreaShow={changeAreaShow}
        changeZoomLevel={changeZoomLevel}
        changeShift={changeShift}
        setAligns={setAligns}
        audioRef={audioRef}
        src={audio}
        autoScroll
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
      <div style={{ marginTop: "100px" }}>
        <button
          onClick={() => {
            audioRef.current.play();
            handlePlayVideo();
          }}
        >
          play
        </button>

        <button
          onClick={() => {
            audioRef.current.pause();
            handlePauseVideo();
          }}
        >
          pause
        </button>
      </div>
    </>
  );
}

export default SubtitleCreator;

// import React, { useState } from "react";
// import WebVTT from "node-webvtt";
// import DateTime from "react-datetime";
// import "react-datetime/css/react-datetime.css";
// import "./SubtitleCreator.css";
// import moment from "moment";

// function SubtitleCreator() {
//   const [subtitles, setSubtitles] = useState([]);
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [subtitleText, setSubtitleText] = useState("");

//   const handleSubtitleTextChange = (event) => {
//     setSubtitleText(event.target.value);
//   };

//   const convertToSeconds = (timeString) => {
//     const timeParts = timeString.split(":");
//     const hours = parseInt(timeParts[0], 10);
//     const minutes = parseInt(timeParts[1], 10);
//     const secs = parseInt(timeParts[2], 10);

//     return hours * 3600 + minutes * 60 + secs;
//   };

//   const convertSecondsToTime = (totalSeconds) => {
//     const hours = Math.floor(totalSeconds / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;

//     const formattedTime = `${String(hours).padStart(2, "0")}:${String(
//       minutes
//     ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
//     return formattedTime;
//   };

//   const handleAddSubtitle = () => {
//     const newSubtitle = {
//       startTime: convertToSeconds(startTime),
//       endTime: convertToSeconds(endTime),
//       text: subtitleText,
//     };
//     setSubtitles([...subtitles, newSubtitle]);
//     setStartTime(endTime);
//     setSubtitleText("");
//   };

//   const handleGenerateSubtitleFile = () => {
//     const parsedSubtitle = {
//       cues: [],
//       valid: true,
//     };

//     subtitles.forEach((subtitle, index) => {
//       const cue = {
//         identifier: (index + 1).toString(),
//         start: subtitle.startTime,
//         end: subtitle.endTime,
//         text: subtitle.text,
//         styles: "",
//       };
//       parsedSubtitle.cues.push(cue);
//     });

//     const modifiedSubtitleContent = WebVTT.compile(parsedSubtitle);
//     const modifiedSubtitleBlob = new Blob([modifiedSubtitleContent], {
//       type: "text/vtt",
//     });
//     const downloadLink = URL.createObjectURL(modifiedSubtitleBlob);
//     const a = document.createElement("a");
//     a.href = downloadLink;
//     a.download = "subtitles.vtt";
//     a.click();
//   };

//   const handleStartTimeChange = (selectedTime) => {
//     const formattedTime = moment(selectedTime).format("HH:mm:ss");
//     setStartTime(formattedTime);
//   };

//   const handleEndTimeChange = (selectedTime) => {
//     const formattedTime = moment(selectedTime).format("HH:mm:ss");
//     setEndTime(formattedTime);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         margin: "1%",
//       }}
//     >
//       <div>hi</div>
//       <video
//         controls
//         style={{ width: "50%", height: "360px" }}
//         poster="https://www.html5rocks.com/en/tutorials/video/basics/poster.png"
//       >
//         <source
//           src="https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm"
//           type='video/webm;codecs="vp8, vorbis"'
//         />
//         <source
//           src="https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4"
//           type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
//         />
//         <track
//           src="https://www.html5rocks.com/en/tutorials/video/basics/devstories-en.vtt"
//           label="English subtitles"
//           kind="subtitles"
//           srclang="en"
//           default
//         ></track>
//       </video>
//     </div>
//     // <div className="container">
//     //   <h1>Subtitle Creator</h1>
//     //   <div className="subtitle-input">
//     //     <div className="time-input">
//     //       <label>Start Time:</label>
//     //       <DateTime
//     //         value={startTime}
//     //         onChange={handleStartTimeChange}
//     //         dateFormat={false}
//     //         timeFormat="HH:mm:ss"
//     //       />
//     //     </div>
//     //     <div className="time-input">
//     //       <label>End Time:</label>
//     //       <DateTime
//     //         value={endTime}
//     //         onChange={handleEndTimeChange}
//     //         dateFormat={false}
//     //         timeFormat="HH:mm:ss"
//     //       />
//     //     </div>
//     //     <label>Subtitles:</label>
//     //     <textarea
//     //       rows={4}
//     //       cols={30}
//     //       placeholder="Subtitle text"
//     //       value={subtitleText}
//     //       onChange={handleSubtitleTextChange}
//     //     />
//     //     <button onClick={handleAddSubtitle}>Add Subtitle</button>
//     //   </div>
//     //   <div className="subtitle-list">
//     //     <h2>Subtitles:</h2>
//     //     {subtitles.map((subtitle, index) => (
//     //       <div className="subtitle-item" key={index}>
//     //         <p>
//     //           [{convertSecondsToTime(subtitle.startTime)} -{" "}
//     //           {convertSecondsToTime(subtitle.endTime)}]: {subtitle.text}
//     //         </p>
//     //       </div>
//     //     ))}
//     //   </div>
//     //   {subtitles.length > 0 && (
//     //     <div className="generate-button">
//     //       <button onClick={handleGenerateSubtitleFile}>
//     //         Generate Subtitle File
//     //       </button>
//     //     </div>
//     //   )}
//     // </div>
//   );
// }

// export default SubtitleCreator;

// import React, { useState, useEffect } from 'react';
// import { parse } from 'srt-parser-3';

// // Parse the SRT file content
// const srtData = parse(srtFileContent);

// const SubtitlePlayer = ({ srtData }) => {
//   const [currentSubtitle, setCurrentSubtitle] = useState(null);

//   useEffect(() => {
//     // Logic to display subtitles here
//     // You can use setTimeout or requestAnimationFrame to handle subtitle timing
//     // Make sure to update `currentSubtitle` when the subtitle changes
//   }, [currentSubtitle]);

//   return (
//     <div className="subtitle-container">
//       {currentSubtitle && <div className="subtitle">{currentSubtitle.text}</div>}
//     </div>
//   );
// };

// export default SubtitlePlayer;
