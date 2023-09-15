import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

export default function OverlayCompo() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );
  const Link = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <a href="#">{children}</a>
    </OverlayTrigger>
  );
  return (
    <>
      <h6 className="text-center text-info">OverlayTrigger</h6>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="success">Hover me to see</Button>
      </OverlayTrigger>
      <h6 className="text-center text-info">Tooltips</h6>
      <p>
        Tight pants next level keffiyeh{" "}
        <Link title="Default title" id="t-1">
          you probably
        </Link>{" "}
        haven't heard of them. Farm-to-table seitan, mcsweeney's fixie
        sustainable quinoa 8-bit american apparel{" "}
        <Link id="t-2" title="Another one">
          have a
        </Link>{" "}
        terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo
        thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's
        cleanse vegan chambray. A really ironic artisan{" "}
        <Link title="Another one here too" id="t-3">
          whatever keytar
        </Link>
        , scenester farm-to-table banksy Austin{" "}
        <Link title="The last tip!" id="t-4">
          twitter handle
        </Link>{" "}
        freegan cred raw denim single-origin coffee viral.
      </p>
    </>
  );
}
