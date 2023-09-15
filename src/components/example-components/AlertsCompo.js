import { Alert, Button } from "react-bootstrap";
import { useState } from "react";

export default function AlertsCompo() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <>
        {[
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ].map((variant) => (
          <Alert
            key={variant}
            variant={variant}
            onClose={() => setShow(false)}
            dismissible
          >
            This is a {variant} alert with
            <Alert.Link href="#"> an example link</Alert.Link> — check it out!
          </Alert>
        ))}
      </>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
