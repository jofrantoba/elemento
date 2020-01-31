goog.module('elemental2.dom.HTMLInputElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLInputElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLInputElementInfo} */
 static $create__() {
  HTMLInputElementInfo.$clinit();
  let $instance = new HTMLInputElementInfo();
  $instance.$ctor__elemental2_dom_HTMLInputElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLInputElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLInputElementInfo.$clinit = () =>{};
  HTMLInputElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLInputElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLInputElementInfo, 'elemental2.dom.HTMLInputElementInfo');

exports = HTMLInputElementInfo; 
//# sourceMappingURL=HTMLInputElementInfo.js.map