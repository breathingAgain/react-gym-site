import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import GymDark from "../assets/GymDark.jpg"
import GymDumbell from "../assets/GymDumbell.jpg"
import GymDeadLift from "../assets/GymDeadLift.jpg"
import GymBox from "../assets/GymBox.jpg"
import "./style.css"
export default class extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item className='containerCarousel'>
          <img
           className='imgCarousel'
            src={GymDark}
          />
          <Carousel.Caption>
            <h1>“Тело достигает того, во что верит разум.”</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='containerCarousel'>
          <img
            className='imgCarousel'
            src={GymDeadLift}
          />
          <Carousel.Caption>
            <h1>“Заставьте себя, потому что никто другой не сделает этого за вас.”</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='containerCarousel'>
          <img
           className='imgCarousel'
            src={GymBox}
          />
          <Carousel.Caption>
            <h1>“Самое сложное - привести свой разум в форму.”</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='containerCarousel'>
          <img
            className='imgCarousel'
            src={GymDumbell}
          />
          <Carousel.Caption>
            <h1>“Не бойся быть новичком.”</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
