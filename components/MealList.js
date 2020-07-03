/* eslint-disable prefer-object-spread */
/* eslint-disable react/prop-types */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import Card from './MealCard';

export const ALL_MEALS_QUERY = gql`
  query kitchen($query: KitchenQueryInput) {
    kitchen(query: $query) {
      comidas {
        nombre
        porcion
        precio
        thumb
        descripcion {
          corta
        }
      }
    }
  }
`;

export default function MealList({ id }) {
  const { loading, error, data } = useQuery(ALL_MEALS_QUERY, {
    variables: { query: { _id: id } }
  });

  if (error) return <ErrorMessage message="Error al cargar las cocinas." />;
  if (loading) return <div>Loading</div>;

  const { kitchen } = data;

  return (
    <section className="section">
      <div className="columns is-multiline">
        {kitchen.comidas.map((comida) => (
          <div className="column is-one-third">
            <Card props={comida} key={id} />
          </div>
        ))}
      </div>
    </section>
  );
}
