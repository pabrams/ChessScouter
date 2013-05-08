"use strict";
function Queen(color) {
    this.color = color;
    this.captured = false;
    this.image = color + "_queen.svg";
}
Queen.prototype.getColor = function getColor(){
    return this.color;
}
Queen.prototype.getImage = function getImage(){
    return this.image;
}
Queen.prototype.isCaptured = function isCaptured(){
    return this.captured;
}
Queen.prototype.setMoved = function setMoved(movedState){
    this.hasMoved = movedState;
}
Queen.prototype.getPotentialMoves = function getPotentialMoves(x, y){
	var potentialMoves = [];
	var vectorNorth = false;
	var vectorSouth = false;
	var vectorEast = false;
	var vectorWest = false;
	var vectorNorthEast = false;
	var vectorSouthEast = false;
	var vectorNorthWest = false;
	var vectorSouthWest = false;
	var addX = 0
	var addY = 0
    var northMoves = [];
    var southMoves = [];
    var eastMoves = [];
    var westMoves = [];
	var northEastMoves = [];
    var southEastMoves = [];
    var northWestMoves = [];
    var southWestMoves = [];
	while(vectorNorth == false || vectorSouth == false || vectorEast == false || vectorWest == false || vectorNorthEast == false || vectorSouthEast == false || vectorNorthWest == false || vectorSouthWest == false){
		//North: Y-- South: Y++ East: X-- West: X++ 
		if(vectorNorth == false) {
			addY--;
			if( myGame.gameBoard.isOnBoard(new Position(x + addX,y + addY))){
				northMoves.push(new Position (x + addX, y + addY));
                //northMoves.push({x: x + addX, y: y + addY});
			}else {
				addY = 0;
				vectorNorth = true;
			}
		}else if (vectorSouth == false) {
			addY++;
			if( myGame.gameBoard.isOnBoard(new Position(x + addX,y + addY))){
				southMoves.push(new Position (x + addX, y + addY));
			}else {
				addY = 0;
				vectorSouth = true;
			}
		}else if (vectorEast == false){
            addX--;
			if( myGame.gameBoard.isOnBoard(new Position(x + addX,y + addY))){
				eastMoves.push(new Position (x + addX, y + addY));
			}else {
				addX = 0;
				vectorEast = true;
			}
		}else if (vectorWest == false){
            addX++;
			if( myGame.gameBoard.isOnBoard(new Position(x + addX,y + addY))){
				westMoves.push(new Position (x + addX, y + addY));
			}else {
				addX = 0;
				vectorWest = true;
			}
		}else if(vectorNorthEast == false) {
			addY--;
			addX--;
			if( myGame.gameBoard.isOnBoard(new Position(x + addX,y + addY))){
				northEastMoves.push(new Position (x + addX, y + addY));
                //northMoves.push({x: x + addX, y: y + addY});
			}else {
				addY = 0;
				addX = 0;
				vectorNorthEast = true;
			}
		}else if (vectorSouthEast == false) {
			addY++;
			addX--;
			if( myGame.gameBoard.isOnBoard(new Position(x + addX,y + addY))){
				southEastMoves.push(new Position (x + addX, y + addY));
			}else {
				addY = 0;
				addX = 0;
				vectorSouthEast = true;
			}
		}else if (vectorNorthWest == false){
            addY--;
			addX++;
			if( myGame.gameBoard.isOnBoard(new Position(x + addX,y + addY))){
				northWestMoves.push(new Position (x + addX, y + addY));
			}else {
				addX = 0;
				addY = 0;
				vectorNorthWest = true;
			}
		}else if (vectorSouthWest == false){
			addX++;
			addY++;
			if( myGame.gameBoard.isOnBoard(new Position(x + addX,y + addY))){
				southWestMoves.push(new Position (x + addX, y + addY));
			}else {
				addX = 0;
				vectorSouthWest = true;
			}
		}
	}
    potentialMoves.push(northMoves);
    potentialMoves.push(southMoves);
    potentialMoves.push(eastMoves);
    potentialMoves.push(westMoves);
	potentialMoves.push(northEastMoves);
    potentialMoves.push(southEastMoves);
    potentialMoves.push(northWestMoves);
    potentialMoves.push(southWestMoves);
	return potentialMoves;
}
Queen.prototype.getLegalMoves = function getLegalMoves(currentPosition){
    var legalMoves = [];
    var allMoves = this.getPotentialMoves(currentPosition.x, currentPosition.y)
    for(var i = 0; i < allMoves.length; i++){
        var currVectorMoves = allMoves[i];
        for(var j = 0; j < currVectorMoves.length; j++){
            if(myGame.gameBoard.occupiedBy(currVectorMoves[j]) == null){
                legalMoves.push(currVectorMoves[j]);
            }else if(myGame.gameBoard.occupiedBy(currVectorMoves[j]) != this.color){
                legalMoves.push(currVectorMoves[j]);
                break;
            }else{
                break;
            }
        }
    }
    return legalMoves;
}
Queen.prototype.getAttacks = function getAttacks(currentPosition){
	return this.getLegalMoves(currentPosition);
};