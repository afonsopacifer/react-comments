var React    = require('react'),
		ReactDOM = require('react-dom');

var CommentBox = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Hello</h1>
			</div>
		)
	}
});

ReactDOM.render(
	<CommentBox />,
	document.getElementById('app')
);
