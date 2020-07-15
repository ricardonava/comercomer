import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import Card from './KitchenCard';

// export const ALL_KITCHENS_QUERY = gql`
//   query {
//     kitchens {
//       _id
//       cover
//       direccion
//       logo
//       nombre
//       tel
//       horario
//     }
//   }
// `;

const ALL_VENUES_QUERY = gql`
  query {
    venues {
      _id
      name
      address
    }
  }
`;

export default function KitchenList() {
  const { loading, error, data } = useQuery(ALL_VENUES_QUERY);

  if (error) return <ErrorMessage message="Error al cargar las cocinas." />;
  if (loading) return <div>Loading</div>;
  const { venues } = data;

  return (
    <section className="section">
      <div className="columns is-multiline is-desktop">
        {venues.map((venue) => (
          <div className="column is-one-third">
            <Card props={venue} />
          </div>
        ))}
      </div>
    </section>
  );
}
