import Link from 'next/link';
import PropTypes from 'prop-types';

const date = new Date();

const MealCard = ({ props }) => {
  const { direccion, logo, nombre, tel, horario, _id } = props;

  return (
    <div className="box" key={_id}>
      <div className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img className="is-rounded" src={logo} alt="Kitchen logo" />
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
          <span className="button is-fullwidth is-orange title is-5 is-medium">
            MENU
          </span>
        </Link>
      </div>
    </div>
  );
};

MealCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  direccion: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  horario: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  props: PropTypes.objectOf(PropTypes.string).isRequired
};

export default MealCard;
