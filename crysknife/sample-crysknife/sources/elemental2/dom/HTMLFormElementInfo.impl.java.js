goog.module('elemental2.dom.HTMLFormElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLFormElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLFormElementInfo} */
 static $create__() {
  HTMLFormElementInfo.$clinit();
  let $instance = new HTMLFormElementInfo();
  $instance.$ctor__elemental2_dom_HTMLFormElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLFormElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLFormElementInfo.$clinit = () =>{};
  HTMLFormElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLFormElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLFormElementInfo, 'elemental2.dom.HTMLFormElementInfo');

exports = HTMLFormElementInfo; 
//# sourceMappingURL=HTMLFormElementInfo.js.map