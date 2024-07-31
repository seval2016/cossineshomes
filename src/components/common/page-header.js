import React from 'react'
import "./page-header.scss";
import { Container } from 'react-bootstrap';

const PageHeader = ({title}) => {
  return (

        <Container className="page-header">
        <h1>{title}</h1>
    </Container>  
  )
}

export default PageHeader