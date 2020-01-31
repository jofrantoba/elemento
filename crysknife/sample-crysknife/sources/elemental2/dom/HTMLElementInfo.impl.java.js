goog.module('elemental2.dom.HTMLElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLElementInfo} */
 static $create__() {
  HTMLElementInfo.$clinit();
  let $instance = new HTMLElementInfo();
  $instance.$ctor__elemental2_dom_HTMLElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLElementInfo.$clinit = () =>{};
  HTMLElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLElementInfo, 'elemental2.dom.HTMLElementInfo');

exports = HTMLElementInfo; 
//# sourceMappingURL=HTMLElementInfo.js.map