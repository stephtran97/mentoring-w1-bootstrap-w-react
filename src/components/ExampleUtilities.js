import TransitionCollapse from "./example-utilities/TransitionCollapse";
import TransitionFade from "./example-utilities/TransitionFade";
import TransitionHorizontal from "./example-utilities/TransitionHorizontal";

import Ratio from "react-bootstrap/Ratio";

export default function ExampleUtilities() {
  return (
    <>
      <h6 className="text-center text-info">Transitions Collapse</h6>
      <TransitionCollapse></TransitionCollapse>
      <h6 className="text-center text-info">Transitions Horizontal</h6>
      <TransitionHorizontal></TransitionHorizontal>
      <h6 className="text-center text-info">Transitions Fade</h6>
      <TransitionFade></TransitionFade>
      <h6 className="text-center text-info">Ratio</h6>
      <div style={{ width: 330, height: "auto" }}>
        <Ratio aspectRatio={1 / 2} className="d-flex justify-content-center">
          <img src={require("./example-components/img/1.jpeg")} />
        </Ratio>
      </div>
    </>
  );
}
