import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { increment } from "../../redux/slices/counter.slice";

function Header() {
  let dispatch = useDispatch();
  let { count } = useSelector((state) => state.myCounter);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>INC</button>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/recent-weather-details">Last Weather Details</NavLink>
          </li>
          <li>
            <NavLink to="/view-history">View Weather History</NavLink>
          </li>
          <li>
            About
            <ul>
              <li>Page-1</li>
              <li>Page-2</li>
              <li>Page-3</li>
              <li>Page-4</li>
            </ul>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
