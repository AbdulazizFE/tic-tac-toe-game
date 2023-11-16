import React from "react";
import Square from "./Square";
import calculateWinner from "./calculateWinner";
import "./Board.scss";
export class Board extends React.Component {
  constructor(props) {
    super(props);
    // set the Board's initial state to contain an array of 9 nulls corresponding to the 9 squares
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      timer:20,
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  handlePlayAgain = () => {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    });
  };

  render() {
    const winner = calculateWinner(this.state.squares);
    const isBoardFull = this.state.squares.every((square) => square != null);
    let status;

    if (winner) {
      status = "Winner: " + winner;
    } else if (isBoardFull) {
      status = "It's a draw!";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="board container">
        <div className={`status ${winner ? "winner" : ""}`}>{status}</div>
        <div className="board-row container">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row container">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row container">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>

        {(winner || isBoardFull) && (
          <button className="play-again" onClick={this.handlePlayAgain}>
            Play Again
          </button>
        )}
      </div>
    );
  }
}
