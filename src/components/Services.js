import React, { Component } from 'react';
import Title from './Title';
import { FaHiking, FaShuttleVan, FaBeer, FaCocktail } from 'react-icons/fa';

export class Services extends Component {
  state = {
    services: [
      {
        icon: <FaBeer />,
        title: "free beer",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quis?"
      },
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quis?"
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quis?"
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttles",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quis?"
      }
    ]
  }
  
  render() {
    return (
      <>
        <section className='services'>
          <Title title="services"/>
          <div className="services-center">
            {this.state.services.map(({ icon, title, info }, index) => {
              return <article key={index} className="service">
                <span>{icon}</span>
                <h6>{title}</h6>
                <p>{info}</p>
              </article>
            })}
          </div>
        </section>
      </>
    )
  }
}

export default Services;