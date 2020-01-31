goog.module('elemental2.dom.HTMLImageElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLImageElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLImageElementInfo} */
 static $create__() {
  HTMLImageElementInfo.$clinit();
  let $instance = new HTMLImageElementInfo();
  $instance.$ctor__elemental2_dom_HTMLImageElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLImageElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLImageElementInfo.$clinit = () =>{};
  HTMLImageElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLImageElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLImageElementInfo, 'elemental2.dom.HTMLImageElementInfo');

exports = HTMLImageElementInfo; 
//# sourceMappingURL=HTMLImageElementInfo.js.map