goog.module('elemental2.dom.HTMLTableElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLTableElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLTableElementInfo} */
 static $create__() {
  HTMLTableElementInfo.$clinit();
  let $instance = new HTMLTableElementInfo();
  $instance.$ctor__elemental2_dom_HTMLTableElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLTableElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLTableElementInfo.$clinit = () =>{};
  HTMLTableElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLTableElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLTableElementInfo, 'elemental2.dom.HTMLTableElementInfo');

exports = HTMLTableElementInfo; 
//# sourceMappingURL=HTMLTableElementInfo.js.map