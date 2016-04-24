var React    = require('react'),
		ReactDOM = require('react-dom');

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
	render() {
		return (
			<div>
				<Form />
				<CommentList comments={this.props.data}/>
			</div>
		)
	}
});

// ----------------------------------
// Data Default
// ----------------------------------
var data = [
  {id:1, text: "Hello"},
  {id:2, text: "huhuuhu"},
  {id:3, text: "Guys"}
];

// ----------------------------------
// Final rander :)
// ----------------------------------
ReactDOM.render(
	<CommentBox data={data}/>,
	document.getElementById('app')
);
