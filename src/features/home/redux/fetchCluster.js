import { delay, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  HOME_FETCH_CLUSTER_BEGIN,
  HOME_FETCH_CLUSTER_SUCCESS,
  HOME_FETCH_CLUSTER_FAILURE,
  HOME_FETCH_CLUSTER_DISMISS_ERROR,
  API
} from './constants';
import axios from 'axios';

export function fetchCluster(clusterId="") {
  // If need to pass args to saga, pass it with the begin action.
  return {
    type: HOME_FETCH_CLUSTER_BEGIN,
    clusterId
  };
}

export function dismissFetchClusterError() {
  return {
    type: HOME_FETCH_CLUSTER_DISMISS_ERROR,
  };
}

// worker Saga: will be fired on HOME_FETCH_CLUSTER_BEGIN actions
export function* doFetchCluster(action) {
  // If necessary, use argument to receive the begin action with parameters.
  let res;
  try {
    // Do Ajax call or other async request here. delay(20) is just a placeholder.
    res = yield call(axios, `${API}/cluster/${action.clusterId}`);
  } catch (err) {
    yield put({
      type: HOME_FETCH_CLUSTER_FAILURE,
      data: { error: err },
    });
    return;
  }
  // Dispatch success action out of try/catch so that render errors are not catched.
  yield put({
    type: HOME_FETCH_CLUSTER_SUCCESS,
    data: res.data,
  });
}

/*
  Alternatively you may use takeEvery.

  takeLatest does not allow concurrent requests. If an action gets
  dispatched while another is already pending, that pending one is cancelled
  and only the latest one will be run.
*/
export function* watchFetchCluster() {
  yield takeLatest(HOME_FETCH_CLUSTER_BEGIN, doFetchCluster);
}

// Redux reducer
export function reducer(state, action) {
  switch (action.type) {
    case HOME_FETCH_CLUSTER_BEGIN:
      return {
        ...state,
        fetchClusterPending: true,
        fetchClusterError: null,
      };

    case HOME_FETCH_CLUSTER_SUCCESS:
      return {
        ...state,
        clusters: action.data.records,
        fetchClusterPending: false,
        fetchClusterError: null,
      };

    case HOME_FETCH_CLUSTER_FAILURE:
      return {
        ...state,
        fetchClusterPending: false,
        fetchClusterError: action.data.error,
      };

    case HOME_FETCH_CLUSTER_DISMISS_ERROR:
      return {
        ...state,
        fetchClusterError: null,
      };

    default:
      return state;
  }
}
