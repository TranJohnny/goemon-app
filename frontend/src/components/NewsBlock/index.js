import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

function NewsBlock() {
  return (
    <section className="mt-2">
      <a
        target="_blank"
        rel="noopener noreferrer"
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
                EU competition enforcers are filing to overturn a verdict which they claim was a
                legal mistake when it abandoned an The post EU watchdog wants Apple to pay €13b in
                back taxes after all appeared first on CityAM .
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
  );
}

export default NewsBlock;
