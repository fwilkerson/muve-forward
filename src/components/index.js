import {h} from 'muve';

const styles = {
  loadingContainer: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: 1,
  },
};

export const Layout = props => (
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container">{props.children}</div>
    </div>
  </section>
);

export const Loading = props => (
  <div style={styles.loadingContainer}>
    <span class="icon is-large has-text-info">
      <i class="fa fa-spinner fa-3x fa-pulse" />
    </span>
  </div>
);
