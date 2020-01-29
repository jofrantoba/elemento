goog.module('elemental2.dom.HTMLMeterElementInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class HTMLMeterElementInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HTMLMeterElementInfo}
  * @public
  */
 static $create__() {
  HTMLMeterElementInfo.$clinit();
  let $instance = new HTMLMeterElementInfo();
  $instance.$ctor__elemental2_dom_HTMLMeterElementInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__elemental2_dom_HTMLMeterElementInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  HTMLMeterElementInfo.$clinit = () =>{};
  HTMLMeterElementInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HTMLMeterElementInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HTMLMeterElementInfo, 'elemental2.dom.HTMLMeterElementInfo');

exports = HTMLMeterElementInfo; 
//# sourceMappingURL=HTMLMeterElementInfo.js.map