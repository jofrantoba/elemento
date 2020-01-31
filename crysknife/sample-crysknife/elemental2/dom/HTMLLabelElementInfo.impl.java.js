goog.module('elemental2.dom.HTMLLabelElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLLabelElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLLabelElementInfo} */
 static $create__() {
  HTMLLabelElementInfo.$clinit();
  let $instance = new HTMLLabelElementInfo();
  $instance.$ctor__elemental2_dom_HTMLLabelElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLLabelElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLLabelElementInfo.$clinit = () =>{};
  HTMLLabelElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLLabelElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLLabelElementInfo, 'elemental2.dom.HTMLLabelElementInfo');

exports = HTMLLabelElementInfo; 
//# sourceMappingURL=HTMLLabelElementInfo.js.map