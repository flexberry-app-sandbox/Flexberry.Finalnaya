import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-finalnaya-кабинет', 'Unit | Serializer | i-i-s-finalnaya-кабинет', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-finalnaya-кабинет',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-finalnaya-единицы',
    'transform:i-i-s-finalnaya-тип-оплаты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
