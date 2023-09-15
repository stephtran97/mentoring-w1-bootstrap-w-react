import { Button } from "react-bootstrap";
import ExampleColor from "./ExampleColor";
import ExampleLayout from "./ExampleLayout";
import ExampleForms from "./ExampleForms";
import ExampleComponents from "./ExampleComponents";
import ExampleUtilities from "./ExampleUtilities";

export default function Examples() {
  return (
    <>
      <div>
        <h3 className="text-danger my-3">I. React bootstrap introduction</h3>
        <Button>Button component</Button>
        <Button as="a" style={{ display: "block" }}>
          Component has style of Button but the finally rendered tag is an
          anchor using "as" prop
        </Button>
        <h5 className="text-center text-primary">Example about Color Modes</h5>
        <ExampleColor></ExampleColor>
      </div>
      <div>
        <h3 className="text-danger my-3">II. React bootstrap layout</h3>
        <ExampleLayout></ExampleLayout>
      </div>
      <div>
        <h3 className="text-danger my-3">III. React bootstrap forms</h3>
        <ExampleForms></ExampleForms>
      </div>
      <div>
        <h3 className="text-danger my-3">IV. React bootstrap components</h3>
        <ExampleComponents></ExampleComponents>
      </div>
      <div>
        <h3 className="text-danger my-3">V. React bootstrap utilities</h3>
        <ExampleUtilities></ExampleUtilities>
      </div>
    </>
  );
}
