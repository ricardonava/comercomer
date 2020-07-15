import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const MealCard = ({ props }) => {
  const router = useRouter();
  const { id } = router.query;
  const { name, price, thumb, description } = props;
  return (
    <Link href="/cocina/[id]/[comida]" as={`/cocina/${id}/${name}`}>
      <div className="box">
        <div className="media">
          {/* <div className="media-left"></div> */}
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">{description}</p>
          </div>
          {/* <div className="media-right">
            <figure className="image is-128x128">
              <img className="is-rounded" src={thumb} alt="Food Thumbnail" />
            </figure>
          </div> */}
        </div>

        <div className="content">
          <p className="title is-5">
            {price}
            <span className="subtitle is-6"> USD</span>
          </p>
        </div>
      </div>
    </Link>
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
