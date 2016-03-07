var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var ReactDOM = require('react-dom')
var React = require('react')

var About = React.createClass({  

  render: function() {
    return (
      <div>
        <h1>About pagee</h1>
        <h2>this is some shit</h2>
      </div>
    );
  } 
  }) ;

var Inbox = React.createClass({  
  render: function() {
    return (
      <div>
        <h1>Inbox page</h1>
        {this.props.children}
      </div>
    );
  } 
  }) ;

var Message = React.createClass({
  render : function() {
    return <h3>Message for user: {this.props.params.id} </h3>
  }
});

var InboxStats = React.createClass({
  render : function() {
    return <h3>Stats</h3>
  }
});

var Header = React.createClass({
  render : function() {
    return (
      <div className="navbar navbar-fixed-top navbar-inverse" >
            <div className="container">
              <Link to="/" id="logo" >KnowledgeStream</Link>
              <nav>
                  <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                    <li className="dropdown">
                      <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                        Account <b className="caret"></b>
                      </Link>
                      <ul className="dropdown-menu">
                        <li><Link to="/about">Profilee</Link></li>
                        <li><Link to="/inbox">Settings</Link></li>
                        <li className="divider"></li>
                        <li>
                           <Link to="/about">Logout</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
              </nav>
            </div>
          </div>
      );
  }
});

var Footer = React.createClass({
  render : function() {
    return (
      <footer className="footer">
          <small>
            The <a href="http://www.railstutorial.org/">Ruby on Rails Tutorial</a>
            by <a href="http://www.michaelhartl.com/">Michael Hartl</a>
          </small>
          <nav>
            <ul>
               <li><Link to="/about">Help</Link></li>
               <li><Link to="/inbox">Contacts</Link></li>
               <li><a href="http://news.railstutorial.org/">News</a></li>
            </ul>
          </nav>
        </footer>
      ) ;
  }
});

var App = React.createClass({
  render : function() {
    return (
      <div>
        <Header />
        <div className="container">
        {this.props.children}
      </div>
      <Footer />
      </div>
    )
  }
});

ReactDOM.render((
  <Router >
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} >
           <IndexRoute component={InboxStats}/>
           <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
    
  </Router>
), document.getElementById('mount-point')) ;

