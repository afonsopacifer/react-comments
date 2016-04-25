var React    = require('react'),
    ReactDOM = require('react-dom'),
    $        = require('jquery');

// <Comment />
// ----------------------------------
var Comment = React.createClass({
  render() {
    return (
			<div>
			<img src={this.props.avatarUrl} width="50px"/>
			{this.props.name}
			{this.props.children}
		</div>
		)
  }
});

// <CommentList />
// ----------------------------------
var CommentList = React.createClass({
  render() {
    var commentNodes = this.props.comments.map(function(comment) {
      return (
        <Comment key={comment.id} name={comment.name} avatarUrl={comment.avatarUrl}>
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

  insertComment() {
    var oldState = this.state.data;
    var id = oldState.length + 2;
    var avatarUrl = "https://avatars3.githubusercontent.com/u/6748866?v=3&s=460";
    var name = this.refs.name.value;
		var text = this.refs.text.value;

    var newState = oldState.push({
			"id": id,
 			"avatarUrl": avatarUrl,
 			"name": name,
 			"text": text
		});

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
          <input ref="name" placeholder="Your name"/>
          <input ref="text" placeholder="Your comment"/>
          <button onClick={this.insertComment}>Add</button>
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
