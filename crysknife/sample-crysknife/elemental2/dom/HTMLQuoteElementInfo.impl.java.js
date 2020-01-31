goog.module('elemental2.dom.HTMLQuoteElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLQuoteElementInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HTMLQuoteElementInfo} */
 static $create__() {
  HTMLQuoteElementInfo.$clinit();
  let $instance = new HTMLQuoteElementInfo();
  $instance.$ctor__elemental2_dom_HTMLQuoteElementInfo__();
  return $instance;
 }
 
 $ctor__elemental2_dom_HTMLQuoteElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  HTMLQuoteElementInfo.$clinit = () =>{};
  HTMLQuoteElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLQuoteElementInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLQuoteElementInfo, 'elemental2.dom.HTMLQuoteElementInfo');

exports = HTMLQuoteElementInfo; 
//# sourceMappingURL=HTMLQuoteElementInfo.js.map