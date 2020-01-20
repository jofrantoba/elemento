goog.module('elemental2.dom.Screen.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /**
  * @public
  */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Screen;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($Overlay, 'Screen');

exports = $Overlay; 
//# sourceMappingURL=Screen$$Overlay.js.map