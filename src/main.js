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

    var commentNodes = this.props.xyz.map(function(comment) {
      return (
        <Comment>
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
				<CommentList xyz={this.props.data}/>
			</div>
		)
	}
});

// ----------------------------------
// Data Default
// ----------------------------------
var comments = [
  {text: "Hello"},
  {text: "huhuuhu"},
  {text: "Guys"}
];

// ----------------------------------
// Final rander :)
// ----------------------------------
ReactDOM.render(
	<CommentBox data={comments}/>,
	document.getElementById('app')
);
