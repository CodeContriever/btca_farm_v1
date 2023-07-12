import React from 'react';


const Container = ({ children, style, ...props }) => {
  const containerStyle = {
    boxSizing: "border-box",
    ...style, // Merge provided styles with default styles
  };

  return(
  <div style={containerStyle} {...props}>
        {children}
    </div>
  );
};

export default Container;
