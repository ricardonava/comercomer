/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
export default () => (
  <nav
    className="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

      <a
        onClick={() =>
          document.querySelector('.navbar-menu').classList.toggle('is-active')
        }
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarmenu"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">Home</a>

        <a className="navbar-item">Documentation</a>

        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">More</a>

          <div className="navbar-dropdown">
            <a className="navbar-item">About</a>
            <a className="navbar-item">Jobs</a>
            <a className="navbar-item">Contact</a>
            <hr className="navbar-divider" />
            <a className="navbar-item">Report an issue</a>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
