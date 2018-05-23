import {h} from 'muve';

const styles = {
  loadingContainer: {
    bottom: '2rem',
    fontSize: '75px',
    position: 'fixed',
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
  <div class="loading" style={styles.loadingContainer}>
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </div>
);
