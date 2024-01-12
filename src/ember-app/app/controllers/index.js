import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.finalnaya.caption'),
          title: i18n.t('forms.application.sitemap.finalnaya.title'),
          children: [{
            link: 'i-i-s-finalnaya-материал-l',
            caption: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-материал-l.caption'),
            title: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-материал-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-finalnaya-оплата-l',
            caption: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-оплата-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-finalnaya-услуга-l',
            caption: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-услуга-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-finalnaya-должность-l',
            caption: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-должность-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-finalnaya-кабинет-l',
            caption: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-кабинет-l.caption'),
            title: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-кабинет-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-finalnaya-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-сотрудник-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-finalnaya-запись-l',
            caption: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-запись-l.caption'),
            title: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-запись-l.title'),
            children: null
          }, {
            link: 'i-i-s-finalnaya-производитель-l',
            caption: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-производитель-l.caption'),
            title: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-производитель-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-finalnaya-клиент-l',
            caption: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.finalnaya.i-i-s-finalnaya-клиент-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})