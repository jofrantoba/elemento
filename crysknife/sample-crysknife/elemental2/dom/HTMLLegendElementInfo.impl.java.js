goog.module('elemental2.dom.HTMLLegendElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLLegendElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLLegendElementInfo} */
 static $create__() {
  HTMLLegendElementInfo.$clinit();
  let $instance = new HTMLLegendElementInfo();
  $instance.$ctor__elemental2_dom_HTMLLegendElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLLegendElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLLegendElementInfo.$clinit = () =>{};
  HTMLLegendElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLLegendElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLLegendElementInfo, 'elemental2.dom.HTMLLegendElementInfo');

exports = HTMLLegendElementInfo; 
//# sourceMappingURL=HTMLLegendElementInfo.js.map