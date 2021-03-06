import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import ErrorMessage from './ErrorMessage';
import Card from './MealCard';

export const ALL_MEALS_QUERY = gql`
  query meals($query: MealQueryInput) {
    meals(query: $query) {
      _id
      name
      description
      price
      slug
      created_by {
        slug
        name
        _id
      }
    }
  }
`;

const MealList = ({ venue }) => {
  const { loading, error, data } = useQuery(ALL_MEALS_QUERY, {
    variables: { query: { created_by: { slug: venue } } }
  });

  if (error) return <ErrorMessage message="Error al cargar las cocinas." />;
  if (loading) return <div>Loading</div>;

  const { meals } = data;

  return (
    <section className="section">
      <div className="columns ">
        <div className="column">
          <div className="box">
            <h1 className="title is-4">{meals[0].created_by.name}</h1>
          </div>
        </div>
      </div>
      <div className="columns is-multiline">
        {meals.map((meal) => (
          <div className="column is-one-third">
            <Card props={meal} key={venue} />
          </div>
        ))}
      </div>
    </section>
  );
};

MealList.propTypes = {
  venue: PropTypes.string.isRequired
};

export default MealList;
