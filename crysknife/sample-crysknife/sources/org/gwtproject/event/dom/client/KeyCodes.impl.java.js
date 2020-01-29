goog.module('org.gwtproject.event.dom.client.KeyCodes$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class KeyCodes extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!KeyCodes}
  * @public
  */
 static $create__() {
  let $instance = new KeyCodes();
  $instance.$ctor__org_gwtproject_event_dom_client_KeyCodes__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_KeyCodes__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {number} code
  * @return {boolean}
  * @public
  */
 static m_isArrowKey__int(code) {
  KeyCodes.$clinit();
  switch (code) {
   case KeyCodes.f_KEY_DOWN__org_gwtproject_event_dom_client_KeyCodes: 
   case KeyCodes.f_KEY_RIGHT__org_gwtproject_event_dom_client_KeyCodes: 
   case KeyCodes.f_KEY_UP__org_gwtproject_event_dom_client_KeyCodes: 
   case KeyCodes.f_KEY_LEFT__org_gwtproject_event_dom_client_KeyCodes: 
    return true;
   default: 
    return false;
  }
 }
 /**
  * @param {number} code
  * @param {boolean} isRtl
  * @return {number}
  * @public
  */
 static m_maybeSwapArrowKeysForRtl__int__boolean(code, isRtl) {
  KeyCodes.$clinit();
  if (isRtl) {
   if (code == KeyCodes.f_KEY_RIGHT__org_gwtproject_event_dom_client_KeyCodes) {
    code = KeyCodes.f_KEY_LEFT__org_gwtproject_event_dom_client_KeyCodes;
   } else if (code == KeyCodes.f_KEY_LEFT__org_gwtproject_event_dom_client_KeyCodes) {
    code = KeyCodes.f_KEY_RIGHT__org_gwtproject_event_dom_client_KeyCodes;
   }
  }
  return code;
 }
 /**
  * @public
  */
 static $clinit() {
  KeyCodes.$clinit = () =>{};
  KeyCodes.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof KeyCodes;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(KeyCodes, 'org.gwtproject.event.dom.client.KeyCodes');

/** @public {number} @const */
KeyCodes.f_KEY_A__org_gwtproject_event_dom_client_KeyCodes = 65;
/** @public {number} @const */
KeyCodes.f_KEY_B__org_gwtproject_event_dom_client_KeyCodes = 66;
/** @public {number} @const */
KeyCodes.f_KEY_C__org_gwtproject_event_dom_client_KeyCodes = 67;
/** @public {number} @const */
KeyCodes.f_KEY_D__org_gwtproject_event_dom_client_KeyCodes = 68;
/** @public {number} @const */
KeyCodes.f_KEY_E__org_gwtproject_event_dom_client_KeyCodes = 69;
/** @public {number} @const */
KeyCodes.f_KEY_F__org_gwtproject_event_dom_client_KeyCodes = 70;
/** @public {number} @const */
KeyCodes.f_KEY_G__org_gwtproject_event_dom_client_KeyCodes = 71;
/** @public {number} @const */
KeyCodes.f_KEY_H__org_gwtproject_event_dom_client_KeyCodes = 72;
/** @public {number} @const */
KeyCodes.f_KEY_I__org_gwtproject_event_dom_client_KeyCodes = 73;
/** @public {number} @const */
KeyCodes.f_KEY_J__org_gwtproject_event_dom_client_KeyCodes = 74;
/** @public {number} @const */
KeyCodes.f_KEY_K__org_gwtproject_event_dom_client_KeyCodes = 75;
/** @public {number} @const */
KeyCodes.f_KEY_L__org_gwtproject_event_dom_client_KeyCodes = 76;
/** @public {number} @const */
KeyCodes.f_KEY_M__org_gwtproject_event_dom_client_KeyCodes = 77;
/** @public {number} @const */
KeyCodes.f_KEY_N__org_gwtproject_event_dom_client_KeyCodes = 78;
/** @public {number} @const */
KeyCodes.f_KEY_O__org_gwtproject_event_dom_client_KeyCodes = 79;
/** @public {number} @const */
KeyCodes.f_KEY_P__org_gwtproject_event_dom_client_KeyCodes = 80;
/** @public {number} @const */
KeyCodes.f_KEY_Q__org_gwtproject_event_dom_client_KeyCodes = 81;
/** @public {number} @const */
KeyCodes.f_KEY_R__org_gwtproject_event_dom_client_KeyCodes = 82;
/** @public {number} @const */
KeyCodes.f_KEY_S__org_gwtproject_event_dom_client_KeyCodes = 83;
/** @public {number} @const */
KeyCodes.f_KEY_T__org_gwtproject_event_dom_client_KeyCodes = 84;
/** @public {number} @const */
KeyCodes.f_KEY_U__org_gwtproject_event_dom_client_KeyCodes = 85;
/** @public {number} @const */
KeyCodes.f_KEY_V__org_gwtproject_event_dom_client_KeyCodes = 86;
/** @public {number} @const */
KeyCodes.f_KEY_W__org_gwtproject_event_dom_client_KeyCodes = 87;
/** @public {number} @const */
KeyCodes.f_KEY_X__org_gwtproject_event_dom_client_KeyCodes = 88;
/** @public {number} @const */
KeyCodes.f_KEY_Y__org_gwtproject_event_dom_client_KeyCodes = 89;
/** @public {number} @const */
KeyCodes.f_KEY_Z__org_gwtproject_event_dom_client_KeyCodes = 90;
/** @public {number} @const */
KeyCodes.f_KEY_ZERO__org_gwtproject_event_dom_client_KeyCodes = 48;
/** @public {number} @const */
KeyCodes.f_KEY_ONE__org_gwtproject_event_dom_client_KeyCodes = 49;
/** @public {number} @const */
KeyCodes.f_KEY_TWO__org_gwtproject_event_dom_client_KeyCodes = 50;
/** @public {number} @const */
KeyCodes.f_KEY_THREE__org_gwtproject_event_dom_client_KeyCodes = 51;
/** @public {number} @const */
KeyCodes.f_KEY_FOUR__org_gwtproject_event_dom_client_KeyCodes = 52;
/** @public {number} @const */
KeyCodes.f_KEY_FIVE__org_gwtproject_event_dom_client_KeyCodes = 53;
/** @public {number} @const */
KeyCodes.f_KEY_SIX__org_gwtproject_event_dom_client_KeyCodes = 54;
/** @public {number} @const */
KeyCodes.f_KEY_SEVEN__org_gwtproject_event_dom_client_KeyCodes = 55;
/** @public {number} @const */
KeyCodes.f_KEY_EIGHT__org_gwtproject_event_dom_client_KeyCodes = 56;
/** @public {number} @const */
KeyCodes.f_KEY_NINE__org_gwtproject_event_dom_client_KeyCodes = 57;
/** @public {number} @const */
KeyCodes.f_KEY_NUM_ZERO__org_gwtproject_event_dom_client_KeyCodes = 96;
/** @public {number} @const */
KeyCodes.f_KEY_NUM_ONE__org_gwtproject_event_dom_client_KeyCodes = 97;
/** @public {number} @const */
KeyCodes.f_KEY_NUM_TWO__org_gwtproject_event_dom_client_KeyCodes = 98;
/** @public {number} @const */
KeyCodes.f_KEY_NUM_THREE__org_gwtproject_event_dom_client_KeyCodes = 99;
/** @public {number} @const */
KeyCodes.f_KEY_NUM_FOUR__org_gwtproject_event_dom_client_KeyCodes = 100;
/** @public {number} @const */
KeyCodes.f_KEY_NUM_FIVE__org_gwtproject_event_dom_client_KeyCodes = 101;
/** @public {number} @const */
KeyCodes.f_KEY_NUM_SIX__org_gwtproject_event_dom_client_KeyCodes = 102;
/** @public {number} @const */
KeyCodes.f_KEY_NUM_SEVEN__org_gwtproject_event_dom_client_KeyCodes = 103;
/** @public {number} @const */
KeyCodes.f_KEY_NUM_EIGHT__org_gwtproject_event_dom_client_KeyCodes = 104;
/** @public {number} @const */
KeyCodes.f_KEY_NUM_NINE__org_gwtproject_event_dom_client_KeyCodes = 105;
/** @public {number} @const */
KeyCodes.f_KEY_NUM_MULTIPLY__org_gwtproject_event_dom_client_KeyCodes = 106;
/** @public {number} @const */
KeyCodes.f_KEY_NUM_PLUS__org_gwtproject_event_dom_client_KeyCodes = 107;
/** @public {number} @const */
KeyCodes.f_KEY_NUM_MINUS__org_gwtproject_event_dom_client_KeyCodes = 109;
/** @public {number} @const */
KeyCodes.f_KEY_NUM_PERIOD__org_gwtproject_event_dom_client_KeyCodes = 110;
/** @public {number} @const */
KeyCodes.f_KEY_NUM_DIVISION__org_gwtproject_event_dom_client_KeyCodes = 111;
/** @public {number} @const */
KeyCodes.f_KEY_ALT__org_gwtproject_event_dom_client_KeyCodes = 18;
/** @public {number} @const */
KeyCodes.f_KEY_BACKSPACE__org_gwtproject_event_dom_client_KeyCodes = 8;
/** @public {number} @const */
KeyCodes.f_KEY_CTRL__org_gwtproject_event_dom_client_KeyCodes = 17;
/** @public {number} @const */
KeyCodes.f_KEY_DELETE__org_gwtproject_event_dom_client_KeyCodes = 46;
/** @public {number} @const */
KeyCodes.f_KEY_DOWN__org_gwtproject_event_dom_client_KeyCodes = 40;
/** @public {number} @const */
KeyCodes.f_KEY_END__org_gwtproject_event_dom_client_KeyCodes = 35;
/** @public {number} @const */
KeyCodes.f_KEY_ENTER__org_gwtproject_event_dom_client_KeyCodes = 13;
/** @public {number} @const */
KeyCodes.f_KEY_ESCAPE__org_gwtproject_event_dom_client_KeyCodes = 27;
/** @public {number} @const */
KeyCodes.f_KEY_HOME__org_gwtproject_event_dom_client_KeyCodes = 36;
/** @public {number} @const */
KeyCodes.f_KEY_LEFT__org_gwtproject_event_dom_client_KeyCodes = 37;
/** @public {number} @const */
KeyCodes.f_KEY_PAGEDOWN__org_gwtproject_event_dom_client_KeyCodes = 34;
/** @public {number} @const */
KeyCodes.f_KEY_PAGEUP__org_gwtproject_event_dom_client_KeyCodes = 33;
/** @public {number} @const */
KeyCodes.f_KEY_RIGHT__org_gwtproject_event_dom_client_KeyCodes = 39;
/** @public {number} @const */
KeyCodes.f_KEY_SHIFT__org_gwtproject_event_dom_client_KeyCodes = 16;
/** @public {number} @const */
KeyCodes.f_KEY_TAB__org_gwtproject_event_dom_client_KeyCodes = 9;
/** @public {number} @const */
KeyCodes.f_KEY_UP__org_gwtproject_event_dom_client_KeyCodes = 38;
/** @public {number} @const */
KeyCodes.f_KEY_F1__org_gwtproject_event_dom_client_KeyCodes = 112;
/** @public {number} @const */
KeyCodes.f_KEY_F2__org_gwtproject_event_dom_client_KeyCodes = 113;
/** @public {number} @const */
KeyCodes.f_KEY_F3__org_gwtproject_event_dom_client_KeyCodes = 114;
/** @public {number} @const */
KeyCodes.f_KEY_F4__org_gwtproject_event_dom_client_KeyCodes = 115;
/** @public {number} @const */
KeyCodes.f_KEY_F5__org_gwtproject_event_dom_client_KeyCodes = 116;
/** @public {number} @const */
KeyCodes.f_KEY_F6__org_gwtproject_event_dom_client_KeyCodes = 117;
/** @public {number} @const */
KeyCodes.f_KEY_F7__org_gwtproject_event_dom_client_KeyCodes = 118;
/** @public {number} @const */
KeyCodes.f_KEY_F8__org_gwtproject_event_dom_client_KeyCodes = 119;
/** @public {number} @const */
KeyCodes.f_KEY_F9__org_gwtproject_event_dom_client_KeyCodes = 120;
/** @public {number} @const */
KeyCodes.f_KEY_F10__org_gwtproject_event_dom_client_KeyCodes = 121;
/** @public {number} @const */
KeyCodes.f_KEY_F11__org_gwtproject_event_dom_client_KeyCodes = 122;
/** @public {number} @const */
KeyCodes.f_KEY_F12__org_gwtproject_event_dom_client_KeyCodes = 123;
/** @public {number} @const */
KeyCodes.f_KEY_WIN_KEY_FF_LINUX__org_gwtproject_event_dom_client_KeyCodes = 0;
/** @public {number} @const */
KeyCodes.f_KEY_MAC_ENTER__org_gwtproject_event_dom_client_KeyCodes = 3;
/** @public {number} @const */
KeyCodes.f_KEY_PAUSE__org_gwtproject_event_dom_client_KeyCodes = 19;
/** @public {number} @const */
KeyCodes.f_KEY_CAPS_LOCK__org_gwtproject_event_dom_client_KeyCodes = 20;
/** @public {number} @const */
KeyCodes.f_KEY_SPACE__org_gwtproject_event_dom_client_KeyCodes = 32;
/** @public {number} @const */
KeyCodes.f_KEY_PRINT_SCREEN__org_gwtproject_event_dom_client_KeyCodes = 44;
/** @public {number} @const */
KeyCodes.f_KEY_INSERT__org_gwtproject_event_dom_client_KeyCodes = 45;
/** @public {number} @const */
KeyCodes.f_KEY_NUM_CENTER__org_gwtproject_event_dom_client_KeyCodes = 12;
/** @public {number} @const */
KeyCodes.f_KEY_WIN_KEY__org_gwtproject_event_dom_client_KeyCodes = 224;
/** @public {number} @const */
KeyCodes.f_KEY_WIN_KEY_LEFT_META__org_gwtproject_event_dom_client_KeyCodes = 91;
/** @public {number} @const */
KeyCodes.f_KEY_WIN_KEY_RIGHT__org_gwtproject_event_dom_client_KeyCodes = 92;
/** @public {number} @const */
KeyCodes.f_KEY_CONTEXT_MENU__org_gwtproject_event_dom_client_KeyCodes = 93;
/** @public {number} @const */
KeyCodes.f_KEY_MAC_FF_META__org_gwtproject_event_dom_client_KeyCodes = 224;
/** @public {number} @const */
KeyCodes.f_KEY_NUMLOCK__org_gwtproject_event_dom_client_KeyCodes = 144;
/** @public {number} @const */
KeyCodes.f_KEY_SCROLL_LOCK__org_gwtproject_event_dom_client_KeyCodes = 145;
/** @public {number} @const */
KeyCodes.f_KEY_FIRST_MEDIA_KEY__org_gwtproject_event_dom_client_KeyCodes = 166;
/** @public {number} @const */
KeyCodes.f_KEY_LAST_MEDIA_KEY__org_gwtproject_event_dom_client_KeyCodes = 183;
/** @public {number} @const */
KeyCodes.f_KEY_WIN_IME__org_gwtproject_event_dom_client_KeyCodes = 229;

exports = KeyCodes; 
//# sourceMappingURL=KeyCodes.js.map