import React from "react"
import "../styles/fitaboServices.css"
import mobileGym from  "../assets/images/mobile gym.png"
import workWithFitabo from "../assets/images/work with fitabo.png"
import habits from "../assets/images/habits.png"
import community from "../assets/images/community.png"


export default function FitaboServices() {

  const fitaboServices = [
    {
      "id": "serv1",
      "title": "Meet your fitness pal",
      "details": "Trying to lose weight, stay in shape, or learn other fitness sports for your overall health? Fitabo give you the right trainers who can help you achieve your goals",
      // "details": "Do you want to lose weight, stay in shape or learn other fitness sports? Fitabo links you with certified and of a high standard trainers who can help you reach your goals",
      "img": mobileGym
    },
    {
      "id": "serv2",
      "title": "Work with Fitabo",
      "details": "For fitness trainers and sport coaches, are you looking for individuals to train? Well! Fitabo has a great way of linking you with those who are in need",
      "img": workWithFitabo
    },
    {
      "id": "serv3",
      "title": "Create healthy habits",
      "details": "Psychology says that humans are the creatures of their own habits and your habits create the person you will become. Fitabo will help you choose your habits reasonably",
      "img": habits
    },
    {
      "id": "serv4",
      "title": "Join a Community",
      "details": "Fitabo will introduce you to other Fitabo users from around the world venturing on the same journey as you",
      "img": community
    }
  ]

  return (
    <section className="serviceWrapper">
      {fitaboServices.map((service, index) => (
        <div key={service.id} data-aos="fade-up" data-aos-easing="ease-out-cubic"
        data-aos-duration="1000" data-aos-delay={50 * index} className={((index+1) % 2) === 0 ? "row" : "row reverse"}>
          <img className="image" src={service.img} alt={service.title} />
          <div className="details">
            <h2>{service.title}</h2>
            <p>{service.details}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
