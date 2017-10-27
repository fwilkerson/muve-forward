import {h} from 'muve';

const Layout = props => (
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container">{props.children}</div>
    </div>
  </section>
);

const home = model => (
  <Layout>
    <h1 class="title">Muve Forward</h1>
    <h2 class="subtitle">
      A starter template for building progressive web apps with Muve
    </h2>
  </Layout>
);

export default home;
