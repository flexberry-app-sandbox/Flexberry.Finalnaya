import { Serializer as СотрудникSerializer } from
  '../mixins/regenerated/serializers/i-i-s-finalnaya-сотрудник';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СотрудникSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
