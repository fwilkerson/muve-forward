import muve, {h, interact} from 'muve';

const model = {message: 'Hello, Muve', counter: 0};

const {getModel, setModel} = interact(model, (name, update) => {
  console.info(name, update);
});

const updateCounter = value => {
  const {counter} = getModel();
  setModel({counter: counter + value}, 'UPDATE_COUNTER');
};

const styles = {
  centerText: {textAlign: 'center'},
};

const Content = props => [
  <h2 class="title">{props.message}</h2>,
  !!props.counter && <p>Count: {props.counter}</p>,
];

const view = model => (
  <section class="section">
    <div class="container" style={styles.centerText}>
      <Content {...model} />
    </div>
  </section>
);

muve(view, model, document.getElementById('root'));

setInterval(updateCounter, 1250, 1);
