import React, { Fragment, useRef, useEffect, useState } from "react";
import gsap from 'gsap';

function StandingsTable({table}) {
    const tableHeaders = [ 'TEAM', 'W', 'L', 'PCT', 'HOME', 'AWAY', 'L10' ];

    const teamRef = useRef([])
    useEffect(() => {
        animateTableCells()
    }, [table])

    function animateTableCells(){
        teamRef.current.forEach((el, index) => {
            if (el) {
              gsap.from(el, { opacity: 0, y: 20, duration: .4, ease: 'power1.out', borderColor: 'transparent', delay: index * 0.1 });
            }
          });
    }

    return ( 
  <table>
    <thead>
      <tr>
        {tableHeaders && (
            tableHeaders.map((item, index) => (
                <th scope="col" key={item + '-' + index}>{item}</th>
            )) 
        )}
      </tr>
    </thead>
    <tbody>
        {table.length > 0 && ( 
            table.map((team, index) => (
                <Fragment key={index}>
                    {(index === 0 || index === 15) && (
                        <tr className="conference">
                            <th>{index == 0 ? 'Eastern' : 'Western' }</th>
                        </tr>
                    )}

                    <tr ref={el => teamRef.current[index] = el}>
                        <th scope="row">
                            <span>{team.conference.rank}</span>
                            <span><img className="team-logo-table" src={team.team.logo} alt="" /></span>
                            <span className="team-name">{team.team.name}</span>
                            <span className="team-code">{team.team.code}</span>
                        </th>
                        <td>{team.win.total}</td>
                        <td>{team.loss.total}</td>
                        <td>{team.win.percentage}</td>
                        <td>{team.win.home + '-' + team.loss.home}</td>
                        <td>{team.win.away + '-' + team.loss.away}</td>
                        <td>{team.win.lastTen + '-' + team.loss.lastTen}</td>
                    </tr>
                </Fragment>
            ))
        )}
    </tbody>
  </table>
    );
}

export default StandingsTable;