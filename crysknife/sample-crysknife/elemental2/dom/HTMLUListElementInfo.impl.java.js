goog.module('elemental2.dom.HTMLUListElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLUListElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLUListElementInfo} */
 static $create__() {
  HTMLUListElementInfo.$clinit();
  let $instance = new HTMLUListElementInfo();
  $instance.$ctor__elemental2_dom_HTMLUListElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLUListElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLUListElementInfo.$clinit = () =>{};
  HTMLUListElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLUListElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLUListElementInfo, 'elemental2.dom.HTMLUListElementInfo');

exports = HTMLUListElementInfo; 
//# sourceMappingURL=HTMLUListElementInfo.js.map