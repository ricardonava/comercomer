/* eslint-disable prefer-object-spread */
/* eslint-disable react/prop-types */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import Card from './MealCard';

export const ALL_MEALS_QUERY = gql`
  query {
    kitchen(query: { _id: "5ef26fae5fa2dbcd18c3597c" }) {
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

export default function MealList() {
  const { loading, error, data } = useQuery(ALL_MEALS_QUERY);

  const { kitchen } = data;

  if (error) return <ErrorMessage message="Error loading meals." />;
  if (loading) return <div>Loading</div>;

  return (
    <section>
      <div className="columns is-multiline">
        {kitchen.comidas.map((comida) => (
          <div className="column is-one-third">
            <Card props={comida} />
          </div>
        ))}
      </div>
    </section>
  );
}
