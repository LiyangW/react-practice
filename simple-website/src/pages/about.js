import React from "react";
import { Outlet, Link } from "react-router-dom";
export function About() {
  return (
    <section>
      <h1>About</h1>
      <nav>
        <ul>
          <li>
            <Link to="service">Service</Link>
          </li>
          <li>
            <Link to="history">History</Link>
          </li>
          <li>
            <Link to="Location">Location</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </section>
  );
}

export function Service() {
  return (
    <section>
      <h2>Our Services</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero.
      </p>
    </section>
  );
}
export function History() {
  return (
    <section>
      <h2>Our History</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero.
      </p>
    </section>
  );
}
export function Location() {
  return (
    <section>
      <h2>Our Location</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero.
      </p>
    </section>
  );
}
