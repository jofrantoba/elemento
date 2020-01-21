goog.module('elemental2.dom.EventSource.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /**
  * @return {number}
  * @public
  */
 static get f_CLOSED__elemental2_dom_EventSource_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_CLOSED__elemental2_dom_EventSource_$Overlay);
 }
 /**
  * @return {number}
  * @public
  */
 static get f_CONNECTING__elemental2_dom_EventSource_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_CONNECTING__elemental2_dom_EventSource_$Overlay);
 }
 /**
  * @return {number}
  * @public
  */
 static get f_OPEN__elemental2_dom_EventSource_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_OPEN__elemental2_dom_EventSource_$Overlay);
 }
 /**
  * @public
  */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$f_CLOSED__elemental2_dom_EventSource_$Overlay = EventSource.CLOSED;
  $Overlay.$f_CONNECTING__elemental2_dom_EventSource_$Overlay = EventSource.CONNECTING;
  $Overlay.$f_OPEN__elemental2_dom_EventSource_$Overlay = EventSource.OPEN;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof EventSource;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($Overlay, 'EventSource');

/** @private {number} */
$Overlay.$f_CLOSED__elemental2_dom_EventSource_$Overlay = 0;
/** @private {number} */
$Overlay.$f_CONNECTING__elemental2_dom_EventSource_$Overlay = 0;
/** @private {number} */
$Overlay.$f_OPEN__elemental2_dom_EventSource_$Overlay = 0;

exports = $Overlay; 
//# sourceMappingURL=EventSource$$Overlay.js.map