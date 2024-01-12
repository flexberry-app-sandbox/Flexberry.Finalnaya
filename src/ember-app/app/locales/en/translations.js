import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISFinalnayaДолжностьLForm from './forms/i-i-s-finalnaya-должность-l';
import IISFinalnayaЗаписьLForm from './forms/i-i-s-finalnaya-запись-l';
import IISFinalnayaКабинетLForm from './forms/i-i-s-finalnaya-кабинет-l';
import IISFinalnayaКлиентLForm from './forms/i-i-s-finalnaya-клиент-l';
import IISFinalnayaМатериалLForm from './forms/i-i-s-finalnaya-материал-l';
import IISFinalnayaОплатаLForm from './forms/i-i-s-finalnaya-оплата-l';
import IISFinalnayaПроизводительLForm from './forms/i-i-s-finalnaya-производитель-l';
import IISFinalnayaСотрудникLForm from './forms/i-i-s-finalnaya-сотрудник-l';
import IISFinalnayaУслугаLForm from './forms/i-i-s-finalnaya-услуга-l';
import IISFinalnayaДолжностьEForm from './forms/i-i-s-finalnaya-должность-e';
import IISFinalnayaЗаписьEForm from './forms/i-i-s-finalnaya-запись-e';
import IISFinalnayaКабинетEForm from './forms/i-i-s-finalnaya-кабинет-e';
import IISFinalnayaКлиентEForm from './forms/i-i-s-finalnaya-клиент-e';
import IISFinalnayaМатериалEForm from './forms/i-i-s-finalnaya-материал-e';
import IISFinalnayaОплатаEForm from './forms/i-i-s-finalnaya-оплата-e';
import IISFinalnayaПроизводительEForm from './forms/i-i-s-finalnaya-производитель-e';
import IISFinalnayaСотрудникEForm from './forms/i-i-s-finalnaya-сотрудник-e';
import IISFinalnayaУслугаEForm from './forms/i-i-s-finalnaya-услуга-e';
import IISFinalnayaДокументыModel from './models/i-i-s-finalnaya-документы';
import IISFinalnayaДолжностьModel from './models/i-i-s-finalnaya-должность';
import IISFinalnayaЗаписьModel from './models/i-i-s-finalnaya-запись';
import IISFinalnayaКабинетModel from './models/i-i-s-finalnaya-кабинет';
import IISFinalnayaКлиентModel from './models/i-i-s-finalnaya-клиент';
import IISFinalnayaМатериалModel from './models/i-i-s-finalnaya-материал';
import IISFinalnayaОказаниеУслугModel from './models/i-i-s-finalnaya-оказание-услуг';
import IISFinalnayaОплатаModel from './models/i-i-s-finalnaya-оплата';
import IISFinalnayaПроизводительModel from './models/i-i-s-finalnaya-производитель';
import IISFinalnayaСоставУслугиModel from './models/i-i-s-finalnaya-состав-услуги';
import IISFinalnayaСотрудникModel from './models/i-i-s-finalnaya-сотрудник';
import IISFinalnayaУслугаModel from './models/i-i-s-finalnaya-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-finalnaya-документы': IISFinalnayaДокументыModel,
    'i-i-s-finalnaya-должность': IISFinalnayaДолжностьModel,
    'i-i-s-finalnaya-запись': IISFinalnayaЗаписьModel,
    'i-i-s-finalnaya-кабинет': IISFinalnayaКабинетModel,
    'i-i-s-finalnaya-клиент': IISFinalnayaКлиентModel,
    'i-i-s-finalnaya-материал': IISFinalnayaМатериалModel,
    'i-i-s-finalnaya-оказание-услуг': IISFinalnayaОказаниеУслугModel,
    'i-i-s-finalnaya-оплата': IISFinalnayaОплатаModel,
    'i-i-s-finalnaya-производитель': IISFinalnayaПроизводительModel,
    'i-i-s-finalnaya-состав-услуги': IISFinalnayaСоставУслугиModel,
    'i-i-s-finalnaya-сотрудник': IISFinalnayaСотрудникModel,
    'i-i-s-finalnaya-услуга': IISFinalnayaУслугаModel
  },

  'application-name': 'Finalnaya',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Finalnaya',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Finalnaya',
          title: 'Finalnaya'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        finalnaya: {
          caption: 'Finalnaya',
          title: 'Finalnaya',
          'i-i-s-finalnaya-материал-l': {
            caption: 'Материал',
            title: ''
          },
          'i-i-s-finalnaya-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-finalnaya-услуга-l': {
            caption: 'Услуга',
            title: ''
          },
          'i-i-s-finalnaya-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-finalnaya-кабинет-l': {
            caption: 'Кабинет',
            title: ''
          },
          'i-i-s-finalnaya-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-finalnaya-запись-l': {
            caption: 'Запись',
            title: ''
          },
          'i-i-s-finalnaya-производитель-l': {
            caption: 'Производитель',
            title: ''
          },
          'i-i-s-finalnaya-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-finalnaya-должность-l': IISFinalnayaДолжностьLForm,
    'i-i-s-finalnaya-запись-l': IISFinalnayaЗаписьLForm,
    'i-i-s-finalnaya-кабинет-l': IISFinalnayaКабинетLForm,
    'i-i-s-finalnaya-клиент-l': IISFinalnayaКлиентLForm,
    'i-i-s-finalnaya-материал-l': IISFinalnayaМатериалLForm,
    'i-i-s-finalnaya-оплата-l': IISFinalnayaОплатаLForm,
    'i-i-s-finalnaya-производитель-l': IISFinalnayaПроизводительLForm,
    'i-i-s-finalnaya-сотрудник-l': IISFinalnayaСотрудникLForm,
    'i-i-s-finalnaya-услуга-l': IISFinalnayaУслугаLForm,
    'i-i-s-finalnaya-должность-e': IISFinalnayaДолжностьEForm,
    'i-i-s-finalnaya-запись-e': IISFinalnayaЗаписьEForm,
    'i-i-s-finalnaya-кабинет-e': IISFinalnayaКабинетEForm,
    'i-i-s-finalnaya-клиент-e': IISFinalnayaКлиентEForm,
    'i-i-s-finalnaya-материал-e': IISFinalnayaМатериалEForm,
    'i-i-s-finalnaya-оплата-e': IISFinalnayaОплатаEForm,
    'i-i-s-finalnaya-производитель-e': IISFinalnayaПроизводительEForm,
    'i-i-s-finalnaya-сотрудник-e': IISFinalnayaСотрудникEForm,
    'i-i-s-finalnaya-услуга-e': IISFinalnayaУслугаEForm
  },

});

export default translations;
