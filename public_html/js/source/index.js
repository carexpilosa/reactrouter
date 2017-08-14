import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import createHashHistory from 'history/es/createHashHistory';

const history = createHashHistory({
  queryKey: false
});

export class HelloAgain extends React.Component {
  render() {
    return (<div>
      <h1>Hello again</h1>
      <Link to="/aboutthatall">About that all</Link>
    </div>);
  }
}

export class AboutThatAll extends React.Component {
  
  render() {
    return (<div>
      <h1>This is about all You want to know...</h1>
      <Link to="/helloagain">Take me home, Contry Roads...</Link>
    </div>);
  }
}

ReactDOM.render(
  <Router history={history}>
    <div>
      <Redirect from="/" to="helloagain" />
      <Route path="/helloagain" component={HelloAgain} />
      <Route path="/aboutthatall" component={AboutThatAll} />
    </div>
  </Router>,
  document.getElementById('reactor')
);

/*ReactDOM.render(
  <div>
    <HelloAgain />
    <AboutThatAll />
  </div>,
  document.getElementById('reactor')
);*/

/*ReactDOM.render(
  <HelloAgain />,
  document.getElementById('reactor')
);*/
