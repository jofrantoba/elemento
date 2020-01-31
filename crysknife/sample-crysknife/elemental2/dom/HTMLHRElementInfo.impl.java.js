goog.module('elemental2.dom.HTMLHRElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLHRElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLHRElementInfo} */
 static $create__() {
  HTMLHRElementInfo.$clinit();
  let $instance = new HTMLHRElementInfo();
  $instance.$ctor__elemental2_dom_HTMLHRElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLHRElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLHRElementInfo.$clinit = () =>{};
  HTMLHRElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLHRElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLHRElementInfo, 'elemental2.dom.HTMLHRElementInfo');

exports = HTMLHRElementInfo; 
//# sourceMappingURL=HTMLHRElementInfo.js.map