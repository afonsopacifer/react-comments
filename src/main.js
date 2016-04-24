var React    = require('react'),
		ReactDOM = require('react-dom'),
		$        = require('jquery');

// <Input /> - Atom
var Input = React.createClass({
	render() {
		return <input placeholder="Your comment..."/>
	}
});

// <Btn /> - Atom
var Btn = React.createClass({
	render() {
		return <button>Add</button>
	}
});

// <Form /> - Molecule
var Form = React.createClass({
	render() {
		return (
			<div>
				<Input />
				<Btn />
			</div>
		)
	}
});

// <Comment /> - Atom
var Comment = React.createClass({
	render() {
		return <div>{this.props.children}</div>
	}
});

// <CommentList /> - Molecule
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

// <CommentBox /> - Organism
var CommentBox = React.createClass({

 loadJSON() {
    $.ajax({
      url: 'data.json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  },

  getInitialState() {
    return {data: []};
  },

	componentDidMount() {
    this.loadJSON();
    setInterval(this.loadJSON, 2000);
  },

	render() {
		return (
			<div>
				<Form />
				<CommentList comments={this.state.data}/>
			</div>
		)
	}
});

// ----------------------------------
// Final rander :)
// ----------------------------------
ReactDOM.render(
	<CommentBox/>,
	document.getElementById('app')
);
