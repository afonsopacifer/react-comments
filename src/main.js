var React    = require('react'),
    ReactDOM = require('react-dom'),
    $        = require('jquery');

// <Comment />
// ----------------------------------
var Comment = React.createClass({
  render() {
    return (
			<div className="comment">
				<div>
					<img src={this.props.avatarUrl} className="avatar"/>
				</div>
				<div className="name">
					{this.props.name}
				</div>
				<div className="text">
					{this.props.children}
				</div>
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
    var avatarUrl = "src/img/guest.jpg";
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
      url: 'src/defaultComments.json',
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
      <div className="comment-box">
        <CommentList comments={this.state.data}/>
        <div className="comment-form">
					<img src="src/img/guest.jpg" className="avatar"/>
          <input ref="name" placeholder="Your name" className="input-text"/>
          <textarea ref="text" placeholder="Your comment" className="textarea"></textarea>
          <button onClick={this.insertComment} className="btn">Guest Comment</button>
        </div>
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
