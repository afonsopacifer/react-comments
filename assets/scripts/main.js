var React    = require('react'),
		ReactDOM = require('react-dom');

var CommentBox = React.createClass({
	render: function(){
		return (<h1>Hello</h1>)
	}
});

ReactDOM.render(
	<CommentBox/>,
	document.getElementById('app')
);
