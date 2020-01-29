goog.module('org.gwtproject.resources.client.impl.ImageResourcePrototype.Bundle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ImageResourcePrototype = goog.require('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');

let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

class Bundle extends ImageResourcePrototype {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} name
  * @param {SafeUri} url
  * @param {number} left
  * @param {number} top
  * @param {number} width
  * @param {number} height
  * @param {boolean} animated
  * @param {boolean} lossy
  * @return {!Bundle}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean(name, url, left, top, width, height, animated, lossy) {
  Bundle.$clinit();
  let $instance = new Bundle();
  $instance.$ctor__org_gwtproject_resources_client_impl_ImageResourcePrototype_Bundle__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean(name, url, left, top, width, height, animated, lossy);
  return $instance;
 }
 /**
  * @param {?string} name
  * @param {SafeUri} url
  * @param {number} left
  * @param {number} top
  * @param {number} width
  * @param {number} height
  * @param {boolean} animated
  * @param {boolean} lossy
  * @public
  */
 $ctor__org_gwtproject_resources_client_impl_ImageResourcePrototype_Bundle__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean(name, url, left, top, width, height, animated, lossy) {
  this.$ctor__org_gwtproject_resources_client_impl_ImageResourcePrototype__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean(name, url, left, top, width, height, animated, lossy);
 }
 /**
  * @public
  */
 static $clinit() {
  Bundle.$clinit = () =>{};
  Bundle.$loadModules();
  ImageResourcePrototype.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Bundle;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Bundle, 'org.gwtproject.resources.client.impl.ImageResourcePrototype$Bundle');

exports = Bundle; 
//# sourceMappingURL=ImageResourcePrototype$Bundle.js.map