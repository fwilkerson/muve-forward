import muve, {h, interact} from 'muve';

import model from './model';
import view from './view';

muve(view, model, document.getElementById('root'));

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(reg => console.log('Registration succeeded'))
    .catch(error => console.error('Registration failed with ' + error));
}
