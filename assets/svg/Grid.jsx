import * as React from "react";
import Svg, { Rect } from "react-native-svg";
const Grid = (props) => (
  <Svg    
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#212121"
    strokeLinecap="round"
    strokeLinejoin="round"
    class="feather feather-Grid"
    {...props}
  >
    <Rect x="3" y="3" width="7" height="7"></Rect>
    <Rect x="14" y="3" width="7" height="7"></Rect>
    <Rect x="14" y="14" width="7" height="7"></Rect>
    <Rect x="3" y="14" width="7" height="7"></Rect>
  </Svg>
);
export default Grid;
