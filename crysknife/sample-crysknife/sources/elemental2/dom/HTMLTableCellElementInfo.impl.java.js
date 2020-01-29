goog.module('elemental2.dom.HTMLTableCellElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLTableCellElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLTableCellElementInfo}
  * @public
  */
 static $create__() {
  HTMLTableCellElementInfo.$clinit();
  let $instance = new HTMLTableCellElementInfo();
  $instance.$ctor__elemental2_dom_HTMLTableCellElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLTableCellElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLTableCellElementInfo.$clinit = () =>{};
  HTMLTableCellElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLTableCellElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLTableCellElementInfo, 'elemental2.dom.HTMLTableCellElementInfo');

exports = HTMLTableCellElementInfo; 
//# sourceMappingURL=HTMLTableCellElementInfo.js.map