goog.module('elemental2.dom.HTMLObjectElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLObjectElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLObjectElementInfo} */
 static $create__() {
  HTMLObjectElementInfo.$clinit();
  let $instance = new HTMLObjectElementInfo();
  $instance.$ctor__elemental2_dom_HTMLObjectElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLObjectElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLObjectElementInfo.$clinit = () =>{};
  HTMLObjectElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLObjectElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLObjectElementInfo, 'elemental2.dom.HTMLObjectElementInfo');

exports = HTMLObjectElementInfo; 
//# sourceMappingURL=HTMLObjectElementInfo.js.map