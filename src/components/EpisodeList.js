import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EpisodeList = ({ episodes }) => {
  const cardStyle = {
    width: '15rem',
  };

  return (
    <div className="d-flex flex-row flex-wrap">
      {episodes.map((episode) => (
        <Card className="my-3 p-3 rounded " key={episode.id} style={cardStyle}>
          <Link to={`/Episode/${episode.id}`}>
            <Card.Img src={episode?.image?.medium} variant="top" />
          </Link>
          <Card.Body>
            <Link to={`/Episode/${episode.id}`}>
              <Card.Title as="div">
                <strong>{episode.name}</strong>
              </Card.Title>
            </Link>
          </Card.Body>
          <Card.Text as="div">
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
