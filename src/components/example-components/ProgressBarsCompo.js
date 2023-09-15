import { ProgressBar } from "react-bootstrap";

export default function ProgressBarsCompo() {
  const now = 80;
  return (
    <>
      <ProgressBar now={now} label={`${now}%`} />
      <ProgressBar variant="success" now={40} animated />
      <ProgressBar>
        <ProgressBar variant="info" now={20} striped />
        <ProgressBar variant="warning" now={60} animated />
        <ProgressBar variant="danger" now={80} striped />
      </ProgressBar>
    </>
  );
}
