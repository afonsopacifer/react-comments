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
    var name = this.refs.name;
    var text = this.refs.text;

    if (name.value == "") {
      name.value = "Anonymous";
    }

    if (text.value != "") {

      var newState = oldState.push({
        "id": id,
         "avatarUrl": avatarUrl,
         "name": name.value,
         "text": text.value
      });

      this.setState({data: this.state.data});

      name.value = "";
      text.value = "";

      this.refs.erro.style.display = "none";

    } else {

      this.refs.erro.style.display = "block";

    }

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
        <div ref="commentForm" className="comment-form">
          <img src="src/img/guest.jpg" className="avatar"/>
          <input ref="name" placeholder="Who are you?" className="input-text"/>
          <textarea ref="text" placeholder="You have a comment ? *" className="textarea"></textarea>
          <span className="erro" ref="erro">* The comment field is mandatory ;)</span>
          <button onClick={this.insertComment} className="btn">Comment</button>
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
