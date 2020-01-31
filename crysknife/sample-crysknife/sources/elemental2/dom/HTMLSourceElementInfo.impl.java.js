goog.module('elemental2.dom.HTMLSourceElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLSourceElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLSourceElementInfo} */
 static $create__() {
  HTMLSourceElementInfo.$clinit();
  let $instance = new HTMLSourceElementInfo();
  $instance.$ctor__elemental2_dom_HTMLSourceElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLSourceElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLSourceElementInfo.$clinit = () =>{};
  HTMLSourceElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLSourceElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLSourceElementInfo, 'elemental2.dom.HTMLSourceElementInfo');

exports = HTMLSourceElementInfo; 
//# sourceMappingURL=HTMLSourceElementInfo.js.map