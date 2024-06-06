function GameCard({game}) {

    function getTime(item){
        const timestamp = item.date.start;
        const dateObj = new Date(timestamp);
        let hours = dateObj.getHours() <  11 ? `0${dateObj.getHours()}` : dateObj.getHours();
        let minutes = dateObj.getMinutes() < 10 ? `0${dateObj.getMinutes()}` : dateObj.getMinutes();
        let timeOfDay = dateObj.getHours() <= 11 ? 'AM' : 'PM';
        let output = null
        if(dateObj.getTime() > new Date().getTime()){
            output = `${hours}:${minutes} ${timeOfDay}`
        } 
        return output
        // console.log(output);
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

    function homeTeamWon(){
        const output = game.teams.home.points > game.teams.visitors.points ? 'game-won' : '';
        return output
    }
    function awayTeamWon(){
        const output = game.teams.visitors.points > game.teams.home.points ? 'game-won' : '';
        return output
    }


    return ( 
        <div className="game-card">
            <div className="game-card__status">
                {game.status.long !== 'Scheduled' ? game.status.long : getDate(game) + ' - ' + getTime(game) }
            </div>

            <div className={`game-card__team ${homeTeamWon()}`}>
                <div>
                    <img src={game.teams.home.logo} alt="" />
                    <span>{game.teams.home.code}</span>
                </div>
                <span>
                    {game.scores.home.points === null ? '0' : game.scores.home.points}
                </span>
            </div>

            <div className={`game-card__team ${awayTeamWon()}`}>
                <div>
                    <img src={game.teams.visitors.logo} alt="" />
                    <span>{game.teams.visitors.code}</span>
                </div>
                <span>
                    {game.scores.visitors.points === null ? '0' : game.scores.visitors.points}
                </span>
            </div>
        </div>
    );
}

export default GameCard;