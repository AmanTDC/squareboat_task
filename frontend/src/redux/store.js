import { createStore} from 'redux';
import createRootReducer from './reducers/rootReducer';

const configureStore = ()=>{
    return createStore(createRootReducer())
}
export default configureStore