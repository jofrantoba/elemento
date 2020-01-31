goog.module('elemental2.dom.HTMLFieldSetElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLFieldSetElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLFieldSetElementInfo} */
 static $create__() {
  HTMLFieldSetElementInfo.$clinit();
  let $instance = new HTMLFieldSetElementInfo();
  $instance.$ctor__elemental2_dom_HTMLFieldSetElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLFieldSetElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLFieldSetElementInfo.$clinit = () =>{};
  HTMLFieldSetElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLFieldSetElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLFieldSetElementInfo, 'elemental2.dom.HTMLFieldSetElementInfo');

exports = HTMLFieldSetElementInfo; 
//# sourceMappingURL=HTMLFieldSetElementInfo.js.map