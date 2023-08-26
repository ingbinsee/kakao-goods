import {NavLink} from 'react-router-dom';
import {string, func, oneOfType} from 'prop-types';

function Nav({className, navClassName}) {
  return (
    <nav>
      <ul className={className}>
        <li>
          <NavLink to="/" className={navClassName}>
            홈
          </NavLink>
        </li>
        <li>
          <NavLink to="/best" className={navClassName}>
            베스트
          </NavLink>
        </li>
        <li>
          <NavLink to="/sesyong" className={navClassName}>
            세숑
          </NavLink>
        </li>
        <li>
          <NavLink to="/mochi" className={navClassName}>
            모찌
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  className: string,
  navClassName: oneOfType([func, string]),
};

export default Nav;
