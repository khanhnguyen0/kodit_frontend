import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import nock from 'nock';
import { expect } from 'chai';

import {
  HOME_FETCH_CLUSTER_BEGIN,
  HOME_FETCH_CLUSTER_SUCCESS,
  HOME_FETCH_CLUSTER_FAILURE,
  HOME_FETCH_CLUSTER_DISMISS_ERROR,
} from 'src/features/home/redux/constants';

import {
  fetchCluster,
  dismissFetchClusterError,
  doFetchCluster,
  reducer,
} from 'src/features/home/redux/fetchCluster';

describe('home/redux/fetchCluster', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  // redux action tests
  it('correct action by fetchCluster', () => {
    expect(fetchCluster()).to.have.property('type', HOME_FETCH_CLUSTER_BEGIN);
  });

  it('returns correct action by dismissFetchClusterError', () => {
    expect(dismissFetchClusterError()).to.have.property('type', HOME_FETCH_CLUSTER_DISMISS_ERROR);
  });

  // saga tests
  const generator = doFetchCluster();

  it('calls delay when receives a begin action', () => {
    // Delay is just a sample, this should be replaced by real sync request.
    expect(generator.next().value).to.deep.equal(call(delay, 20));
  });

  it('dispatches HOME_FETCH_CLUSTER_SUCCESS action when succeeded', () => {
    expect(generator.next('something').value).to.deep.equal(put({
      type: HOME_FETCH_CLUSTER_SUCCESS,
      data: 'something',
    }));
  });

  it('dispatches HOME_FETCH_CLUSTER_FAILURE action when failed', () => {
    const generatorForError = doFetchCluster();
    generatorForError.next(); // call delay(20)
    const err = new Error('errored');
    expect(generatorForError.throw(err).value).to.deep.equal(put({
      type: HOME_FETCH_CLUSTER_FAILURE,
      data: { error: err },
    }));
  });

  it('returns done when finished', () => {
    expect(generator.next()).to.deep.equal({ done: true, value: undefined });
  });

  // reducer tests
  it('handles action type HOME_FETCH_CLUSTER_BEGIN correctly', () => {
    const prevState = { fetchClusterPending: false };
    const state = reducer(
      prevState,
      { type: HOME_FETCH_CLUSTER_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchClusterPending).to.be.true;
  });

  it('handles action type HOME_FETCH_CLUSTER_SUCCESS correctly', () => {
    const prevState = { fetchClusterPending: true };
    const state = reducer(
      prevState,
      { type: HOME_FETCH_CLUSTER_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchClusterPending).to.be.false;
  });

  it('handles action type HOME_FETCH_CLUSTER_FAILURE correctly', () => {
    const prevState = { fetchClusterPending: true };
    const state = reducer(
      prevState,
      { type: HOME_FETCH_CLUSTER_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchClusterPending).to.be.false;
    expect(state.fetchClusterError).to.exist;
  });

  it('handles action type HOME_FETCH_CLUSTER_DISMISS_ERROR correctly', () => {
    const prevState = { fetchClusterError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_FETCH_CLUSTER_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchClusterError).to.be.null;
  });
});