goog.module('elemental2.dom.HTMLOutputElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLOutputElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLOutputElementInfo} */
 static $create__() {
  HTMLOutputElementInfo.$clinit();
  let $instance = new HTMLOutputElementInfo();
  $instance.$ctor__elemental2_dom_HTMLOutputElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLOutputElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLOutputElementInfo.$clinit = () =>{};
  HTMLOutputElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLOutputElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLOutputElementInfo, 'elemental2.dom.HTMLOutputElementInfo');

exports = HTMLOutputElementInfo; 
//# sourceMappingURL=HTMLOutputElementInfo.js.map