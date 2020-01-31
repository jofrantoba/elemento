goog.module('elemental2.dom.HTMLDataListElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLDataListElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLDataListElementInfo} */
 static $create__() {
  HTMLDataListElementInfo.$clinit();
  let $instance = new HTMLDataListElementInfo();
  $instance.$ctor__elemental2_dom_HTMLDataListElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLDataListElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLDataListElementInfo.$clinit = () =>{};
  HTMLDataListElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLDataListElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLDataListElementInfo, 'elemental2.dom.HTMLDataListElementInfo');

exports = HTMLDataListElementInfo; 
//# sourceMappingURL=HTMLDataListElementInfo.js.map