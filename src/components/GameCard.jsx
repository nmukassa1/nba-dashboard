function GameCard({game, standings}) {
     function getRecord(teamId, isHome) {
        const side = isHome ? 'home' : 'visitors';
        //Map thru standings array and find matching team
        const team = standings.response.filter((item) => {return item.team.id === teamId.teams[side].id});
        const win = team[0].win.total;
        const loss = team[0].loss.total;
        const output = win + '-' + loss;
        return output
    }

    function getTime(item){
        const timestamp = item.date.start;
        const dateObj = new Date(timestamp);
        let hours = dateObj.getHours();
        let minutes = dateObj.getMinutes();
        let timeOfDay = 'PM';
        if(hours < 10) {
            hours = `0${hours}`;
            timeOfDay = 'AM'
        }
        if(minutes < 10) minutes = `0${minutes}`;
        let output = null
        if(dateObj.getTime() > new Date().getTime()){
            output = `${hours}:${minutes} ${timeOfDay}`
        } else{
            output = 'Finished'
        }
        // const output = `${hours}:${minutes} ${timeOfDay}`;
        return output
    }

    function getDate(item){
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const timestamp = item.date.start;
        const dateObj = new Date(timestamp);
        const day = days[dateObj.getDay()];
        const month = dateObj.getMonth() + 1;
        const output = `${day}, ${dateObj.getDate()}/${month}`
        return output
    }
    return ( 
        <div className="game-card">
            <div className="home-team">
                <img className="games-logo" src={game.teams.home.logo} alt="" />
                <p>{game.teams.home.nickname}</p>
                <p>{getRecord(game, true)}</p>
            </div>
            <div className="timestamp">
                <div className="time">{getTime(game)}</div>
                <div className="date">{getDate(game)}</div>
            </div>
            <div className="away-team">
                <img className="games-logo" src={game.teams.visitors.logo} alt="" />
                <p>{game.teams.visitors.nickname}</p>
                <p>{getRecord(game, false)}</p>
            </div>
        </div>
    );
}

export default GameCard;