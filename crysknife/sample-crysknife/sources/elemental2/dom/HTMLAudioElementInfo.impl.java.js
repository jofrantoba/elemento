goog.module('elemental2.dom.HTMLAudioElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLAudioElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLAudioElementInfo} */
 static $create__() {
  HTMLAudioElementInfo.$clinit();
  let $instance = new HTMLAudioElementInfo();
  $instance.$ctor__elemental2_dom_HTMLAudioElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLAudioElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLAudioElementInfo.$clinit = () =>{};
  HTMLAudioElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLAudioElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLAudioElementInfo, 'elemental2.dom.HTMLAudioElementInfo');

exports = HTMLAudioElementInfo; 
//# sourceMappingURL=HTMLAudioElementInfo.js.map