goog.module('elemental2.dom.HTMLTableCaptionElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLTableCaptionElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLTableCaptionElementInfo}
  * @public
  */
 static $create__() {
  HTMLTableCaptionElementInfo.$clinit();
  let $instance = new HTMLTableCaptionElementInfo();
  $instance.$ctor__elemental2_dom_HTMLTableCaptionElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLTableCaptionElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLTableCaptionElementInfo.$clinit = () =>{};
  HTMLTableCaptionElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLTableCaptionElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLTableCaptionElementInfo, 'elemental2.dom.HTMLTableCaptionElementInfo');

exports = HTMLTableCaptionElementInfo; 
//# sourceMappingURL=HTMLTableCaptionElementInfo.js.map