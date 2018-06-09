import { connect } from 'react-redux';
import { updateLoaderLoaded, updateLoaderStatus } from './../actions/loader';

import DataWrapper from './../components/DataWrapper';

const mapStateToProps = (state) => {
  return {
    loader: state.loader
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoaderLoaded: (isLoaded) => { dispatch(updateLoaderLoaded(isLoaded)) },
    updateLoaderStatus: (status) => { dispatch(updateLoaderStatus(status)) }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataWrapper);