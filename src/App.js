import React, { Component } from 'react';
import './App.css';


class App extends Component {

  // Make Class Constructor
  // class yang dijalankan pertama
  constructor(props) {
    super(props);
    // Make State atau scope 
    this.state = {
      items: [],
      isLoaded: false
    }
  }

// Component yang akan di jalankan / render pertama
  componentDidMount() {
    // GetData with Rest api
    fetch('https://jsonplaceholder.typicode.com/users')
      // Promise Function 
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

  render() {

    // Define Data
    var { isLoaded, items } = this.state;

    // return data atau state 
    if (!isLoaded) {
      return <div>Loading ....</div>
    }
    else {
      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                Name : {item.name}
                Email: {item.email}
              </li>
            )
            )}
          </ul>
        </div>
      );
    }
  }
}

export default App;
