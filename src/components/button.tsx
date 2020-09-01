import React from "react";
type Button = {
  text?: string;
  onClick?: (e: any | React.MouseEvent<any>) => void;
};
const ButtonStyle = {
  backgroundColor: "#33383e",
  color: "white",
  marginTop: "10px",
  marginLeft: "auto",
  display: "flex",
};
const Button: React.FC<Button> = ({ text, onClick }) => {
  return (
    <button style={ButtonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
