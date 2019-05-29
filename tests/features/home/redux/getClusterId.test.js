import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import nock from 'nock';
import { expect } from 'chai';

import {
  HOME_GET_CLUSTER_ID_BEGIN,
  HOME_GET_CLUSTER_ID_SUCCESS,
  HOME_GET_CLUSTER_ID_FAILURE,
  HOME_GET_CLUSTER_ID_DISMISS_ERROR,
} from 'src/features/home/redux/constants';

import {
  getClusterId,
  dismissGetClusterIdError,
  doGetClusterId,
  reducer,
} from 'src/features/home/redux/getClusterId';

describe('home/redux/getClusterId', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  // redux action tests
  it('correct action by getClusterId', () => {
    expect(getClusterId()).to.have.property('type', HOME_GET_CLUSTER_ID_BEGIN);
  });

  it('returns correct action by dismissGetClusterIdError', () => {
    expect(dismissGetClusterIdError()).to.have.property('type', HOME_GET_CLUSTER_ID_DISMISS_ERROR);
  });

  // saga tests
  const generator = doGetClusterId();

  it('calls delay when receives a begin action', () => {
    // Delay is just a sample, this should be replaced by real sync request.
    expect(generator.next().value).to.deep.equal(call(delay, 20));
  });

  it('dispatches HOME_GET_CLUSTER_ID_SUCCESS action when succeeded', () => {
    expect(generator.next('something').value).to.deep.equal(put({
      type: HOME_GET_CLUSTER_ID_SUCCESS,
      data: 'something',
    }));
  });

  it('dispatches HOME_GET_CLUSTER_ID_FAILURE action when failed', () => {
    const generatorForError = doGetClusterId();
    generatorForError.next(); // call delay(20)
    const err = new Error('errored');
    expect(generatorForError.throw(err).value).to.deep.equal(put({
      type: HOME_GET_CLUSTER_ID_FAILURE,
      data: { error: err },
    }));
  });

  it('returns done when finished', () => {
    expect(generator.next()).to.deep.equal({ done: true, value: undefined });
  });

  // reducer tests
  it('handles action type HOME_GET_CLUSTER_ID_BEGIN correctly', () => {
    const prevState = { getClusterIdPending: false };
    const state = reducer(
      prevState,
      { type: HOME_GET_CLUSTER_ID_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getClusterIdPending).to.be.true;
  });

  it('handles action type HOME_GET_CLUSTER_ID_SUCCESS correctly', () => {
    const prevState = { getClusterIdPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_CLUSTER_ID_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getClusterIdPending).to.be.false;
  });

  it('handles action type HOME_GET_CLUSTER_ID_FAILURE correctly', () => {
    const prevState = { getClusterIdPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_CLUSTER_ID_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getClusterIdPending).to.be.false;
    expect(state.getClusterIdError).to.exist;
  });

  it('handles action type HOME_GET_CLUSTER_ID_DISMISS_ERROR correctly', () => {
    const prevState = { getClusterIdError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_GET_CLUSTER_ID_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getClusterIdError).to.be.null;
  });
});