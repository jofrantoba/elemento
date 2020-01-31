goog.module('elemental2.dom.HTMLTableColElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLTableColElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLTableColElementInfo} */
 static $create__() {
  HTMLTableColElementInfo.$clinit();
  let $instance = new HTMLTableColElementInfo();
  $instance.$ctor__elemental2_dom_HTMLTableColElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLTableColElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLTableColElementInfo.$clinit = () =>{};
  HTMLTableColElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLTableColElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLTableColElementInfo, 'elemental2.dom.HTMLTableColElementInfo');

exports = HTMLTableColElementInfo; 
//# sourceMappingURL=HTMLTableColElementInfo.js.map