goog.module('org.gwtproject.i18n.shared.SafeHtmlBidiFormatter.Factory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Factory = goog.require('org.gwtproject.i18n.shared.BidiFormatterBase.Factory$impl');

let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let SafeHtmlBidiFormatter = goog.forwardDeclare('org.gwtproject.i18n.shared.SafeHtmlBidiFormatter$impl');

/**
 * @extends {Factory<SafeHtmlBidiFormatter>}
  */
class SafeHtmlBidiFormatter_Factory extends Factory {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!SafeHtmlBidiFormatter_Factory}
  * @public
  */
 static $create__() {
  SafeHtmlBidiFormatter_Factory.$clinit();
  let $instance = new SafeHtmlBidiFormatter_Factory();
  $instance.$ctor__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_Factory__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_SafeHtmlBidiFormatter_Factory__() {
  this.$ctor__org_gwtproject_i18n_shared_BidiFormatterBase_Factory__();
 }
 /**
  * @override
  * @param {Direction} contextDir
  * @param {boolean} alwaysSpan
  * @return {SafeHtmlBidiFormatter}
  * @public
  */
 m_createInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan) {
  return SafeHtmlBidiFormatter.$create__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan);
 }
 /**
  * @public
  */
 static $clinit() {
  SafeHtmlBidiFormatter_Factory.$clinit = () =>{};
  SafeHtmlBidiFormatter_Factory.$loadModules();
  Factory.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SafeHtmlBidiFormatter_Factory;
 }
 /**
  * @public
  */
 static $loadModules() {
  SafeHtmlBidiFormatter = goog.module.get('org.gwtproject.i18n.shared.SafeHtmlBidiFormatter$impl');
 }
 
}
$Util.$setClassMetadata(SafeHtmlBidiFormatter_Factory, 'org.gwtproject.i18n.shared.SafeHtmlBidiFormatter$Factory');

exports = SafeHtmlBidiFormatter_Factory; 
//# sourceMappingURL=SafeHtmlBidiFormatter$Factory.js.map