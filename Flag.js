/*
    Author :    Pedro Ruiz Hidalgo
                @pedroruizhidalg

    remarks :   this.component send a flag depending on it's prop flag
    date :      2019-11-25
*/
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import 'flag-icon-css/css/flag-icon.css'

export default class Flag extends Component {
  
  state = {
    flag : ''
  }

  constructor(props) {
    super(props);

    this.state = ({
      flag: (props.flag === 'en') ? 'gb' : props.flag
    })
  }


  static getDerivedStateFromProps(props,state) {
    if( props.flag !== state.flag) {
      return {
        flag: (props.flag === 'en') ? 'gb' : props.flag
      }
    }
    return null
  }

  render() {
    const flag = `flag-icon flag-icon-${this.state.flag}`
    return (
      <span className={flag}></span>
    )
  }
}

Flag.PropTypes = {
  flag : PropTypes.string.isRequired
}