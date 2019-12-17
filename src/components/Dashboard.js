import React, { Component } from 'react'
import {
  Accordion,
  Col,
  Row,
  Image
} from 'react-bootstrap'
import Admin from './Admin'
import Executive from './Executive'
import Employer from './Employer'
import User from './User'
import ChartPie from './Pie'
import ChartLine from './Line'
import Absen from './Absen'
import Profile from './Profile'
import Boy from '../assets/images/boy.png'
import { verify } from '../helpers'
import { withRouter } from 'react-router-dom'

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: verify() || {},
      func: ''
    }

    this.switchDashboard = this.switchDashboard.bind(this)
    this.switchFunctions = this.switchFunctions.bind(this)
  }

  switchFunctions() {
    let func = this.props.match.params.func

    if (func === 'watch-revenue-reports') {
      return <ChartLine />
    } else if (func === 'watch-sales-reports') {
      return <ChartPie />
    } else if (func === 'add-revenue-report') {

    } else if (func === 'add-sales-report') {

    } else if (func === 'check-in') {

    } else if (func === 'watch-attendance-reports') {
      return <Absen />
    } else if (func === 'tasks-manager') {

    } else if (func === 'view-profile') {

    } else if (func === 'edit-profile') {
      return <Profile />
    }
  }

  switchDashboard() {
    if (this.state.user.role === 'Admin') {
      return <Admin />
    } else if (this.state.user.role === 'Executive') {
      return <Executive />
    } else if (this.state.user.role === 'Employer') {
      return (<Employer />)
    } else if (this.state.user.role === 'User') {
      return (<User />)
    }
  }

  render() {
    return (
      <Row
        className="dashboard"
        style={{
          marginTop: '76px'
        }}
      >
        <Col
          md={{
            span: 4
          }}
          style={{
            backgroundColor: '#606060',
            height: window.innerHeight - 76 + 'px',
            overflow: 'auto',
            padding: '0'
          }}
        >
          <h1
            className="text-light"
            style={{
              fontFamily: 'Aladin',
              marginTop: '15px'
            }}
          >
            Welcome Back
            <br />
            {
              this.state.user.fullName
            }
            &nbsp;-&nbsp;
            {
              this.state.user.departement
            }
          </h1>
          <Image
            roundedCircle={true}
            src={Boy}
            style={{
              backgroundColor: '#808080',
              display: 'block',
              height: 'auto',
              margin: '25px auto',
              padding: '15px',
              width: '25%'
            }}
          />
          <h2 className="text-info">
            {
              this.state.user.employerId
            }
            &nbsp;(Employer ID)
          </h2>
          <h3 className="text-danger">
            {
              this.state.user.role
            }
          </h3>
          <Accordion>
            {
              this.switchDashboard()
            }
          </Accordion>
        </Col>
        <Col
          md={{
            span: 8
          }}
          style={{
            height: window.innerHeight - 76 + 'px',
            overflow: 'auto',
            padding: '0'
          }}
        >
          {
            this.switchFunctions()
          }
        </Col>
      </Row>
    )
  }
}

export default withRouter(Dashboard)