goog.module('org.gwtproject.i18n.shared.BidiFormatter.Factory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Factory = goog.require('org.gwtproject.i18n.shared.BidiFormatterBase.Factory$impl');

let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let BidiFormatter = goog.forwardDeclare('org.gwtproject.i18n.shared.BidiFormatter$impl');

/**
 * @extends {Factory<BidiFormatter>}
  */
class BidiFormatter_Factory extends Factory {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!BidiFormatter_Factory}
  * @public
  */
 static $create__() {
  BidiFormatter_Factory.$clinit();
  let $instance = new BidiFormatter_Factory();
  $instance.$ctor__org_gwtproject_i18n_shared_BidiFormatter_Factory__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_BidiFormatter_Factory__() {
  this.$ctor__org_gwtproject_i18n_shared_BidiFormatterBase_Factory__();
 }
 /**
  * @override
  * @param {Direction} contextDir
  * @param {boolean} alwaysSpan
  * @return {BidiFormatter}
  * @public
  */
 m_createInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan) {
  return BidiFormatter.$create__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan);
 }
 /**
  * @public
  */
 static $clinit() {
  BidiFormatter_Factory.$clinit = () =>{};
  BidiFormatter_Factory.$loadModules();
  Factory.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof BidiFormatter_Factory;
 }
 /**
  * @public
  */
 static $loadModules() {
  BidiFormatter = goog.module.get('org.gwtproject.i18n.shared.BidiFormatter$impl');
 }
 
}
$Util.$setClassMetadata(BidiFormatter_Factory, 'org.gwtproject.i18n.shared.BidiFormatter$Factory');

exports = BidiFormatter_Factory; 
//# sourceMappingURL=BidiFormatter$Factory.js.map