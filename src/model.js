import {interact} from 'muve';

export const initialModel = {
  example: {
    counter: 0,
  },
  activeView: null,
  route: history.state || {path: window.location.pathname},
};

export const {getModel, setModel} = interact(initialModel, console.log);

export const setRoute = path => {
  const {activeView} = getModel();

  if (activeView.willUnmount) activeView.willUnmount();

  const route = {path};
  history.pushState(route, path, path);
  setModel({route, activeView: null});
};

export const setActiveView = result => {
  setModel({activeView: result});
  if (result.didMount) result.didMount();
};

export const handleRouteChanged = event => {
  setRoute(event.state ? event.state.path : window.location.pathname);
};
