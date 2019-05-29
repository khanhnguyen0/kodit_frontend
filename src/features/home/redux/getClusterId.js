import { delay, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  HOME_GET_CLUSTER_ID_BEGIN,
  HOME_GET_CLUSTER_ID_SUCCESS,
  HOME_GET_CLUSTER_ID_FAILURE,
  HOME_GET_CLUSTER_ID_DISMISS_ERROR,
  API
} from './constants';
import axios from 'axios';

export function getClusterId() {
  // If need to pass args to saga, pass it with the begin action.
  return {
    type: HOME_GET_CLUSTER_ID_BEGIN,
  };
}

export function dismissGetClusterIdError() {
  return {
    type: HOME_GET_CLUSTER_ID_DISMISS_ERROR,
  };
}

// worker Saga: will be fired on HOME_GET_CLUSTER_ID_BEGIN actions
export function* doGetClusterId() {
  // If necessary, use argument to receive the begin action with parameters.
  let res;
  try {
    // Do Ajax call or other async request here. delay(20) is just a placeholder.
    res = res = yield call(axios, `${API}/cluster/ids/`);
  } catch (err) {
    yield put({
      type: HOME_GET_CLUSTER_ID_FAILURE,
      data: { error: err },
    });
    return;
  }
  // Dispatch success action out of try/catch so that render errors are not catched.
  yield put({
    type: HOME_GET_CLUSTER_ID_SUCCESS,
    data: res.data,
  });
}

/*
  Alternatively you may use takeEvery.

  takeLatest does not allow concurrent requests. If an action gets
  dispatched while another is already pending, that pending one is cancelled
  and only the latest one will be run.
*/
export function* watchGetClusterId() {
  yield takeLatest(HOME_GET_CLUSTER_ID_BEGIN, doGetClusterId);
}

// Redux reducer
export function reducer(state, action) {
  switch (action.type) {
    case HOME_GET_CLUSTER_ID_BEGIN:
      return {
        ...state,
        getClusterIdPending: true,
        getClusterIdError: null,
      };

    case HOME_GET_CLUSTER_ID_SUCCESS:
      return {
        ...state,
        clusterIds:action.data.ids,
        getClusterIdPending: false,
        getClusterIdError: null,
      };

    case HOME_GET_CLUSTER_ID_FAILURE:
      return {
        ...state,
        getClusterIdPending: false,
        getClusterIdError: action.data.error,
      };

    case HOME_GET_CLUSTER_ID_DISMISS_ERROR:
      return {
        ...state,
        getClusterIdError: null,
      };

    default:
      return state;
  }
}
