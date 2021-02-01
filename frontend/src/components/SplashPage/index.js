import { useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function SplashPage() {
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Jumbotron
        style={{ backgroundColor: 'lightblue', minHeight: '600px' }}
        className="border-bottom"
      >
        <h1></h1>
        <h1>Investing for Everyone</h1>
        <p>
          Commission-free investing, plus the tools you need to put your money in motion. Sign up
          and get your first stock for free. Certain limitations apply.
        </p>
        <p>
          <Button
            as={NavLink}
            to="/signup"
            className="btn"
            style={{ borderRadius: '24px', padding: '6px 18px', margin: '0px 15px' }}
          >
            Sign Up
          </Button>
        </p>
      </Jumbotron>
    </>
  );
}

export default SplashPage;
