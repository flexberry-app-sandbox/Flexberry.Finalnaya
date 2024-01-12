import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-finalnaya-должность-l');
  this.route('i-i-s-finalnaya-должность-e',
  { path: 'i-i-s-finalnaya-должность-e/:id' });
  this.route('i-i-s-finalnaya-должность-e.new',
  { path: 'i-i-s-finalnaya-должность-e/new' });
  this.route('i-i-s-finalnaya-запись-l');
  this.route('i-i-s-finalnaya-запись-e',
  { path: 'i-i-s-finalnaya-запись-e/:id' });
  this.route('i-i-s-finalnaya-запись-e.new',
  { path: 'i-i-s-finalnaya-запись-e/new' });
  this.route('i-i-s-finalnaya-кабинет-l');
  this.route('i-i-s-finalnaya-кабинет-e',
  { path: 'i-i-s-finalnaya-кабинет-e/:id' });
  this.route('i-i-s-finalnaya-кабинет-e.new',
  { path: 'i-i-s-finalnaya-кабинет-e/new' });
  this.route('i-i-s-finalnaya-клиент-l');
  this.route('i-i-s-finalnaya-клиент-e',
  { path: 'i-i-s-finalnaya-клиент-e/:id' });
  this.route('i-i-s-finalnaya-клиент-e.new',
  { path: 'i-i-s-finalnaya-клиент-e/new' });
  this.route('i-i-s-finalnaya-материал-l');
  this.route('i-i-s-finalnaya-материал-e',
  { path: 'i-i-s-finalnaya-материал-e/:id' });
  this.route('i-i-s-finalnaya-материал-e.new',
  { path: 'i-i-s-finalnaya-материал-e/new' });
  this.route('i-i-s-finalnaya-оплата-l');
  this.route('i-i-s-finalnaya-оплата-e',
  { path: 'i-i-s-finalnaya-оплата-e/:id' });
  this.route('i-i-s-finalnaya-оплата-e.new',
  { path: 'i-i-s-finalnaya-оплата-e/new' });
  this.route('i-i-s-finalnaya-производитель-l');
  this.route('i-i-s-finalnaya-производитель-e',
  { path: 'i-i-s-finalnaya-производитель-e/:id' });
  this.route('i-i-s-finalnaya-производитель-e.new',
  { path: 'i-i-s-finalnaya-производитель-e/new' });
  this.route('i-i-s-finalnaya-сотрудник-l');
  this.route('i-i-s-finalnaya-сотрудник-e',
  { path: 'i-i-s-finalnaya-сотрудник-e/:id' });
  this.route('i-i-s-finalnaya-сотрудник-e.new',
  { path: 'i-i-s-finalnaya-сотрудник-e/new' });
  this.route('i-i-s-finalnaya-услуга-l');
  this.route('i-i-s-finalnaya-услуга-e',
  { path: 'i-i-s-finalnaya-услуга-e/:id' });
  this.route('i-i-s-finalnaya-услуга-e.new',
  { path: 'i-i-s-finalnaya-услуга-e/new' });
});

export default Router;
