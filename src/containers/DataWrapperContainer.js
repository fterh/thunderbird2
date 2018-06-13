import { connect } from 'react-redux';
import {
  updateLoaderLoaded,
  updateLoaderStatus,
  updateLoaderError
} from './../actions/loader';
import { updateLocation } from './../actions/location';

import DataWrapper from './../components/DataWrapper';

const mapStateToProps = (state) => {
  return {
    loader: state.loader,
    store: state // for debugging during development
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoaderLoaded: (loaded) => { dispatch(updateLoaderLoaded(loaded)) },
    updateLoaderStatus: (status) => { dispatch(updateLoaderStatus(status)) },
    updateLoaderError: (error) => { dispatch(updateLoaderError(error)) },
    updateLocation: (position) => { dispatch(updateLocation(position)) }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataWrapper);