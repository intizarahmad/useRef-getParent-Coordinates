import React, { useEffect, useRef, useState } from 'react';
const OverLay = ({ text }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  useEffect(() => {
    const self = ref.current.getBoundingClientRect();
    const parent = ref.current.parentElement.getBoundingClientRect();
    console.log({ self });
    console.log({ parent });
    setPosition({ top: parent.top + parent.height, left: parent.left });
  }, []);
  return (
    <div
      className={'overlay'}
      ref={ref}
      style={{
        position: 'fixed',
        top: position.top,
        left: position.left,
      }}
    >
      {text}
    </div>
  );
};
export default OverLay;
