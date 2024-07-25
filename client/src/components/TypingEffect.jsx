import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypingEffect = () => {
  return (
    <ReactTypingEffect
      text={['DevDiary', 'DevNotes']}
      speed={100}
      eraseSpeed={50}
      eraseDelay={1500}
      typingDelay={500}
    />
  );
};

export default TypingEffect;
