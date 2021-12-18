import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { episodeDetails } from '../actions/showActions';

const Episode = ({ match }) => {
  const dispatch = useDispatch();
  const { loading, error, episode } = useSelector(
    (state) => state.episodeDetails
  );
  useEffect(() => {
    dispatch(episodeDetails(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={episode.image?.original} alt={episode?.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{episode.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>{episode.summary}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Episode;
