var React    = require('react'),
		ReactDOM = require('react-dom');

var data = [
	{id: 1, author: "Afonso", text: "heheh"},
	{id: 2, author: "Raquel", text: "kkkkk"}
];

var CommentList = React.createClass({
	render: function() {
		var commentNodes = this.props.data.map(function(comment) {
			return (
				<Comment author={comment.author} key={comment.id}>
					{comment.text}
				</Comment>
			);
		});
		return (
			<div>
				{commentNodes}
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function(){
		return (
			<div>Comment Form</div>
		)
	}
});

var Comment = React.createClass({
	render: function(){
		return (
			<div>
				<h2>{this.props.author}</h2>
				{this.props.children}
			</div>
		)
	}
});

var CommentBox = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Hello</h1>
				<CommentList data={this.props.data}/>
				<CommentForm/>
			</div>
		)
	}
});

ReactDOM.render(
	<CommentBox data={data}/>,
	document.getElementById('app')
);
