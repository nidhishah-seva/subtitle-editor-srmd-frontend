import React, { useState } from "react";
import WebVTT from "node-webvtt";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "./SubtitleCreator.css";
import moment from "moment";

function SubtitleCreator() {
  const [subtitles, setSubtitles] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [subtitleText, setSubtitleText] = useState("");

  const handleSubtitleTextChange = (event) => {
    setSubtitleText(event.target.value);
  };

  const convertToSeconds = (timeString) => {
    const timeParts = timeString.split(":");
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    const secs = parseInt(timeParts[2], 10);

    return hours * 3600 + minutes * 60 + secs;
  };

  const convertSecondsToTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    return formattedTime;
  };

  const handleAddSubtitle = () => {
    const newSubtitle = {
      startTime: convertToSeconds(startTime),
      endTime: convertToSeconds(endTime),
      text: subtitleText,
    };
    setSubtitles([...subtitles, newSubtitle]);
    setStartTime(endTime);
    setSubtitleText("");
  };

  const handleGenerateSubtitleFile = () => {
    const parsedSubtitle = {
      cues: [],
      valid: true,
    };

    subtitles.forEach((subtitle, index) => {
      const cue = {
        identifier: (index + 1).toString(),
        start: subtitle.startTime,
        end: subtitle.endTime,
        text: subtitle.text,
        styles: "",
      };
      parsedSubtitle.cues.push(cue);
    });

    const modifiedSubtitleContent = WebVTT.compile(parsedSubtitle);
    const modifiedSubtitleBlob = new Blob([modifiedSubtitleContent], {
      type: "text/vtt",
    });
    const downloadLink = URL.createObjectURL(modifiedSubtitleBlob);
    const a = document.createElement("a");
    a.href = downloadLink;
    a.download = "subtitles.vtt";
    a.click();
  };

  const handleStartTimeChange = (selectedTime) => {
    const formattedTime = moment(selectedTime).format("HH:mm:ss");
    setStartTime(formattedTime);
  };

  const handleEndTimeChange = (selectedTime) => {
    const formattedTime = moment(selectedTime).format("HH:mm:ss");
    setEndTime(formattedTime);
  };

  return (
    <div className="container">
      <h1>Subtitle Creator</h1>
      <div className="subtitle-input">
        <div className="time-input">
          <label>Start Time:</label>
          <DateTime
            value={startTime}
            onChange={handleStartTimeChange}
            dateFormat={false}
            timeFormat="HH:mm:ss"
          />
        </div>
        <div className="time-input">
          <label>End Time:</label>
          <DateTime
            value={endTime}
            onChange={handleEndTimeChange}
            dateFormat={false}
            timeFormat="HH:mm:ss"
          />
        </div>
        <label>Subtitles:</label>
        <textarea
          rows={4}
          cols={30}
          placeholder="Subtitle text"
          value={subtitleText}
          onChange={handleSubtitleTextChange}
        />
        <button onClick={handleAddSubtitle}>Add Subtitle</button>
      </div>
      <div className="subtitle-list">
        <h2>Subtitles:</h2>
        {subtitles.map((subtitle, index) => (
          <div className="subtitle-item" key={index}>
            <p>
              [{convertSecondsToTime(subtitle.startTime)} -{" "}
              {convertSecondsToTime(subtitle.endTime)}]: {subtitle.text}
            </p>
          </div>
        ))}
      </div>
      {subtitles.length > 0 && (
        <div className="generate-button">
          <button onClick={handleGenerateSubtitleFile}>
            Generate Subtitle File
          </button>
        </div>
      )}
    </div>
  );
}

export default SubtitleCreator;

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
