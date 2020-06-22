import React from 'react'

import confLogo from '../images/badge-header.svg'
import avatar from '../images/astronauts.svg'

import './styles/Badge.css'

class Badge extends React.Component{

  render(){

    // this.props
    const firstName = "Edwin"
    const lastName = "Sanchez"

    return <div className="Badge">
              
              <div className="Badge__header">
                <img src={confLogo} alt='Logo'/> 
              </div>

              <div className="Badge__section-name">
                <img className="Badge__avatar" 
                src={this.props.avatarUrl} alt='avatar'/>
                <h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
              </div>

              <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <div>@{this.props.twitter}</div>
              </div>
              <div className="Badge__footer">
                <p>#PlatziConf</p>
              </div>
            </div>
  }
}

export default Badge