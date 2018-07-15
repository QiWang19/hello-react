class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options Component here!
      </div>
    );
  }
}


class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption component here
      </div>
    );
  }
}

// dif between component VS html element
const jsx = (
  <div>
    <h1>
      Title
    </h1>
    <Header></Header>
    <Action></Action>
    <Options></Options>
    <AddOption></AddOption>
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));