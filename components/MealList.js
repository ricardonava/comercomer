import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import ErrorMessage from './ErrorMessage';
import Card from './MealCard';

export const ALL_MEALS_QUERY = gql`
  query kitchen($query: KitchenQueryInput) {
    kitchen(query: $query) {
      nombre
      comidas {
        nombre
        precio
        thumb
        descripcion {
          corta
        }
      }
    }
  }
`;

const MealList = ({ id }) => {
  const { loading, error, data } = useQuery(ALL_MEALS_QUERY, {
    variables: { query: { _id: id } }
  });

  if (error) return <ErrorMessage message="Error al cargar las cocinas." />;
  if (loading) return <div>Loading</div>;

  const { kitchen } = data;

  return (
    <section className="section">
      <div className="columns ">
        <div className="column">
          <div className="box">
            <h1 className="title is-4">{kitchen.nombre}</h1>
          </div>
        </div>
      </div>
      <div className="columns is-multiline">
        {kitchen.comidas.map((comida) => (
          <div className="column is-one-third">
            <Card props={comida} key={id} />
          </div>
        ))}
      </div>
    </section>
  );
};

MealList.propTypes = {
  id: PropTypes.string.isRequired
};

export default MealList;
