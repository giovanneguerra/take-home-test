import React, { Component } from 'react';
import RaceTableBody from './RaceTableBody';
import RaceTableHeader from './RaceTableHeader';

class RaceTable extends Component {
    render() {
        return (
            <table className="table shadow">
                <RaceTableHeader />
                <RaceTableBody />
            </table>
        );
    }
}

export default RaceTable;