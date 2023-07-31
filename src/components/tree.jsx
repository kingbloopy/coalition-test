
import * as React from "react"
const Tree = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50px"
    height="50px"
    viewBox="0 0 210 297"
    {...props}
  >
    <defs>
      <linearGradient id="a">
        <stop offset={0} stopColor="#4d4d4d" />
        <stop offset={1} stopColor="#1f1f1f" />
      </linearGradient>
      <linearGradient id="b">
        <stop offset={0} stopColor="#ff2a2a" />
        <stop offset={1} stopColor="#a42727" />
      </linearGradient>
      <linearGradient id="c">
        <stop offset={0} stopColor="#fff" />
        <stop offset={1} stopColor="#b7fdff" />
      </linearGradient>
    </defs>
    <path
      d="m1206.358 288.784 102.823 170.93 96.444-163.348-56.854.017 81.743-147.468-56.51 8.75 90.998-134.712-136.526 31.526 15.848-99.006-72.077-.234 10.303 98.825-133.11-49.505 108.693 153.22-87.915-11.9 93.58 158.167z"
      style={{
        fill: "#163835",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
        strokeWidth: 5.68120432,
      }}
      transform="matrix(.35278 0 0 -.35278 -356.159 221.693)"
    />
  </svg>
);

export default Tree;