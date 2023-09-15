import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function ButtonsCompo() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  return (
    <>
      <div className="d-flex justify-content-center">
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="d-flex justify-content-center">
        <Button variant="outline-primary">Primary</Button>{" "}
        <Button variant="outline-secondary">Secondary</Button>{" "}
        <Button variant="outline-success">Success</Button>{" "}
        <Button variant="outline-warning">Warning</Button>{" "}
        <Button variant="outline-danger">Danger</Button>{" "}
        <Button variant="outline-info">Info</Button>{" "}
        <Button variant="outline-light">Light</Button>{" "}
        <Button variant="outline-dark">Dark</Button>
      </div>
      <h5 className="text-center text-info">Active and disabled button</h5>
      <div className="d-flex justify-content-center">
        <Button variant="primary" size="lg" disabled>
          Primary button
        </Button>{" "}
        <Button variant="secondary" size="lg" active>
          Button
        </Button>{" "}
        <Button href="#" variant="secondary" size="lg" disabled>
          Link
        </Button>
      </div>
      <h5 className="text-center text-info">Loading button</h5>
      <div className="d-flex justify-content-center">
        <Button
          variant="primary"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        >
          {isLoading ? "Loading…" : "Click to load"}
        </Button>
      </div>
    </>
  );
}
