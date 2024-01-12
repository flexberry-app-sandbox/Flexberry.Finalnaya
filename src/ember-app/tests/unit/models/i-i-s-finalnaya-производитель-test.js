import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-finalnaya-производитель', 'Unit | Model | i-i-s-finalnaya-производитель', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-finalnaya-документы',
    'model:i-i-s-finalnaya-должность',
    'model:i-i-s-finalnaya-запись',
    'model:i-i-s-finalnaya-кабинет',
    'model:i-i-s-finalnaya-клиент',
    'model:i-i-s-finalnaya-материал',
    'model:i-i-s-finalnaya-оказание-услуг',
    'model:i-i-s-finalnaya-оплата',
    'model:i-i-s-finalnaya-производитель',
    'model:i-i-s-finalnaya-состав-услуги',
    'model:i-i-s-finalnaya-сотрудник',
    'model:i-i-s-finalnaya-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
