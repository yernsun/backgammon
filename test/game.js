/**
* test for game
* @author  YernSun<yernsun@gmail.com>
* @file    game.js
* @version 1.0
*/

const assert = require('assert');

const ChessGame = require('../src/js/utils/game');


describe('Game', function () {
    const board = new Board();
    const position = { x: 1, y: 1 };
    const positionValue = 2;
    // board
    describe('#get', function () {
        it(`should be 0 if the position of ${JSON.stringify(position)} is not put piece`, function () {
            assert.equal(0, board.get(position));
        });
    });
});
