goog.module('elemental2.dom.HTMLTrackElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLTrackElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLTrackElementInfo} */
 static $create__() {
  HTMLTrackElementInfo.$clinit();
  let $instance = new HTMLTrackElementInfo();
  $instance.$ctor__elemental2_dom_HTMLTrackElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLTrackElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLTrackElementInfo.$clinit = () =>{};
  HTMLTrackElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLTrackElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLTrackElementInfo, 'elemental2.dom.HTMLTrackElementInfo');

exports = HTMLTrackElementInfo; 
//# sourceMappingURL=HTMLTrackElementInfo.js.map