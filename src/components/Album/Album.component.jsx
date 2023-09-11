export default function Album() {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div
              className="card mb-4 shadow-sm custom-card cursor-active"
              id="autos"
            >
              <img
                className="bd-placeholder-img card-img-top"
                src={require('../../img/cars_index.jpg')}
                alt="Imagen representativa de la categoría 'Autos'"
              />
              <h3 className="m-3">Autos</h3>
              <div className="card-body">
                <p className="card-text">
                  Los mejores precios en autos 0 kilómetro, de alta y media
                  gama.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card mb-4 shadow-sm custom-card cursor-active"
              id="juguetes"
            >
              <img
                className="bd-placeholder-img card-img-top"
                src={require('../../img/toys_index.jpg')}
                alt="Imagen representativa de la categoría 'Juguetes'"
              />
              <h3 className="m-3">Juguetes</h3>
              <div className="card-body">
                <p className="card-text">
                  Encuentra aquí los mejores precios para niños/as de cualquier
                  edad.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card mb-4 shadow-sm custom-card cursor-active"
              id="muebles"
            >
              <img
                className="bd-placeholder-img card-img-top"
                src={require('../../img/furniture_index.jpg')}
                alt="Imagen representativa de la categoría 'Muebles'"
              />
              <h3 className="m-3">Muebles</h3>
              <div className="card-body">
                <p className="card-text">
                  Muebles antiguos, nuevos y para ser armados por uno mismo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <a className="btn btn-light btn-lg btn-block" href="categories.html">
            Y mucho más!
          </a>
        </div>
      </div>
    </div>
  );
}
