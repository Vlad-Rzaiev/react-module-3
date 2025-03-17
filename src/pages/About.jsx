import { NavLink, Outlet } from 'react-router-dom';

export default function About() {
  return (
    <>
      <h2>About us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        ipsam error sunt tempora autem rem nesciunt laboriosam in architecto
        eum.
      </p>

      <ul>
        <li>
          <NavLink to="mission">Mission</NavLink>
        </li>
        <li>
          <NavLink to="team">Team</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
