package com.bikeworld.integrationtests

class ProductListSpec extends TourneySpaceBaseSpec {
  path = "/shop"

  "The Eventoverview" should "should render everything and work" in {
    fits(
      <section>
        <h1>Streetball tournament</h1>
        <button className="red-container btn">
          <span className="btn-text">Delete</span>
          <i className="fas fa-trash-alt"></i>
        </button>

        <Link to={`/editTournament`}>
          <button className="yellow-container btn">
            <span className="btn-text">Edit</span>
            <i className="fas fa-edit"></i>
          </button>
        </Link>

        <div className="flex-container">
          <div id="schedule-container">
            <h3>Schedule</h3>
            <img className="nodata" src={nodata} alt='none'/>
          </div>
          }
          return
          <div id="schedule-container">
            <h3>Schedule</h3>
            <ul className="list">
              <li className="list-item container-example">
                <p>
                  <span className="blue-container time">10:30 - 11:00</span> <span>TeamOne</span> <span>vs</span>
                  <span>TeamTwo</span> <span>Live *</span>
                </p>
              </li>
            </ul>
          </div> <div id="conwrap">
          <div id="team-container">
            <Link to={`/CreateTeam`}>
              <button className="green-container btn">
                <i className="fas fa-plus-circle"></i>
              </button>
            </Link>
            <h3>Teams</h3>
            <ul className="list">
              {this.state.teams.map(
              team =>
                <li className="list-item container-example">
                  <img className="people-icon" src={people} alt="people"/>
                  <p style={{display: "inline-block"}}>
                    {team.name}
                  </p>
                  <button className="red-container btn" onClick={() => this.deleteTeamClicked(team.teamId)}>
                    <span className="btn-text">-</span>
                  </button>
                </li>
              )
              }

            </ul>
        </ div >
        <div id="court-container">
          <h3>Courts</h3>
          <p>Amount:
            {amount}
          </p>
        </div> </ div >
        </ div >
      <br/>
        <br/>
        <br/>
      <Link to={`/landingpage`}>
        <i className="fas fa-chevron-left"></i>
        Back
      </Link>
    </ section >
    )}
    }