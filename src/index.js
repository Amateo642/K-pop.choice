import {Controller} from './Controller';
import {db} from './db';
import {View} from './View';
import {Model} from './Model';
import './scss/style.scss';

const appEl = document.getElementById('app');
const view = new View(appEl);
const model = new Model(db);
const controller = new Controller(model, view);
