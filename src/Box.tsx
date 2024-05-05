import React, { useEffect, useRef } from 'react';
import SmallBox from './SmallBox';
const data = ['One', 'Two', 'Three'];
const Box = () => {
  function getPos(e) {
    const x = e.clientX;
    const y = e.clientY;
    const cursor = 'Your Mouse Position Is : ' + x + ' and ' + y;
    document.getElementById('displayArea').innerHTML = cursor;
  }

  function stopTracking() {
    document.getElementById('displayArea').innerHTML = '';
  }
  return (
    <>
      <div
        className={'box'}
        id="focusArea"
        onMouseMove={getPos}
        onMouseOut={stopTracking}
      >
        {data.map((text, i) => {
          return <SmallBox key={i} text={text} />;
        })}
      </div>
      <p id="displayArea"></p>
    </>
  );
};
export default Box;
