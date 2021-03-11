import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./Teams.css";

const Teams = (props) => {
//   console.log(props.team);
  const { idTeam, strTeam, strTeamBadge, strSport } = props.team;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card-style border text-center my-2 py-3 rounded">
        <img src={strTeamBadge} alt="" />
        <h3 className="title-style">{strTeam}</h3>
        <p>Spots Type : {strSport}</p>
        <Link to={`/team/${idTeam}`}>
          <Button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
        </Link>
      </div>
    </div>
  );
};

export default Teams;