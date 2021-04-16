import {Controller} from './Controller';
import {View} from './View';
import {Model} from './Model';
import './scss/style.scss';

const appEl = document.getElementById('app');
const view = new View(appEl);
const model = new Model();
const controller = new Controller(model, view);
