goog.module('elemental2.dom.HTMLLegendElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLLegendElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLLegendElementInfo}
  * @public
  */
 static $create__() {
  HTMLLegendElementInfo.$clinit();
  let $instance = new HTMLLegendElementInfo();
  $instance.$ctor__elemental2_dom_HTMLLegendElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLLegendElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLLegendElementInfo.$clinit = () =>{};
  HTMLLegendElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLLegendElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLLegendElementInfo, 'elemental2.dom.HTMLLegendElementInfo');

exports = HTMLLegendElementInfo; 
//# sourceMappingURL=HTMLLegendElementInfo.js.map