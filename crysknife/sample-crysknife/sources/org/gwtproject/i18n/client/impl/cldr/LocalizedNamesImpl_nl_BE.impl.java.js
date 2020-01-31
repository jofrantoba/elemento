goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nl_BE$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl__nl = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nl$impl');

class LocalizedNamesImpl__nl__BE extends LocalizedNamesImpl__nl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocalizedNamesImpl__nl__BE} */
 static $create__() {
  LocalizedNamesImpl__nl__BE.$clinit();
  let $instance = new LocalizedNamesImpl__nl__BE();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_nl_BE__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_nl_BE__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_nl__();
 }
 /** @override */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("013", "Centraal-Amerika");
 }
 
 static $clinit() {
  LocalizedNamesImpl__nl__BE.$clinit = () =>{};
  LocalizedNamesImpl__nl__BE.$loadModules();
  LocalizedNamesImpl__nl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImpl__nl__BE;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__nl__BE, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nl_BE');

exports = LocalizedNamesImpl__nl__BE; 
//# sourceMappingURL=LocalizedNamesImpl_nl_BE.js.map