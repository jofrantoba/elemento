goog.module('elemental2.dom.HTMLTextAreaElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLTextAreaElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLTextAreaElementInfo} */
 static $create__() {
  HTMLTextAreaElementInfo.$clinit();
  let $instance = new HTMLTextAreaElementInfo();
  $instance.$ctor__elemental2_dom_HTMLTextAreaElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLTextAreaElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLTextAreaElementInfo.$clinit = () =>{};
  HTMLTextAreaElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLTextAreaElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLTextAreaElementInfo, 'elemental2.dom.HTMLTextAreaElementInfo');

exports = HTMLTextAreaElementInfo; 
//# sourceMappingURL=HTMLTextAreaElementInfo.js.map