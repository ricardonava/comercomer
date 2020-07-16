/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
// pages/cocina/[id]/[comida].js
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import App from '../../components/App';
import ErrorMessage from '../../components/ErrorMessage';

export const MEAL_QUERY = gql`
  query meal($query: MealQueryInput) {
    meal(query: $query) {
      name
      description
      price
    }
  }
`;

export const MEALS_ID_QUERY = gql`
  query {
    meals {
      _id
    }
  }
`;

const Meal = () => {
  const router = useRouter();
  const { asPath } = router;
  const path = asPath.split('/');

  const { loading, error, data } = useQuery(MEAL_QUERY, {
    variables: {
      query: {
        created_by: { _id: path[1] },
        _id: path[2]
      }
    }
  });

  if (error) return <ErrorMessage message="Error al cargar las cocinas." />;
  if (loading) return <div>Loading</div>;
  const { meal } = data;
  return (
    <App>
      <div>
        <p>Hola Mundo {meal.name}</p>
      </div>
    </App>
  );
};

export default Meal;
