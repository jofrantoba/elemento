goog.module('elemental2.dom.HTMLParamElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLParamElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLParamElementInfo} */
 static $create__() {
  HTMLParamElementInfo.$clinit();
  let $instance = new HTMLParamElementInfo();
  $instance.$ctor__elemental2_dom_HTMLParamElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLParamElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLParamElementInfo.$clinit = () =>{};
  HTMLParamElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLParamElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLParamElementInfo, 'elemental2.dom.HTMLParamElementInfo');

exports = HTMLParamElementInfo; 
//# sourceMappingURL=HTMLParamElementInfo.js.map