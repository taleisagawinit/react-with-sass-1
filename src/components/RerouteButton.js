import React from 'react';
import '../App.scss';
import { Link } from 'react-router-dom'

export default function RerouteButton(props) {
  // todo: test component
  return (
   <Link to={props.to}>
     {props.children}
   </Link>

  );
}

