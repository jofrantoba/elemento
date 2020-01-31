goog.module('elemental2.dom.HTMLMapElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLMapElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLMapElementInfo} */
 static $create__() {
  HTMLMapElementInfo.$clinit();
  let $instance = new HTMLMapElementInfo();
  $instance.$ctor__elemental2_dom_HTMLMapElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLMapElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLMapElementInfo.$clinit = () =>{};
  HTMLMapElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLMapElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLMapElementInfo, 'elemental2.dom.HTMLMapElementInfo');

exports = HTMLMapElementInfo; 
//# sourceMappingURL=HTMLMapElementInfo.js.map