goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bo_IN$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl__bo = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bo$impl');

class LocalizedNamesImpl__bo__IN extends LocalizedNamesImpl__bo {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocalizedNamesImpl__bo__IN} */
 static $create__() {
  LocalizedNamesImpl__bo__IN.$clinit();
  let $instance = new LocalizedNamesImpl__bo__IN();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_bo_IN__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_bo_IN__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_bo__();
 }
 /** @override */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("009", "\u0F68\u0F7C\u0F64\u0F72\u0F0B\u0F61\u0F71\u0F53\u0F0B\u0F53\u0F0D");
 }
 
 static $clinit() {
  LocalizedNamesImpl__bo__IN.$clinit = () =>{};
  LocalizedNamesImpl__bo__IN.$loadModules();
  LocalizedNamesImpl__bo.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImpl__bo__IN;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__bo__IN, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bo_IN');

exports = LocalizedNamesImpl__bo__IN; 
//# sourceMappingURL=LocalizedNamesImpl_bo_IN.js.map