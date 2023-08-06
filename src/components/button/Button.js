import React from "react";
import PropTypes from "prop-types";

const Button = ({
  type = "button",
  className = "",
  children,
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      type={type}
      className={`flex  min-h-[56px] items-center justify-center p-4 text-white text-base font-semibold rounded-xl ${
        !!isLoading ? "opacity-50 pointer-events-none" : ""
      } ${className}`}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propsTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};
export default Button;
