goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_en$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__en extends LocalizedNamesImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocalizedNamesImpl__en} */
 static $create__() {
  LocalizedNamesImpl__en.$clinit();
  let $instance = new LocalizedNamesImpl__en();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_en__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_en__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl__();
 }
 /** @override @return {Array<?string>} */
 m_loadLikelyRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["US", "IN", "PH", "GB", "NG", "PK", "DE", "CA", "FR", "TZ"], j_l_String));
 }
 
 static $clinit() {
  LocalizedNamesImpl__en.$clinit = () =>{};
  LocalizedNamesImpl__en.$loadModules();
  LocalizedNamesImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImpl__en;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__en, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_en');

exports = LocalizedNamesImpl__en; 
//# sourceMappingURL=LocalizedNamesImpl_en.js.map