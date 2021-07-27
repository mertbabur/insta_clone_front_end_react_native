import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {postReducer, storyReducer} from "./modules/story/reducer";

const combinedReducers = combineReducers({
    story : storyReducer,
    post : postReducer
});

export default function configureStore(initialState = {}) {
    return createStore(combinedReducers, initialState, applyMiddleware(thunk));
}