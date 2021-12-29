// code your solution here








function superbowlWin(game){
    const result = (game.find(game => game.result === "W"));
    return !!result ? result.year : undefined;
}



