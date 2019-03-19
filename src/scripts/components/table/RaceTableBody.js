import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchAthletes, fetchCaptures } from '../../actions';

const POLL_INTERVAL = 300;

class RaceTableBody extends React.Component {
	componentDidMount() {
		this.props.fetchAthletes();
		setInterval(() => {
			if (window.isTabActive) {
				this.props.fetchCaptures();
			}
		}, POLL_INTERVAL);
	}

	componentWillUnmount() {
		clearInterval(this.props.fetchCaptures());
	}

	getReaderIdByOrder(readerOrder) {
		let readers = this.props.readers || [];
		return readers[readerOrder];
	}
	getTimestampByReader(athleteId, readerOrder) {
		let reader = this.getReaderIdByOrder(readerOrder);
		let readerId = reader ? reader.id : undefined;
		return readerId ? this.getTimestampByAtheleteId(athleteId, readerId) : '';
	}
	getTimestampByAtheleteId(id, readerId) {
		let captures = _.filter(
			this.props.captures,
			({ athlete, reader_id }) => athlete.id === id && reader_id === readerId
		);
		let capture = _.maxBy(captures, ({ captured }) => captured);
		return capture ? capture.timestamp.format('HH:mm:ss.SSS') : undefined;
	}
	renderList() {
		let finalCorridor = _.filter(this.props.athletes, ({ id }) => {
			return !!this.getTimestampByReader(id, 0);
		});
		let defineTimestamp = _.map(finalCorridor, (athlete) => {
			return Object.assign({}, athlete, {
				first: this.getTimestampByReader(athlete.id, 0),
				second: this.getTimestampByReader(athlete.id, 1)
			});
		});
		let sorted = _.sortBy(defineTimestamp, [ (athleteObj) => athleteObj.second, (athleteObj) => athleteObj.first ]);
		return _.map(sorted, (athlete) => {
			return (
				<tr className="item" key={athlete.id}>
					<td className="item__text item__text--name">{athlete.name}</td>
					<td className="item__text">{athlete.first}</td>
					<td className="item__text">{athlete.second}</td>
				</tr>
			);
		});
	}
	render() {
		return <tbody className="table__list">{this.renderList()}</tbody>;
	}
}

window.isTabActive = true;

window.onfocus = function() {
	window.isTabActive = true;
};

window.onblur = function() {
	window.isTabActive = false;
};

const mapStateToProps = (state) => {
	return {
		athletes: state.athletes,
		captures: state.captures,
		readers: state.readers
	};
};

export default connect(mapStateToProps, { fetchAthletes, fetchCaptures })(RaceTableBody);
