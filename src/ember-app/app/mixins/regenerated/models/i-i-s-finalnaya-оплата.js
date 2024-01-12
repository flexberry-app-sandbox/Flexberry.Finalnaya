import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  оплачено: DS.attr('boolean'),
  типОплаты: DS.attr('i-i-s-finalnaya-тип-оплаты'),
  запись: DS.belongsTo('i-i-s-finalnaya-запись', { inverse: null, async: false })
});

export let ValidationRules = {
  оплачено: {
    descriptionKey: 'models.i-i-s-finalnaya-оплата.validations.оплачено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-finalnaya-оплата.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  запись: {
    descriptionKey: 'models.i-i-s-finalnaya-оплата.validations.запись.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОплатаE', 'i-i-s-finalnaya-оплата', {
    оплачено: attr('Оплачено', { index: 0 }),
    типОплаты: attr('Тип оплаты', { index: 1 })
  });

  modelClass.defineProjection('ОплатаL', 'i-i-s-finalnaya-оплата', {
    оплачено: attr('Оплачено', { index: 0 }),
    типОплаты: attr('Тип оплаты', { index: 1 })
  });
};
