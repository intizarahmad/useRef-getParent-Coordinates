import React, { useEffect, useRef, useState } from 'react';
import OverLay from './Overlay';
const SmallBox = ({ text }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={'small-box'}>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Click me
      </button>
      {show && <OverLay text={text}></OverLay>}
    </div>
  );
};

export default SmallBox;
