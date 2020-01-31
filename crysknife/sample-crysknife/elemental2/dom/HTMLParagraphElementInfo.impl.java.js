goog.module('elemental2.dom.HTMLParagraphElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLParagraphElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLParagraphElementInfo} */
 static $create__() {
  HTMLParagraphElementInfo.$clinit();
  let $instance = new HTMLParagraphElementInfo();
  $instance.$ctor__elemental2_dom_HTMLParagraphElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLParagraphElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLParagraphElementInfo.$clinit = () =>{};
  HTMLParagraphElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLParagraphElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLParagraphElementInfo, 'elemental2.dom.HTMLParagraphElementInfo');

exports = HTMLParagraphElementInfo; 
//# sourceMappingURL=HTMLParagraphElementInfo.js.map