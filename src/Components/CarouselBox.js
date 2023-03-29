import React, { Component } from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import Max from '../assets/Макс.jpg';
import Stepa from '../assets/Степа.jpg';
import Tolyan from '../assets/Толян.jpg';
import Yasya from '../assets/Яся.jpg';
import Rus from '../assets/Рус.jpg';
import Phone from '../assets/Phone.jpg'
import Aboltus from '../assets/Aboltus.jpg'
import Sema from '../assets/Sema.jpg'

export default class  extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
            <img
                className='d-block w-100'
                src={Max}
                alt="Max"
            />
            <Carousel.Caption>
                <h1>Ebaniy Max</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className='d-block w-100'
                src={Stepa}
                alt="Max"
            />
            <Carousel.Caption>
                <h1>Ya blya</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className='d-block w-100'
                src={Tolyan}
                alt="Max"
            />
            <Carousel.Caption>
                <h1>Tolyanych</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className='d-block w-100'
                src={Yasya}
                alt="Max"
            />
            <Carousel.Caption>
                <h1>Gavno</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className='d-block w-100'
                src={Rus}
                alt="Rus"
            />
            <Carousel.Caption>
                <h1>Gavno</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className='d-block w-100'
                src={Sema}
                alt="Rus"
            />
            <Carousel.Caption>
                <h1>Sema Moy Kot</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className='d-block w-100'
                src={Aboltus}
                alt="Rus"
            />
            <Carousel.Caption>
                <h1>Aboltus blya</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className='d-block w-100'
                src={Phone}
                alt="Rus"
            />
            <Carousel.Caption>
                <h1>Moy stariy telephone</h1>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
