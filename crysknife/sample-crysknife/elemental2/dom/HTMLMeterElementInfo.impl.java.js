goog.module('elemental2.dom.HTMLMeterElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLMeterElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLMeterElementInfo} */
 static $create__() {
  HTMLMeterElementInfo.$clinit();
  let $instance = new HTMLMeterElementInfo();
  $instance.$ctor__elemental2_dom_HTMLMeterElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLMeterElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLMeterElementInfo.$clinit = () =>{};
  HTMLMeterElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLMeterElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLMeterElementInfo, 'elemental2.dom.HTMLMeterElementInfo');

exports = HTMLMeterElementInfo; 
//# sourceMappingURL=HTMLMeterElementInfo.js.map