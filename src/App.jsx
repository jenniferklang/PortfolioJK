import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";

import Home from "./views/Home";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import Formular from "./views/Formular";

const FooterContainer = styled.footer`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(FaReact)`
  color: red;
  font-size: 24px;
`;

const Text = styled.span`
  margin-right: 10px;
`;

function Root() {
  return (
    <>
      <nav className="nav">
        <div className="logo-title">
          <Link to="/">Jennifer Klang</Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <FooterContainer>
        <Text>© {new Date().getFullYear()} Jennifer Klang </Text>
        <StyledIcon />
      </FooterContainer>
    </>
  );
}

function App(props) {
  return <input onClick={props.increment} type="button" value={props.value} />;
}

App.propTypes = {
  increment: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

connect((state) => ({ value: state }), {
  increment() {
    return { type: "INCREMENT" };
  },
})(App);

function AppWrapper() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <About />, path: "/about" },
        { element: <Portfolio />, path: "/portfolio" },
        { element: <Formular />, path: "/formular/:id" },
      ],
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppWrapper;

/* Min kod utan redux.....
import Home from "./views/Home";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import Formular from "./views/Formular";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";

const FooterContainer = styled.footer`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
const StyledIcon = styled(FaReact)`
  color: red;
  font-size: 24px;
`;
const Text = styled.span`
  margin-right: 10px;
`;

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function Root() {
  return (
    <>
      <nav className="nav">
        <div className="logo-title">
          <Link to="/">Jennifer Klang</Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <FooterContainer>
        <Text>© {new Date().getFullYear()} Jennifer Klang </Text>
        <StyledIcon />
      </FooterContainer>
    </>
  );
}

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <About />, path: "/about" },
        { element: <Portfolio />, path: "/portfolio" },
        { element: <Formular />, path: "/formular/:id" },
      ],
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
*/
