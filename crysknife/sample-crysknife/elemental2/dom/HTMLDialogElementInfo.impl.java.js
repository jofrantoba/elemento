goog.module('elemental2.dom.HTMLDialogElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLDialogElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLDialogElementInfo}
  * @public
  */
 static $create__() {
  HTMLDialogElementInfo.$clinit();
  let $instance = new HTMLDialogElementInfo();
  $instance.$ctor__elemental2_dom_HTMLDialogElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLDialogElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLDialogElementInfo.$clinit = () =>{};
  HTMLDialogElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLDialogElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLDialogElementInfo, 'elemental2.dom.HTMLDialogElementInfo');

exports = HTMLDialogElementInfo; 
//# sourceMappingURL=HTMLDialogElementInfo.js.map