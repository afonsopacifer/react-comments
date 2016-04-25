var React    = require('react'),
    ReactDOM = require('react-dom'),
    $        = require('jquery');

// <Comment />
// ----------------------------------
var Comment = React.createClass({
  render() {
    return <div>{this.props.children}</div>
  }
});

// <CommentList />
// ----------------------------------
var CommentList = React.createClass({
  render() {
    var commentNodes = this.props.comments.map(function(comment) {
      return (
        <Comment key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div>
        {commentNodes}
      </div>
    )
  }
});

// <CommentBox />
// ----------------------------------
var CommentBox = React.createClass({

  getInitialState() {
    return {data: []};
  },

  save() {
    var oldState = this.state.data;
    var id = oldState.length + 2;
    var text = this.refs.text.value;
    var newState = oldState.push({"id":id, "text": text});
    this.setState({data: this.state.data});
  },

 loadJSON() {
    $.ajax({
      url: 'defaultComments.json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  },

  componentDidMount() {
    this.loadJSON();
    //setInterval(this.loadJSON, 2000);
  },

  render() {
    return (
      <div>
        <div>
          <input ref="text" placeholder="Your comment..."/>
          <button onClick={this.save}>Add</button>
        </div>
        <CommentList comments={this.state.data}/>
      </div>
    )
  }

});

// Final rander :)
// ----------------------------------
ReactDOM.render(
  <CommentBox/>,
  document.getElementById('app')
);
