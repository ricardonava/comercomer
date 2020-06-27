/* eslint-disable prefer-object-spread */
/* eslint-disable react/prop-types */

import Card from './KitchenCard';

export default function KitchenList({ data }) {
  const { kitchens } = data;

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
