import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import Card from './VenueCard';

const ALL_VENUES_QUERY = gql`
  query {
    venues {
      _id
      name
      address
      banner
      logo
      phone
      slug
    }
  }
`;

const KitchenList = () => {
  const { loading, error, data } = useQuery(ALL_VENUES_QUERY);

  if (error) return <ErrorMessage message="Error loading venues." />;
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
};

export default KitchenList;
