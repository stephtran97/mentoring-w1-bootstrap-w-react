import { Figure } from "react-bootstrap";

export default function FiguresCompo() {
  return (
    <div className="d-flex justify-content-center">
      <Figure className="d-flex flex-column align-items-center">
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={require("../example-components/img/1.jpeg")}
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
    </div>
  );
}
