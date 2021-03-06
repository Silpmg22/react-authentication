import * as types from '../../../src/js/utils/constants';
import {
  onSnackBarChange,
  onUserLogout,
  validateUser,
  validateUserError,
  validateUserSuccess,
} from '../../../src/js/actions';
import { dispatch } from 'rxjs/internal/observable/pairs';

describe('ACTIONS - Login', () => {

  it('Should create and action - "validateUserSuccess"', () => {
    const data = {
      username: 'test'
    };

    const expectedAction = {
      type: types.LOGIN_FORM_VALIDATING_USER_SUCCESS,
      payload: data
    };

    expect(validateUserSuccess(data)).to.be.deep.equal(expectedAction);
  });

  it('Should create and action - "validateUserError"', () => {
    const err = {
      username: 'test'
    };

    const expectedAction = {
      type: types.LOGIN_FORM_VALIDATING_USER_ERROR,
      payload: err
    };

    expect(validateUserError(err)).to.be.deep.equal(expectedAction);
  });

  it('Should create and action - "onSnackBarChange" set TRUE', () => {
    const status = true;

    const expectedAction = {
      type: types.SNACKBAR_ONCHANGE,
      payload: status
    };

    expect(onSnackBarChange(status)).to.be.deep.equal(expectedAction);
  });

  it('Should create and action - "onSnackBarChange" set FALSE', () => {
    const status = false;

    const expectedAction = {
      type: types.SNACKBAR_ONCHANGE,
      payload: status
    };

    expect(onSnackBarChange(status)).to.be.deep.equal(expectedAction);
  });

  it('Should create and action - "validateUser"', () => {
    const username = 'user1';
    const password = 'pass1';

    const expectedAction = {
      type: types.LOGIN_FORM_VALIDATING_USER,
      payload: {
        username,
        password
      }
    };

    expect(validateUser(username, password)).to.be.deep.equal(expectedAction);
  });

  it('Should create and action - "onUserLogout"', () => {
    const dispatch = spy();
    const expectCall = {
      type: types.USER_LOGOUT
    };

    onUserLogout()(dispatch);
    expect(dispatch).to.have.been.calledWith(expectCall);
  });
});