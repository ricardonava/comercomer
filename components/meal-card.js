/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
// import Link from 'next/link';

export default ({ props }) => {
  const { nombre, porcion, precio, thumb } = props;
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          {/* <div className="media-left"></div> */}
          <div className="media-content">
            <p className="title is-6">{nombre}</p>
            <p className="subtitle is-6">{precio}</p>
          </div>
          <div className="media-right">
            <figure className="image is-128x128">
              <img src={thumb} alt="Placeholder image" />
            </figure>
          </div>
        </div>

        <div className="content">
          <p className="subtitle is-6">{porcion}</p>

          {/* <p>
            Horario: <time>{hours}</time>
            <br />
            Telefono: <a href="tel:+6494452687">445-2663</a>
            <br />
            <address>Blvd. Costero s/n, Acapulco, 22890 Ensenada, B.C.</address>
          </p> */}
        </div>
      </div>
    </div>
  );
};
