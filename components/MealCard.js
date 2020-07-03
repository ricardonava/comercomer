import PropTypes from 'prop-types';

const MealCard = ({ props }) => {
  const { nombre, precio, thumb, descripcion } = props;
  return (
    <div className="box">
      <div className="media">
        {/* <div className="media-left"></div> */}
        <div className="media-content">
          <p className="title is-4">{nombre}</p>
          <p className="subtitle is-6">{descripcion.corta}</p>
        </div>
        <div className="media-right">
          <figure className="image is-128x128">
            <img className="is-rounded" src={thumb} alt="Food Thumbnail" />
          </figure>
        </div>
      </div>

      <div className="content">
        <p className="title is-5">
          {precio}
          <span className="subtitle is-6">mxn</span>
        </p>
      </div>
    </div>
  );
};

MealCard.defaultProps = {
  nombre: 'Nombre',
  thumb: 'Image',
  descripcion: { larga: 'Larga', corta: 'Corta' },
  precio: 0.0
};

MealCard.propTypes = {
  props: PropTypes.objectOf(PropTypes.any).isRequired,
  nombre: PropTypes.string,
  thumb: PropTypes.string,
  descripcion: PropTypes.objectOf(PropTypes.string),
  precio: PropTypes.number
};

export default MealCard;
