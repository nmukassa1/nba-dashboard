function StandingsTable({table}) {
    const tableHeaders = [ 'TEAM', 'W', 'L', 'PCT', 'HOME', 'AWAY', 'L10' ];

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
                <>
                    {(index === 0 || index === 15) && (<tr className="conference"><th>{index == 0 ? 'Eastern' : 'Western' }</th></tr>)}
                    <tr >
                        <th scope="row">
                            <span>{team.conference.rank}</span>
                            <span><img className="team-logo-table" src={team.team.logo} alt="" /></span>
                            <span>{team.team.name}</span>
                        </th>
                        <td>{team.win.total}</td>
                        <td>{team.loss.total}</td>
                        <td>{team.win.percentage}</td>
                        <td>{team.win.home + '-' + team.loss.home}</td>
                        <td>{team.win.away + '-' + team.loss.away}</td>
                        <td>{team.win.lastTen + '-' + team.loss.lastTen}</td>
                    </tr>
                </>
            ))
        )}
    </tbody>
  </table>
    );
}

export default StandingsTable;