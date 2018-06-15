import { connect } from 'react-redux';
import {
  updateLoaderLoaded,
  updateLoaderStatus,
  updateLoaderError
} from './../actions/loader';
import { updateLocation } from './../actions/location';
import { updatePayload } from './../actions/payload';

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
    updateLocation: (position) => { dispatch(updateLocation(position)) },
    updatePayload: (payload) => { dispatch(updatePayload(payload)) }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataWrapper);