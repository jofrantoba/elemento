goog.module('elemental2.dom.HTMLTableRowElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLTableRowElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLTableRowElementInfo}
  * @public
  */
 static $create__() {
  HTMLTableRowElementInfo.$clinit();
  let $instance = new HTMLTableRowElementInfo();
  $instance.$ctor__elemental2_dom_HTMLTableRowElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLTableRowElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLTableRowElementInfo.$clinit = () =>{};
  HTMLTableRowElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLTableRowElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLTableRowElementInfo, 'elemental2.dom.HTMLTableRowElementInfo');

exports = HTMLTableRowElementInfo; 
//# sourceMappingURL=HTMLTableRowElementInfo.js.map