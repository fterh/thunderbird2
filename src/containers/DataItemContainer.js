import { connect } from 'react-redux';

import DataItem from './../components/DataItem';

function mapStateToProps(state, ownProps) {
  return {
    temperature: state.temperature,
    nowcast: state.nowcast,
    humidity: state.humidity,
    uvIndex: state.uvIndex
  };
}

export default connect(
  mapStateToProps
)(DataItem);