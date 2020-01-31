goog.module('elemental2.dom.HTMLDivElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLDivElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLDivElementInfo} */
 static $create__() {
  HTMLDivElementInfo.$clinit();
  let $instance = new HTMLDivElementInfo();
  $instance.$ctor__elemental2_dom_HTMLDivElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLDivElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLDivElementInfo.$clinit = () =>{};
  HTMLDivElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLDivElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLDivElementInfo, 'elemental2.dom.HTMLDivElementInfo');

exports = HTMLDivElementInfo; 
//# sourceMappingURL=HTMLDivElementInfo.js.map