goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ro_MD$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl__ro = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ro$impl');

class LocalizedNamesImpl__ro__MD extends LocalizedNamesImpl__ro {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!LocalizedNamesImpl__ro__MD}
  * @public
  */
 static $create__() {
  LocalizedNamesImpl__ro__MD.$clinit();
  let $instance = new LocalizedNamesImpl__ro__MD();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_ro_MD__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_ro_MD__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_ro__();
 }
 /**
  * @override
  * @public
  */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MM", "Myanmar");
 }
 /**
  * @public
  */
 static $clinit() {
  LocalizedNamesImpl__ro__MD.$clinit = () =>{};
  LocalizedNamesImpl__ro__MD.$loadModules();
  LocalizedNamesImpl__ro.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LocalizedNamesImpl__ro__MD;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__ro__MD, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ro_MD');

exports = LocalizedNamesImpl__ro__MD; 
//# sourceMappingURL=LocalizedNamesImpl_ro_MD.js.map