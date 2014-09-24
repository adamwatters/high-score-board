/** @jsx React.DOM */

var HighScoreTable = React.createClass({
	render:	function() {
		var rows = this.props.data.map(function(row, i){
			return (<HighScoreRow ranking={row.ranking} name={row.name} score={row.score} key={i} />);
		});
		return (
			<table className='high-score-table'>
				<tbody>
					<tr><td className='high-score-header' colSpan='3'>HIGH SCOREZ</td></tr>
					<HighScoreRow ranking='RANK' name='NAME' score='SCORE'/>
					{rows}
				</tbody>
    		</table>
		);
	}
});

var HighScoreRow = React.createClass({
	render: function() {
		return (
			<tr className='high-score-row'>
				<td className='high-score-data'>{this.props.ranking}</td>
				<td className='high-score-data'>{this.props.name}</td>
				<td className='high-score-data'>{this.props.score}</td>
			</tr>
		);
	}
});

var HighScoreInput = React.createClass({

	handleSubmit: function(event) {

		event.preventDefault();

		var newEntry = {

			ranking: this.refs.rankIn.getDOMNode().value, 
			name: this.refs.nameIn.getDOMNode().value, 
			score: this.refs.scoreIn.getDOMNode().value

		};

		this.props.updateData(newEntry);

	},

	render: function() {
		return (
			<form>
				<input ref='nameIn' type='text'>name</input>
				<input ref='scoreIn'type='text'>score</input>
				<input ref='rankIn'type='text'>rank</input>
				<button onClick={this.handleSubmit} type="submit">input</button>
			</form>
		);
	}
});

var App = React.createClass({

	getInitialState: function(){

		return {
			data: [
  				{ranking: 1, name: 'chaz', score: 99},
  				{ranking: 3, name: 'carl', score: 60},
  				{ranking: 2, name: 'mike', score: 95}
			]
		};
	},

	updateData: function(entry){

		this.setState({
			data: this.state.data.concat([entry])
		});

	},

  	render: function() {

    	return (
    		<div>
    			<HighScoreInput updateData={this.updateData}/>
    			<HighScoreTable data={this.state.data} />
    		</div>
    	);
  	}
});

React.renderComponent(<App />,document.getElementById('wrapper'));