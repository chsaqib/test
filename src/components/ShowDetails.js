import React from 'react';
import { Row, Col, ListGroup, Image } from 'react-bootstrap';
const ShowDetails = ({ show }) => {
  // const imgStyle = {
  //   height: '500px',
  //   Width: '100%',
  // };
  return (
    <>
      <Row>
        <Col md={3}>
          <Image
            src={show?.image?.original}
            alt={show.name}
            fluid
            //style={imgStyle}
          />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{show.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>{show.summary}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ShowDetails;
