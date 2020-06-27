/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import Link from 'next/link';

const date = new Date();

export default ({ props }) => {
  const { cover, direccion, logo, nombre, tel, horario, _id } = props;

  return (
    <div className="card" id={_id}>
      <div className="card-image">
        <figure className="image is-3by1">
          <img src={cover} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={logo} alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{nombre}</p>
            <p className="subtitle is-6">{direccion}</p>
          </div>
          <div className="media-right">
            <p id="ver-menu" className="subtitle is-6">
              <strong className="button is-white">
                <Link
                  href={{ pathname: `/cocina/`, query: { params: _id } }}
                  // as={`/${nombre}`}
                >
                  <a>VER MENU</a>
                </Link>
              </strong>
            </p>
          </div>
        </div>

        <div className="content">
          <p>
            Horario: <time>{horario[date.getDay()]}</time>
            <br />
            Telefono: <a href={`tel:+${tel}`}>{tel.substring(2)}</a>
            <br />
            {/* <address>Blvd. Costero s/n, Acapulco, 22890 Ensenada, B.C.</address> */}
          </p>
        </div>
      </div>
    </div>
  );
};
