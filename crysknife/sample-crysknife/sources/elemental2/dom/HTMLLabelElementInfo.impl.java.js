goog.module('elemental2.dom.HTMLLabelElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLLabelElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLLabelElementInfo}
  * @public
  */
 static $create__() {
  HTMLLabelElementInfo.$clinit();
  let $instance = new HTMLLabelElementInfo();
  $instance.$ctor__elemental2_dom_HTMLLabelElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLLabelElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLLabelElementInfo.$clinit = () =>{};
  HTMLLabelElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLLabelElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLLabelElementInfo, 'elemental2.dom.HTMLLabelElementInfo');

exports = HTMLLabelElementInfo; 
//# sourceMappingURL=HTMLLabelElementInfo.js.map