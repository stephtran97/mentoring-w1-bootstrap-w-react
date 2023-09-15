import "./ExampleCarouselImage.css";
export default function ExampleCarouselImage({ text }) {
  return (
    <>
      <div className="carousel-image d-flex justify-content-center">
        <img src={require("../example-components/img/1.jpeg")} />
        <p>{text}</p>
      </div>
    </>
  );
}
