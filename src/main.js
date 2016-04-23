var React    = require('react'),
		ReactDOM = require('react-dom');

// <Input /> - Atom
var Input = React.createClass({
	render() {
		return <input placeHolder="Your comment..."/>
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
		return <div>Comment</div>
	}
});

// <CommentList /> - Molecule
var CommentList = React.createClass({
	render() {
		return (
			<div>
				<Comment />
				<Comment />
				<Comment />
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
				<CommentList />
			</div>
		)
	}
});

// ----------------------------------
// Final rander :)
// ----------------------------------
ReactDOM.render(
	<CommentBox />, document.getElementById('app')
);
