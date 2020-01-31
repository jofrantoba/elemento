goog.module('elemental2.dom.HTMLOListElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLOListElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLOListElementInfo} */
 static $create__() {
  HTMLOListElementInfo.$clinit();
  let $instance = new HTMLOListElementInfo();
  $instance.$ctor__elemental2_dom_HTMLOListElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLOListElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLOListElementInfo.$clinit = () =>{};
  HTMLOListElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLOListElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLOListElementInfo, 'elemental2.dom.HTMLOListElementInfo');

exports = HTMLOListElementInfo; 
//# sourceMappingURL=HTMLOListElementInfo.js.map