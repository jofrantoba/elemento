goog.module('elemental2.dom.HTMLOptGroupElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLOptGroupElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLOptGroupElementInfo} */
 static $create__() {
  HTMLOptGroupElementInfo.$clinit();
  let $instance = new HTMLOptGroupElementInfo();
  $instance.$ctor__elemental2_dom_HTMLOptGroupElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLOptGroupElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLOptGroupElementInfo.$clinit = () =>{};
  HTMLOptGroupElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLOptGroupElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLOptGroupElementInfo, 'elemental2.dom.HTMLOptGroupElementInfo');

exports = HTMLOptGroupElementInfo; 
//# sourceMappingURL=HTMLOptGroupElementInfo.js.map