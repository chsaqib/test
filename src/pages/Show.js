import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ShowDetails from '../components/ShowDetails';
import EpisodeList from '../components/EpisodeList';
import { episodesList, listShows } from '../actions/showActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const Show = () => {
  const dispatch = useDispatch();
  const { loading, error, shows } = useSelector((state) => state.showList);
  const { episodes } = useSelector((state) => state.episodesList);

  useEffect(() => {
    dispatch(listShows());
    dispatch(episodesList());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row>
          <Col md={12} key={shows.id}>
            <ShowDetails show={shows} />
          </Col>
          <Col className="py-3 " key={episodes.id}>
            <h2>Episodes List</h2>
            <EpisodeList episodes={episodes} />
          </Col>
        </Row>
      )}
      <Row></Row>
    </>
  );
};

export default Show;
