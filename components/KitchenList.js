/* eslint-disable prefer-object-spread */
/* eslint-disable react/prop-types */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import Card from './KitchenCard';

export const ALL_KITCHENS_QUERY = gql`
  query {
    kitchens {
      _id
      cover
      direccion
      logo
      nombre
      tel
      horario
    }
  }
`;

export default function KitchenList() {
  const { loading, error, data } = useQuery(ALL_KITCHENS_QUERY);

  const { kitchens } = data;

  if (error) return <ErrorMessage message="Error loading kitchens." />;
  if (loading) return <div>Loading</div>;

  return (
    <section>
      <div className="columns is-multiline">
        {kitchens.map((kitchen) => (
          <div className="column is-one-third">
            <Card props={kitchen} />
          </div>
        ))}
      </div>
    </section>
  );
}
