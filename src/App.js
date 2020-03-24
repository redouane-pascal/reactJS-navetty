import React from 'react';
import './App.css';

function Square(props) {
  return (
    // <button className="square" onClick={props.onClick}>
    <button className={props.cellCssClass} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}

class Board extends React.Component {

  renderTable() {
    let table = []

    for (let i = 0; i < 3; i++) {
      let children = []
      for (let j = 0; j < 3; j++) {
        children.push(this.renderSquare(3 * i + j));
      }
      table.push(<div key={i} className="board-row">{children}</div>)
    }
    return table
  }

  renderSquare(i) {
    return (
      <Square key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        cellCssClass={this.props.cellCssClass[i]}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderTable()}
      </div>
    );
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        col: null,
        row: null,
        cellCssClass: Array(9).fill("square"),
      }],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const cellCssClass = current.cellCssClass.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat(
        [
          {
            squares: squares,
            cellCssClass: cellCssClass,
            col: i % 3,
            row: Math.floor(i / 3),
          }
        ]
      ),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  jumpTo(step) {
    this.setState(
      {
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      }
    );
  }


  render() {

    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const moves = history.map((step, move) => {
      const desc = move ? 'Revenir au tour n : ' + move + ' -> [' + step.row + '|' + step.col + ']' : 'Revenir au debut de la partie.';
      const cssClass = this.state.stepNumber === move ? "font-bold" : "font-normal";
      return (
        <li key={move}>
          <button
            className={cssClass}
            onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      )
    });

    let status;
    if (this.state.stepNumber === 9) {
      status = "Match nul";
    } else {
      const winner = calculateWinner(current.squares);
      if (winner) {
        status = (!this.state.xIsNext ? 'X' : 'O') + " a gagne !!";
        winner.forEach(cellId => {
          current.cellCssClass[cellId] = "square win";
        })
      } else {
        status = "Prochain joueur est " + (this.state.xIsNext ? 'X' : 'O');
      }
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            cellCssClass={current.cellCssClass}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
export default App

/**
 * -------------------------
 * Routers
 * -------------------------
 */
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Home</h1>
//       </div>
//     )
//   }
// }
// export default App

/**
 * -------------------------
 * Keys
 * -------------------------
 */
// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       data: [
//         {
//           component: 'First...',
//           id: 1
//         },
//         {
//           component: 'Second...',
//           id: 2
//         },
//         {
//           component: 'Third...',
//           id: 3
//         }
//       ]
//     }
//   }
//   render() {
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Component</th>
//           </tr>
//         </thead>
//         <tbody>
//           {this.state.data.map(
//             (dynamicComponent, i) => <Content key={i} componentData={dynamicComponent} />)
//           }
//         </tbody >
//       </table >
//     );
//   }
// }
// class Content extends React.Component {
//   render() {
//     return (
//       <tr>
//         <td>{this.props.componentData.id}</td>
//         <td>{this.props.componentData.component}</td>
//       </tr>
//     );
//   }
// }
// export default App;

/**
 * -------------------------
 * Events
 * -------------------------
 */
// class App extends React.Component {
//   constructor(props) {
//      super(props);

//      this.state = {
//         data: 'Initial data...'
//      }
//      this.updateState = this.updateState.bind(this);
//   };
//   updateState() {
//      this.setState({data: 'Data updated from the child component...'})
//   }
//   render() {
//      return (
//         <div>
//            <Content myDataProp = {this.state.data} 
//               updateStateProp = {this.updateState}></Content>
//         </div>
//      );
//   }
// }
// class Content extends React.Component {
//   render() {
//      return (
//         <div>
//            <button onClick = {this.props.updateStateProp}>CLICK</button>
//            <h3>{this.props.myDataProp}</h3>
//         </div>
//      );
//   }
// }
// export default App;

/**
 * -------------------------
 * Forms
 * -------------------------
 */
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: 'Initial data...'
//     }
//     this.updateState = this.updateState.bind(this);
//   };
//   updateState(e) {
//     this.setState({ data: e.target.value });
//   }
//   render() {
//     return (
//       <div>
//         <Content
//           myDataProp={this.state.data}
//           updateStateProp={this.updateState}
//         ></Content>
//       </div>
//     );
//   }
// }
// class Content extends React.Component {
//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.props.myDataProp}
//           onChange={this.props.updateStateProp} />
//         <h3>{this.props.myDataProp}</h3>
//       </div>
//     );
//   }
// }
// export default App;

/**
 * -------------------------
 * Component Life Cycle
 * -------------------------
 */
// class App extends React.Component {
//    constructor(props) {
//       super(props);

//       this.state = {
//          data: 0
//       }
//       this.setNewNumber = this.setNewNumber.bind(this)
//    };
//    setNewNumber() {
//       this.setState({data: this.state.data + 1})
//    }
//    render() {
//       return (
//          <div>
//             <button onClick = {this.setNewNumber}>INCREMENT</button>
//             <Content myNumber = {this.state.data}></Content>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//   // // Warning: componentWillMount has been renamed, and is not recommended for use.
//   //  componentWillMount() {
//   //     console.log('Component WILL MOUNT!')
//   //  }
//   //  // Warning: componentWillReceiveProps has been renamed, and is not recommended for use
//   //  componentWillReceiveProps(newProps) {    
//   //     console.log('Component WILL RECIEVE PROPS!')
//   //  }
//   //  // Warning: componentWillUpdate has been renamed, and is not recommended for use
//   //  componentWillUpdate(nextProps, nextState) {
//   //     console.log('Component WILL UPDATE!');
//   //  }

//    componentDidMount() {
//       console.log('Component DID MOUNT!')
//    }
//    shouldComponentUpdate(newProps, newState) {
//       return true;
//    }
//    componentDidUpdate(prevProps, prevState) {
//       console.log('Component DID UPDATE!')
//    }
//    componentWillUnmount() {
//       console.log('Component WILL UNMOUNT!')
//    }

//    render() {
//       return (
//          <div>
//             <h3>{this.props.myNumber}</h3>
//          </div>
//       );
//    }
// }
// export default App;

/**
 * -------------------------
 * 	Component API
 * -------------------------
 * - setState() method is used to only add changes to the original state.
 * - forceUpdate() method is used to update the component.
 * - findDOMNode() method is used For DOM manipulation.
 */
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: []
//     }

//     this.setStateHandler = this.setStateHandler.bind(this);
//     this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
//     this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
//   };
//   setStateHandler() {
//     var item = "setState..."
//     var myArray = this.state.data.slice();
//     myArray.push(item);
//     this.setState({ data: myArray })
//   };
//   forceUpdateHandler() {
//     this.forceUpdate();
//   };
//   findDomNodeHandler() {
//     var myDiv = document.getElementById('myDiv');
//     ReactDOM.findDOMNode(myDiv).style.color = 'green';
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.setStateHandler}>SET STATE</button>
//         <h4>State Array: {this.state.data}</h4>
//         <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
//         <h4>Random number: {Math.random()}</h4>
//         <button onClick={this.findDomNodeHandler}>FIND DOME NODE</button>
//         <div id="myDiv">NODE</div>
//       </div>
//     );
//   }
// }
// export default App;



// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: 0,
//       jsonData:
//         [
//           {
//             "id": 1,
//             "name": "Foo",
//             "age": "10"
//           },
//           {
//             "id": 2,
//             "name": "Bar",
//             "age": "20"
//           },
//           {
//             "id": 3,
//             "name": "Baz",
//             "age": "30"
//           }
//         ]
//     }
//     this.increment = this.increment.bind(this);
//   }
//   increment() {
//     this.setState(
//       { counter: this.state.counter + 1 }
//     )
//   }
//   render() {
//     return (
//       <div>
//         <Header />
//         <table>
//           <tbody>
//             {
//               this.state.jsonData.map(
//                 (person, i) => <TableRow key={i} data={person} />
//                 // key = {i} : is for performance
//               )
//             }
//           </tbody>
//         </table>
//         <button onClick={this.increment}>Like</button>
//         <p>{this.state.counter}</p>
//         <PropValidator />
//       </div>
//     );
//   }
// }
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Header</h1>
//       </div>
//     );
//   }
// }
// class TableRow extends React.Component {
//   render() {
//     return (
//       <tr>
//         <td>{this.props.data.id}</td>
//         <td>{this.props.data.name}</td>
//         <td>{this.props.data.age}</td>
//       </tr>
//     );
//   }
// }

// class PropValidator extends React.Component {
//   render() {
//     return (
//       <div>
//         <h3>Array: {this.props.propArray}</h3>
//         <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
//         <h3>Func: {this.props.propFunc(3)}</h3>
//         <h3>Number: {this.props.propNumber}</h3>
//         <h3>String: {this.props.propString}</h3>
//         <h3>Object: {this.props.propObject.objectName1}</h3>
//         <h3>Object: {this.props.propObject.objectName2}</h3>
//         <h3>Object: {this.props.propObject.objectName3}</h3>
//       </div>
//     );
//   }
// }

// PropValidator.propTypes = {
//   propArray: PropTypes.array.isRequired,
//   propBool: PropTypes.bool.isRequired,
//   propFunc: PropTypes.func,
//   propNumber: PropTypes.number,
//   propString: PropTypes.string,
//   propObject: PropTypes.object
// }

// PropValidator.defaultProps = {
//   propArray: [1, 2, 3, 4, 5],
//   propBool: true,
//   propFunc: function (e) { return e },
//   propNumber: 1,
//   propString: "String value...",

//   propObject: {
//     objectName1: "objectValue1",
//     objectName2: "objectValue2",
//     objectName3: "objectValue3"
//   }
// }

// export default App;
