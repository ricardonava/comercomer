/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
// import Link from 'next/link';

export default ({ props }, key) => {
  const { nombre, porcion, precio, thumb, descripcion } = props;
  const porciones = [];
  for (let i = 0; i < porcion; i += 1) {
    porciones.push(
      <span className="icon has-text-black">
        <i className="fas fa-child" />
      </span>
    );
  }
  return (
    <div className="box" key={key}>
      <div className="media">
        {/* <div className="media-left"></div> */}
        <div className="media-content">
          <p className="title is-4">{nombre}</p>
          <p className="subtitle is-6">{descripcion.corta}</p>
        </div>
        <div className="media-right">
          <figure className="image is-128x128">
            <img className="is-rounded" src={thumb} alt="Placeholder image" />
          </figure>
        </div>
      </div>

      <div className="content">
        <p className="title is-5">
          {precio}
          <span className="subtitle is-6">mxn</span> {porciones}
        </p>

        {/* <p>
            Horario: <time>{hours}</time>
            <br />
            Telefono: <a href="tel:+6494452687">445-2663</a>
            <br />
            <address>Blvd. Costero s/n, Acapulco, 22890 Ensenada, B.C.</address>
          </p> */}
      </div>
    </div>
  );
};
