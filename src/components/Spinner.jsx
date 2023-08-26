import {number, string} from 'prop-types';

function Spinner({size = 200, className, ...restProps}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      {...restProps}
    >
      <g transform="translate(20 50)">
        <circle cx="0" cy="0" r="6" fill="#e15b64">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.375s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
      </g>
      <g transform="translate(40 50)">
        <circle cx="0" cy="0" r="6" fill="#f8b26a">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.25s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
      </g>
      <g transform="translate(60 50)">
        <circle cx="0" cy="0" r="6" fill="#abbd81">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.125s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
      </g>
      <g transform="translate(80 50)">
        <circle cx="0" cy="0" r="6" fill="#81a3bd">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="0s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
      </g>
    </svg>
  );
}

Spinner.propTypes = {
  size: number,
  className: string,
};

export default Spinner;
