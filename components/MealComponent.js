/* eslint-disable react/prop-types */
const MealComponent = ({ data }) => {
  return (
    <section className="section">
      <div className="columns ">
        <div className="column">
          <div className="box">
            <h1 className="title is-4">{data.meal.name}</h1>
          </div>
        </div>
      </div>
      <div className="box">
        <h1 className="title is-4">{data.meal.description}</h1>
      </div>
    </section>
  );
};

export default MealComponent;
