goog.module('elemental2.dom.HTMLMenuItemElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLMenuItemElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLMenuItemElementInfo} */
 static $create__() {
  HTMLMenuItemElementInfo.$clinit();
  let $instance = new HTMLMenuItemElementInfo();
  $instance.$ctor__elemental2_dom_HTMLMenuItemElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLMenuItemElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLMenuItemElementInfo.$clinit = () =>{};
  HTMLMenuItemElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLMenuItemElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLMenuItemElementInfo, 'elemental2.dom.HTMLMenuItemElementInfo');

exports = HTMLMenuItemElementInfo; 
//# sourceMappingURL=HTMLMenuItemElementInfo.js.map