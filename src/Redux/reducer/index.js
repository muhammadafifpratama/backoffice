import { combineReducers } from 'redux';
import crudreducer from './crudreducer';

export default combineReducers({
    crud: crudreducer
})