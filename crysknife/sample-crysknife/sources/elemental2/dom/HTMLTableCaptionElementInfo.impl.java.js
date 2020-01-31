goog.module('elemental2.dom.HTMLTableCaptionElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLTableCaptionElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLTableCaptionElementInfo} */
 static $create__() {
  HTMLTableCaptionElementInfo.$clinit();
  let $instance = new HTMLTableCaptionElementInfo();
  $instance.$ctor__elemental2_dom_HTMLTableCaptionElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLTableCaptionElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLTableCaptionElementInfo.$clinit = () =>{};
  HTMLTableCaptionElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLTableCaptionElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLTableCaptionElementInfo, 'elemental2.dom.HTMLTableCaptionElementInfo');

exports = HTMLTableCaptionElementInfo; 
//# sourceMappingURL=HTMLTableCaptionElementInfo.js.map