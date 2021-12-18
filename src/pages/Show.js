import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ShowDetails from '../components/ShowDetails';
import EpisodeList from '../components/EpisodeList';
import { episodesList, listShows } from '../actions/showActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

//import show from '../showdata';

const Show = () => {
  const dispatch = useDispatch();
  const loadShow = useSelector((state) => state.showList);
  const loadEpisodes = useSelector((state) => state.episodesList);
  const { loading, error, shows } = loadShow;
  const { episodes } = loadEpisodes;
  console.log(loadShow);
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
        </Row>
      )}
      <Row>
        <Col className="py-3 " key={episodes.id}>
          <h2>Episodes List</h2>
          <EpisodeList episodes={episodes} />
        </Col>
      </Row>
    </>
  );
};

export default Show;
