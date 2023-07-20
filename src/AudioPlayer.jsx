import React, { useRef } from "react";
import { styled } from "styled-components";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);

  const handlePlay = (event) => {
    event.preventDefault();
    audioRef.current.play();
  };

  const handlePause = (event) => {
    event.preventDefault();
    audioRef.current.pause();
  };

  return (
    <div>
      <audio ref={audioRef} src={src} controls autoPlay />
      <StyledForm>
        <StyledButton onClick={handlePlay}>Play ▶</StyledButton>
        <StyledButton onClick={handlePause}>Pause ❙❙</StyledButton>
      </StyledForm>
    </div>
  );
};

const StyledButton = styled("button")`
  width: 135px;
  height: 50px;
  background-color: rgb(4, 4, 196);
  color: white;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 550;
  border: none;
`;

const StyledForm = styled("form")`
  display: flex;
  gap: 20px;
`;

export default AudioPlayer;
