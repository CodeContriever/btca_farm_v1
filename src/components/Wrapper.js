import React from 'react';

const Wrapper = ({ children, style, ...props }) => {
  const wrapperStyle = {
    boxSizing: "border-box",
    ...style,
  };

  return(
  <div style={wrapperStyle} {...props}>
        {children}
    </div>
  );
};

export default Wrapper;
