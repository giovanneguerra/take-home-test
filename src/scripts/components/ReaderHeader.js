import React from "react";
import { connect } from "react-redux";
import { fetchReaders } from "../actions";
import _ from "lodash";

class ReaderHeader extends React.Component {
  componentDidMount() {
    this.props.fetchReaders();
  }

  renderList() {
    if (_.size(this.props.readers) > 0) {
      return (
        <tr className="header">
          <th className="header__item">Name</th>
          <th className="header__item">{this.props.readers[0].name}</th>
          <th className="header__item">{this.props.readers[1].name}</th>
        </tr>
      );
    } else {
      return <tr />;
    }
  }

  render() {
    return <thead className="table__header">{this.renderList()}</thead>;
  }
}

const mapStateToProps = state => {
  return {
    readers: state.readers
  };
};

export default connect(
  mapStateToProps,
  { fetchReaders }
)(ReaderHeader);
