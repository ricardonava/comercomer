/* eslint-disable prefer-object-spread */
/* eslint-disable react/prop-types */

import Card from './MealCard';

export default function MealList({ data }) {
  const { kitchen } = data;

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
