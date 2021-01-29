import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { useContext } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function CustomToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);
  const decoratedOnClick = useAccordionToggle(eventKey, () => callback && callback(eventKey));
  const isCurrentEventKey = currentEventKey === eventKey;
  return (
    // <button
    //   type="button"
    // style={{ backgroundColor: isCurrentEventKey ? 'orange' : 'pink' }}
    // onClick={decoratedOnClick}
    // >
    // </button>
    <Accordion.Toggle
      as={Button}
      variant="link"
      eventKey="0"
      style={{ backgroundColor: isCurrentEventKey ? 'lightblue' : 'white' }}
      onClick={decoratedOnClick}
    >
      {children}
    </Accordion.Toggle>
  );
}
export default function Example() {
  return (
    <>
      <Accordion border="none">
        <Card>
          <Card.Header>
            <CustomToggle eventKey="0">My Stocks</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>body 1</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <CustomToggle eventKey="1">Lists</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>body 2</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
}
