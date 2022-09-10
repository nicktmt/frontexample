import React, { Component } from 'react'
import { useState, useEffect } from 'react';


export default class Testimage extends Component {

  render() {
    return (
        <div>
        <h1>Press button to see your future dog!</h1>
        <img src={"http://localhost:8080/app-portal/rest/category/loadimage/"} />
        
      </div>
    );
  }
}
