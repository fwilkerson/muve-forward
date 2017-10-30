import {h} from 'muve';

import {Layout} from '../components';
import {getModel, setModel} from '../model';

/* UPDATE */

let intervalId = -1;

// Called after the view is loaded into the DOM
export function didMount() {
  intervalId = setInterval(updateCounter, 1250, 1);
}

// Called before the view is removed from the DOM
export function willUnmount() {
  clearInterval(intervalId);
}

function updateCounter(value) {
  const {example} = getModel();
  setModel({example: {...example, counter: example.counter + value}});
}

/* VIEW */

const Content = props => [
  <h2 class="title">Simple Counter</h2>,
  !!props.counter && <p class="subtitle">Count: {props.counter}</p>,
];

const example = model => (
  <Layout>
    <Content counter={model.counter} />
  </Layout>
);

export default example;
