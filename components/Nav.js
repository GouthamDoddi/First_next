import Link from 'next/link';

const nav = () =>
  <nav className="navBar">
    <ul className="flex">
      <li>
        <Link className="navLink" href="/">Home</Link>
      </li>
      <li>
        <Link className="navLink" href="/products/add">Add a product</Link>
      </li>
      <li>
        <Link className="navLink" href="/products/vew">View all products </Link>
      </li>
    </ul>
  </nav>;

export default nav;
