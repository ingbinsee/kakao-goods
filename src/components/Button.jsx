import { string } from "prop-types";

function Button({type, text, className, ...restProps}) {
  return (
    <button type={type} className={className} {...restProps}>
      {text}
    </button>
  );
}

Button.propTypes = {
  type: string,
  text: string,
  className: string,
};

export default Button;
