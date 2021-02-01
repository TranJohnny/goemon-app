import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StockRow from '../StockRow';
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
  const session = useSelector((state) => state.session);
  let watchlists;
  if (session.userStocks) {
    watchlists = session.userStocks.data;
  } else {
    watchlists = [{ id: 1, name: 'Failed To Load' }];
  }
  useEffect(() => {
    console.log('WATCHLISTS', watchlists[0]);
  }, []);

  return (
    <>
      <Accordion border="none">
        <Card>
          <Card.Header>
            <CustomToggle eventKey="a">My Stocks</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="a">
            <Card.Body>Stock Transactions Coming Soon</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>Lists</Card.Header>
        </Card>
        {watchlists &&
          watchlists.map((watchlist) => {
            let stocks;
            if (watchlist.Stocks) {
              stocks = watchlist.Stocks;
            } else {
              stocks = [{ ticker: '???' }];
            }
            return (
              <Card>
                <Card.Header>
                  <CustomToggle eventKey={watchlist.id}>{watchlist.name}</CustomToggle>
                </Card.Header>
                {stocks.map((stock) => {
                  return (
                    <Accordion.Collapse eventKey={watchlist.id}>
                      <Card.Body>
                        <StockRow stock={stock} />
                      </Card.Body>
                    </Accordion.Collapse>
                  );
                })}
              </Card>
            );
          })}
      </Accordion>
    </>
  );
}
