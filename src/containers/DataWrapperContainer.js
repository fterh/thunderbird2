// @flow

import { connect } from 'react-redux';
import {
  updateLoaderLoaded,
  updateLoaderStatus,
  updateLoaderError
} from './../actions/loader';
import { updateLocation } from './../actions/location';
import { updatePayload } from './../actions/payload';
import { updateRender } from './../actions/render';

import DataWrapper from './../components/DataWrapper';

import type { State, Dispatch } from './../types/index';

const mapStateToProps = (state: State) => {
  return {
    loader: state.loader,
    location: state.location,
    payload: state.payload,
    render: state.render,
    state: state // for debugging during development
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateLoaderLoaded: (loaded) => { dispatch(updateLoaderLoaded(loaded)) },
    updateLoaderStatus: (status) => { dispatch(updateLoaderStatus(status)) },
    updateLoaderError: (error) => { dispatch(updateLoaderError(error)) },
    updateLocation: (position) => { dispatch(updateLocation(position)) },
    updatePayload: (payload) => { dispatch(updatePayload(payload)) },
    updateRender: (data) => { dispatch(updateRender(data)) }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataWrapper);