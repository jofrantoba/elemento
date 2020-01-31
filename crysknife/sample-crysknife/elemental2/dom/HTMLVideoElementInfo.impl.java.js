goog.module('elemental2.dom.HTMLVideoElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLVideoElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLVideoElementInfo} */
 static $create__() {
  HTMLVideoElementInfo.$clinit();
  let $instance = new HTMLVideoElementInfo();
  $instance.$ctor__elemental2_dom_HTMLVideoElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLVideoElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLVideoElementInfo.$clinit = () =>{};
  HTMLVideoElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLVideoElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLVideoElementInfo, 'elemental2.dom.HTMLVideoElementInfo');

exports = HTMLVideoElementInfo; 
//# sourceMappingURL=HTMLVideoElementInfo.js.map