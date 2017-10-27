import {h} from 'muve';

import {getModel, setModel} from '../model';

let intervalId = -1;

/* UPDATE */

const updateCounter = value => {
  const {example} = getModel();
  setModel({example: {...example, counter: example.counter + value}});
};

/* VIEW */

const Content = props => [
  <h2 class="title">Hello, Muve</h2>,
  !!props.counter && <p>Count: {props.counter}</p>,
];

const example = model => (
  <section class="section">
    <div class="container has-text-centered">
      <Content counter={model.counter} message={model.message} />
    </div>
  </section>
);

export function didMount() {
  intervalId = setInterval(updateCounter, 1250, 1);
}

export function willUnmount() {
  clearInterval(intervalId);
}

export default example;
