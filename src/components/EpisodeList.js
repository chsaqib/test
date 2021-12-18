import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const EpisodeList = ({ episodes }) => {
  return (
    <div className="d-flex flex-row flex-wrap">
      {episodes.map((episode) => (
        // <Row key={id}>
        //   <Col>
        //     <Link to={(location) => `${location.pathname}/episodes/${id}`}>
        //       <img src={image && image.medium} alt={name} />
        //       <p>{name}</p>
        //       <p>
        //         Season{season} - Episode{number}
        //       </p>
        //     </Link>
        //   </Col>
        // </Row>
        <Card
          className="my-3 p-3 rounded "
          key={episode.id}
          style={{ width: '15rem' }}
        >
          <Link to={`/shows/episodes/${episode.id}`}>
            <Card.Img src={episode?.image?.medium} variant="top" />
          </Link>
          <Card.Body>
            <Link to={`/shows/episodes/${episode.id}`}>
              <Card.Title as="div">
                <strong>{episode.name}</strong>
              </Card.Title>
            </Link>
          </Card.Body>
          <Card.Text as="div">
            {/* <Link to={`/SingleCharacterPage/${character.id}`}></Link> */}
            <Link to={`/Episode/${episode.id}`}>
              Season{episode.season} - Episode{episode.number}
            </Link>
          </Card.Text>
        </Card>
      ))}
    </div>
  );
};

export default EpisodeList;
