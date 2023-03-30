import React, { Component } from 'react'
import "./style.css"
export default class Schedule extends Component {
  render() {
    return (
      <div className='sheduleBackground'>
        <div className='gridShedule'>
          <table class="table table-hover table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col">День недели</th>
                <th scope="col">Тренировка</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Понедельник</th>
                <td>Грудь, трицепс</td>

              </tr>
              <tr>
                <th scope="row">Вторник</th>
                <td>Отдых</td>

              </tr>
              <tr>
                <th scope="row">Среда</th>
                <td>Спина, бицепс, плечи</td>

              </tr>
              <tr>
                <th scope="row">Четверг</th>
                <td>Отдых</td>

              </tr>
              <tr>
                <th scope="row">Пятница</th>
                <td>Отдых</td>

              </tr>
              <tr>
                <th scope="row">Суббота</th>
                <td>Ноги</td>

              </tr>
              <tr>
                <th scope="row">Воскресенье</th>
                <td>Пиво</td>

              </tr>
            </tbody>
          </table>
          
        </div>
      </div>
    )
  }
}
