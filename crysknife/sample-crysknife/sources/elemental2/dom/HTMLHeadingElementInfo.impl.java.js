goog.module('elemental2.dom.HTMLHeadingElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLHeadingElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLHeadingElementInfo} */
 static $create__() {
  HTMLHeadingElementInfo.$clinit();
  let $instance = new HTMLHeadingElementInfo();
  $instance.$ctor__elemental2_dom_HTMLHeadingElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLHeadingElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLHeadingElementInfo.$clinit = () =>{};
  HTMLHeadingElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLHeadingElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLHeadingElementInfo, 'elemental2.dom.HTMLHeadingElementInfo');

exports = HTMLHeadingElementInfo; 
//# sourceMappingURL=HTMLHeadingElementInfo.js.map