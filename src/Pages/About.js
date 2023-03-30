import React, { Component } from 'react'
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap'
import Tolyan from "../assets/Толян.jpg"
import Yasya from "../assets/Яся.jpg"
import Max from "../assets/Яся.jpg"
import "./style.css"

export default class About extends Component {
  render() {
    return (
      <div className='aboutBackground'>           
        <div className='gridAbout'>
          <div className='gridProfile'>
            <div className='profileInfo'>
            <img className='profilePhoto' src={Tolyan} />
              <p>Ярослав</p>
              <a href="#" class="btn btn-secondary"><span>Узнать больше</span></a>
            </div>
          </div>
          <div className='gridProfile'>
            <div className='profileInfo'>
            <img className='profilePhoto' src={Tolyan} />
              <p >Степа</p>
              <a href="#" class="btn btn-secondary"><span>Узнать больше</span></a>
            </div>
          </div>
          <div className='gridProfile'>
            <div className='profileInfo'>
            <img className='profilePhoto' src={Tolyan} />
              <p >Руська</p>
              <a href="#" class="btn btn-secondary"><span>Узнать больше</span></a>
            </div>
          </div>
          <div className='gridProfile'>
            <div className='profileInfo'>
              <img className='profilePhoto' src={Tolyan} />
              <p>Толян</p>
              <a href="#" class="btn btn-secondary"><span>Узнать больше</span></a>
            </div>
          </div>
          <div className='gridProfile'>
            <div className='profileInfo'>
            <img className='profilePhoto' src={Tolyan} />
              <p>Рус</p>
              <a href="#" class="btn btn-secondary"><span>Узнать больше</span></a>
            </div>
          </div>
          <div className='gridProfile'>
            <div className='profileInfo'>
            <img className='profilePhoto' src={Tolyan} />
              <p>Макс</p>
              <a href="#" class="btn btn-secondary"><span>Узнать больше</span></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
