goog.module('elemental2.dom.HTMLTextAreaElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLTextAreaElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLTextAreaElementInfo}
  * @public
  */
 static $create__() {
  HTMLTextAreaElementInfo.$clinit();
  let $instance = new HTMLTextAreaElementInfo();
  $instance.$ctor__elemental2_dom_HTMLTextAreaElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLTextAreaElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLTextAreaElementInfo.$clinit = () =>{};
  HTMLTextAreaElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLTextAreaElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLTextAreaElementInfo, 'elemental2.dom.HTMLTextAreaElementInfo');

exports = HTMLTextAreaElementInfo; 
//# sourceMappingURL=HTMLTextAreaElementInfo.js.map