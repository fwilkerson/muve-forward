import {h} from 'muve';

import {Loading} from './components';
import {setActiveView, handleRouteChanged, setRoute} from './model';
import {AsyncView, Route, Router} from './lib';

const getLinkClasses = x =>
  `navbar-item ${x ? 'has-text-weight-semibold' : 'has-text-light'}`;

const Header = props => (
  <nav
    class="navbar is-info has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a
          class={getLinkClasses(props.route.path === '/')}
          onClick={() => setRoute('/')}
        >
          Home
        </a>
        <a
          class={getLinkClasses(props.route.path === '/example')}
          onClick={() => setRoute('/example')}
        >
          Example
        </a>
        <div class="navbar-burger burger">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start" />
      </div>
    </div>
  </nav>
);

const getDefaultProps = model => ({
  model: model,
  onComplete: setActiveView,
  placeholder: <Loading />,
  view: model.activeView && model.activeView.default,
});

const asyncHome = model => (
  <AsyncView
    {...getDefaultProps(model)}
    importView={() => import('./views/home')}
  />
);

const asyncExample = model => (
  <AsyncView
    {...getDefaultProps(model)}
    importView={() => import('./views/example')}
    model={model.example}
  />
);

const view = model => (
  <main>
    <Header route={model.route} />
    <Router model={model} routeChanged={handleRouteChanged}>
      <Route exact path="/" view={asyncHome} />
      <Route path="/example" view={asyncExample} />
    </Router>
  </main>
);

export default view;
