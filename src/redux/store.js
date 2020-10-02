
import { createStore, applyMiddleware, compose } from 'redux'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'
import { getFirebase } from 'react-redux-firebase'

import firebase from 'firebase/app'
import fbconfig from '../config/fbconfig'

export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbconfig)
))

export const rrfProps = {
    firebase,
    config: fbconfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

export default { store, rrfProps};