goog.module('elemental2.dom.HTMLBRElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLBRElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLBRElementInfo} */
 static $create__() {
  HTMLBRElementInfo.$clinit();
  let $instance = new HTMLBRElementInfo();
  $instance.$ctor__elemental2_dom_HTMLBRElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLBRElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLBRElementInfo.$clinit = () =>{};
  HTMLBRElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLBRElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLBRElementInfo, 'elemental2.dom.HTMLBRElementInfo');

exports = HTMLBRElementInfo; 
//# sourceMappingURL=HTMLBRElementInfo.js.map