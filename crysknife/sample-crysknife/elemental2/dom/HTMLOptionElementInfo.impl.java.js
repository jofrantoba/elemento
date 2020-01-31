goog.module('elemental2.dom.HTMLOptionElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLOptionElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLOptionElementInfo} */
 static $create__() {
  HTMLOptionElementInfo.$clinit();
  let $instance = new HTMLOptionElementInfo();
  $instance.$ctor__elemental2_dom_HTMLOptionElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLOptionElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLOptionElementInfo.$clinit = () =>{};
  HTMLOptionElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLOptionElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLOptionElementInfo, 'elemental2.dom.HTMLOptionElementInfo');

exports = HTMLOptionElementInfo; 
//# sourceMappingURL=HTMLOptionElementInfo.js.map