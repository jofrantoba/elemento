goog.module('elemental2.dom.HTMLDetailsElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLDetailsElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLDetailsElementInfo} */
 static $create__() {
  HTMLDetailsElementInfo.$clinit();
  let $instance = new HTMLDetailsElementInfo();
  $instance.$ctor__elemental2_dom_HTMLDetailsElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLDetailsElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLDetailsElementInfo.$clinit = () =>{};
  HTMLDetailsElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLDetailsElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLDetailsElementInfo, 'elemental2.dom.HTMLDetailsElementInfo');

exports = HTMLDetailsElementInfo; 
//# sourceMappingURL=HTMLDetailsElementInfo.js.map