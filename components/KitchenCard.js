/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import Link from 'next/link';

const date = new Date();

export default ({ props }) => {
  const { direccion, logo, nombre, tel, horario, _id } = props;

  return (
    <div className="box" key={_id}>
      <div className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={logo} alt="Placeholder image" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <h1 className="title is-4">{nombre}</h1>
          </div>
        </div>
      </div>
      <div className="content kitchen-info">
        <p>
          Horario: <time>{horario[date.getDay()]}</time>
          <br />
          Telefono: <a href={`tel:+${tel}`}>{tel.substring(2)}</a>
          <br />
          <address>{direccion}</address>
        </p>
        <Link href="/cocina/[id]" as={`/cocina/${_id}`}>
          <a className="button is-fullwidth is-orange title is-5 is-medium">
            MENU
          </a>
        </Link>
      </div>
    </div>
  );
};
