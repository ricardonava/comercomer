/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
import Link from 'next/link';
import PropTypes from 'prop-types';

const MealCard = ({ props }) => {
  const { name, price, description, created_by: createdBy, slug } = props;
  return (
    <div className="box">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{name}</p>
          <p className="subtitle is-6">{description}</p>
        </div>
      </div>
      <div className="content">
        <p className="title is-5">
          {price}
          <span className="subtitle is-6"> USD</span>
        </p>
      </div>
      <Link href="[venue]/[meal]" as={`${createdBy.slug}/${slug}`}>
        <span className="button is-fullwidth is-orange title is-5 is-medium">
          INFO
        </span>
      </Link>
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
