import * as React from "react";

let rotateAngle = 0;

const SIZE = 34;
const PREFIX = "donut";

const halfSize = SIZE / 2;
const circleProps = {
  cx: halfSize,
  cy: halfSize,
  r: halfSize - 1,
};

const getClassName = (p, c) => `${p}${c}`;
const renderProgress = (progress) => <strong>{progress}</strong>;

const Donut = ({
  progress = 0,
  onRender = renderProgress,
  prefix = PREFIX,
  number,
  title,
}) => (
  <div className={getClassName(prefix, progress < 0 ? " is--negative" : "")}>
    <svg
      className={getClassName(prefix, "__canvas")}
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className={getClassName(prefix, "__frame")} {...circleProps} />

      <circle
        className={getClassName(prefix, "__circle")}
        strokeDasharray={`${Math.abs(progress)} 100`}
        {...circleProps}
      />

      <linearGradient id="gradient-2">
        <stop offset="0" stopColor="#954ce9" />
        <stop offset="0.3" stopColor="#954ce9" />
        <stop offset="0.6" stopColor="#24c1ed" />
        <stop offset="1" stopColor="#24c1ed" />
      </linearGradient>
    </svg>

    {typeof onRender === "function" && (
      <div className={getClassName(prefix, "__content")}>
        <div className={getClassName(prefix, "__text")}>{onRender(number)}</div>
        <div className={getClassName(prefix, "__name")}>{title}</div>
      </div>
    )}
  </div>
);

export const Donuts = (props) => (
  <React.Fragment>
    <Donut
      progress={100}
      onRender={renderProgress}
      number={props.number}
      title={props.title}
    />
  </React.Fragment>
);
