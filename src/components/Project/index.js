import React from 'react';
import { Link } from 'gatsby';
import useAnimateOnScroll from '../../utils/useAnimateOnScroll';

import './index.scss';

function Project(props) {
  useAnimateOnScroll();

  const media = props.video ? (
    <div className="project__vid">
      <div className="project__scale" data-aos="scale-down">
        <video autoPlay loop muted poster={props.image}>
          <source type="video/mp4" src={props.video} />
        </video>
      </div>
    </div>
  ) : (
    <figure className="project__img">
      <div className="project__scale" data-aos="scale-down">
        <img src={props.image} alt={props.title} />
      </div>
    </figure>
  );

  return (
    <article className="project">
      <Link className="project__link" to={props.link} data-aos="slide-up">
        {media}
        <header className="project__header">
          <h3 className="project__title">
            <span data-aos="slice-up" data-aos-duration="400">{props.title}</span>
          </h3>
          <p className="project__text" data-aos="fade-in" data-aos-duration="400" data-aos-delay="100">{props.description}</p>
        </header>
      </Link>
    </article>
  );
}

export default Project;
