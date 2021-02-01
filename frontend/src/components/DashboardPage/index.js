import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Example from '../Sidebar';
import Image from 'react-bootstrap/Image';
import { Spinner } from 'react-bootstrap';

import LineGraph from '../LineGraph';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';

function DashboardPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const stock = { name: null, price: 7842.42, change: 51.42, changePercent: 0.0112 };

  useEffect(() => {
    if (sessionUser) {
      console.log('DASHBOARD', sessionUser);
      dispatch(sessionActions.loadUserData(sessionUser));
    }
  }, []);

  if (!sessionUser) {
    return <Redirect to="/" />;
  }

  if (stock) {
    return (
      <Container>
        <Row className="mt-5">
          <Col md={8}>
            <LineGraph stock={stock} />
            <h2 className="mt-5">News</h2>
            <section className="mt-2">
              <a
                style={{ color: 'inherit' }}
                as="div"
                href="https://cloud.iexapis.com/v1/news/article/4644d853-cbb8-4391-82d9-876dc39e25dc"
              >
                <Jumbotron className="pt-2 pl-3 pb-2 pr-2">
                  <Row>
                    <Col>
                      <h6>City AM</h6>
                      <h5>EU watchdog wants Apple to pay €13b in back taxes after all</h5>
                      <p>
                        U competition enforcers are filing to overturn a verdict which they claim
                        was a legal mistake when it abandoned an The post EU watchdog wants Apple to
                        pay €13b in back taxes after all appeared first on CityAM .
                      </p>
                    </Col>
                    <Col>
                      <Image
                        src="https://cloud.iexapis.com/v1/news/image/4644d853-cbb8-4391-82d9-876dc39e25dc"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          overflow: 'hidden',
                        }}
                      ></Image>
                    </Col>
                  </Row>
                </Jumbotron>
              </a>
            </section>
          </Col>
          <Col>
            <Example />
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default DashboardPage;
