import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { episodeDetails } from '../actions/showActions';

const Episode = ({ history, match }) => {
  console.log('Episode View');
  console.log(match.params.id);
  const dispatch = useDispatch();

  const loadShow = useSelector((state) => state.showList);
  const episode = useSelector((state) => state.episodeDetails);
  console.log(loadShow);
  const { loading, error, shows } = loadShow;
  console.log(episode);
  //let [episode] = episodeDetail;
  useEffect(() => {
    console.log(' use effect in Episode');
    dispatch(episodeDetails(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      {console.log('Episode')}
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={episode?.image?.medium} alt={episode?.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>{episode?.summary}</h2>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Episode;
