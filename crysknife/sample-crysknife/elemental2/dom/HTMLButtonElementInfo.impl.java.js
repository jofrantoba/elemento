goog.module('elemental2.dom.HTMLButtonElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLButtonElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLButtonElementInfo} */
 static $create__() {
  HTMLButtonElementInfo.$clinit();
  let $instance = new HTMLButtonElementInfo();
  $instance.$ctor__elemental2_dom_HTMLButtonElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLButtonElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLButtonElementInfo.$clinit = () =>{};
  HTMLButtonElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLButtonElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLButtonElementInfo, 'elemental2.dom.HTMLButtonElementInfo');

exports = HTMLButtonElementInfo; 
//# sourceMappingURL=HTMLButtonElementInfo.js.map