import React from "react";
import { Link ,useLocation} from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[simple Website]</h1>
      <nav>
        <ul>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="events">Events</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Products() {
  return (
    <div>
      <h1>[Products]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function NotFound() {
    let location = useLocation();
    console.log(location);
    return (
      <div>
        <h1>Resource not found at {location.pathname}</h1>
      </div>
    );
  }