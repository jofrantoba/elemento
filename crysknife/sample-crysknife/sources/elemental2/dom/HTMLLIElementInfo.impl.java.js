goog.module('elemental2.dom.HTMLLIElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLLIElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLLIElementInfo} */
 static $create__() {
  HTMLLIElementInfo.$clinit();
  let $instance = new HTMLLIElementInfo();
  $instance.$ctor__elemental2_dom_HTMLLIElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLLIElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLLIElementInfo.$clinit = () =>{};
  HTMLLIElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLLIElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLLIElementInfo, 'elemental2.dom.HTMLLIElementInfo');

exports = HTMLLIElementInfo; 
//# sourceMappingURL=HTMLLIElementInfo.js.map