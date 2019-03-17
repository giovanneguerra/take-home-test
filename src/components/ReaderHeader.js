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
        <th>
          <td>Name</td>
          <td>{this.props.readers[0].name}</td>
          <td>{this.props.readers[1].name}</td>
        </th>
      );
    } else {
      return <th />;
    }
  }

  render() {
    return <thead className="reader__list">{this.renderList()}</thead>;
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
