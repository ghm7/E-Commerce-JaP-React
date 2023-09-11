export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-between">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="categories.html">
                Categorías
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="sell.html">
                Vender
              </a>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
