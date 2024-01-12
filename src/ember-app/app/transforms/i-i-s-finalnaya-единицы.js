import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЕдиницыEnum from '../enums/i-i-s-finalnaya-единицы';

export default FlexberryEnum.extend({
  enum: ЕдиницыEnum,
  sourceType: 'IIS.Finalnaya.Единицы'
});
