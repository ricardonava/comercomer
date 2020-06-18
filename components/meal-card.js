/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import Link from 'next/link';

export default ({ props }) => {
  const { name, branch, hours, logo } = props;
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          {/* <div className="media-left"></div> */}
          <div className="media-content">
            <p className="title is-6">{name}</p>
            <p className="subtitle is-6">{branch}</p>
          </div>
          <div className="media-right">
            <figure className="image is-64x64">
              <img src={logo} alt="Placeholder image" />
            </figure>
          </div>
        </div>

        <div className="content">
          <p className="subtitle is-6">{hours}</p>

          {/* <p>
            Horario: <time>{hours}</time>
            <br />
            Telefono: <a href="tel:+6494452687">445-2663</a>
            <br />
            <address>Blvd. Costero s/n, Acapulco, 22890 Ensenada, B.C.</address>
          </p> */}
        </div>
      </div>
    </div>
  );
};
