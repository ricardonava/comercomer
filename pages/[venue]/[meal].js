/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
// pages/cocina/[id]/[comida].js
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import App from '../../components/App';
import ErrorMessage from '../../components/ErrorMessage';
import MealComponent from '../../components/MealComponent';

export const MEAL_QUERY = gql`
  query meal($query: MealQueryInput) {
    meal(query: $query) {
      name
      description
      price
    }
  }
`;

const Meal = () => {
  const router = useRouter();
  const { query } = router;

  const { loading, error, data } = useQuery(MEAL_QUERY, {
    variables: {
      query: {
        created_by: { slug: query.venue },
        slug: query.meal
      }
    }
  });

  if (error) return <ErrorMessage message="Error al cargar las cocinas." />;
  if (loading)
    return (
      <App>
        <div>Loading</div>
      </App>
    );
  return (
    <App>
      <MealComponent data={data} />
    </App>
  );
};

export default Meal;
