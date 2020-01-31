goog.module('org.gwtproject.resources.client.impl.ImageResourcePrototype.Bundle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ImageResourcePrototype = goog.require('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');

let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

class Bundle extends ImageResourcePrototype {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Bundle} */
 static $create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean(/** ?string */ name, /** SafeUri */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height, /** boolean */ animated, /** boolean */ lossy) {
  Bundle.$clinit();
  let $instance = new Bundle();
  $instance.$ctor__org_gwtproject_resources_client_impl_ImageResourcePrototype_Bundle__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean(name, url, left, top, width, height, animated, lossy);
  return $instance;
 }
 
 $ctor__org_gwtproject_resources_client_impl_ImageResourcePrototype_Bundle__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean(/** ?string */ name, /** SafeUri */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height, /** boolean */ animated, /** boolean */ lossy) {
  this.$ctor__org_gwtproject_resources_client_impl_ImageResourcePrototype__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean(name, url, left, top, width, height, animated, lossy);
 }
 
 static $clinit() {
  Bundle.$clinit = () =>{};
  Bundle.$loadModules();
  ImageResourcePrototype.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Bundle;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Bundle, 'org.gwtproject.resources.client.impl.ImageResourcePrototype$Bundle');

exports = Bundle; 
//# sourceMappingURL=ImageResourcePrototype$Bundle.js.map