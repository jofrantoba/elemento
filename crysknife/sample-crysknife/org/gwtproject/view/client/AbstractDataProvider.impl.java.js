goog.module('org.gwtproject.view.client.AbstractDataProvider$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ProvidesKey = goog.require('org.gwtproject.view.client.ProvidesKey$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let $1 = goog.forwardDeclare('org.gwtproject.view.client.AbstractDataProvider.$1$impl');
let HasData = goog.forwardDeclare('org.gwtproject.view.client.HasData$impl');
let Range = goog.forwardDeclare('org.gwtproject.view.client.Range$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @template T
 * @implements {ProvidesKey<T>}
  */
class AbstractDataProvider extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Set<HasData<T>>}*/
  this.f_displays__org_gwtproject_view_client_AbstractDataProvider_;
  /**@type {ProvidesKey<T>}*/
  this.f_keyProvider__org_gwtproject_view_client_AbstractDataProvider_;
  /**@type {number}*/
  this.f_lastRowCount__org_gwtproject_view_client_AbstractDataProvider_ = 0;
  /**@type {boolean}*/
  this.f_lastRowCountExact__org_gwtproject_view_client_AbstractDataProvider_ = false;
  /**@type {Map<HasData<T>, HandlerRegistration>}*/
  this.f_rangeChangeHandlers__org_gwtproject_view_client_AbstractDataProvider_;
 }
 //Initialization from constructor 'AbstractDataProvider()'.
 
 $ctor__org_gwtproject_view_client_AbstractDataProvider__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_view_client_AbstractDataProvider();
  this.f_keyProvider__org_gwtproject_view_client_AbstractDataProvider_ = null;
 }
 //Initialization from constructor 'AbstractDataProvider(ProvidesKey)'.
 
 $ctor__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_view_client_ProvidesKey(/** ProvidesKey<T> */ keyProvider) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_view_client_AbstractDataProvider();
  this.f_keyProvider__org_gwtproject_view_client_AbstractDataProvider_ = keyProvider;
 }
 
 m_addDataDisplay__org_gwtproject_view_client_HasData(/** HasData<T> */ display) {
  if ($Equality.$same(display, null)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("display cannot be null"));
  } else if (this.f_displays__org_gwtproject_view_client_AbstractDataProvider_.contains(display)) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("The specified display has already been added to this adapter."));
  }
  this.f_displays__org_gwtproject_view_client_AbstractDataProvider_.add(display);
  let handler = display.m_addRangeChangeHandler__org_gwtproject_view_client_RangeChangeEvent_Handler(/**@type {!$1<T>}*/ ($1.$create__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_view_client_HasData(this, display)));
  this.f_rangeChangeHandlers__org_gwtproject_view_client_AbstractDataProvider_.put(display, handler);
  if (this.f_lastRowCount__org_gwtproject_view_client_AbstractDataProvider_ >= 0) {
   display.m_setRowCount__int__boolean(this.f_lastRowCount__org_gwtproject_view_client_AbstractDataProvider_, this.f_lastRowCountExact__org_gwtproject_view_client_AbstractDataProvider_);
  }
  this.m_onRangeChanged__org_gwtproject_view_client_HasData(display);
 }
 /** @return {Set<HasData<T>>} */
 m_getDataDisplays__() {
  return /**@type {Set<HasData<T>>}*/ (Collections.m_unmodifiableSet__java_util_Set(this.f_displays__org_gwtproject_view_client_AbstractDataProvider_));
 }
 /** @override @return {*} */
 m_getKey__java_lang_Object(/** T */ item) {
  return $Equality.$same(this.f_keyProvider__org_gwtproject_view_client_AbstractDataProvider_, null) ? item : this.f_keyProvider__org_gwtproject_view_client_AbstractDataProvider_.m_getKey__java_lang_Object(item);
 }
 /** @return {ProvidesKey<T>} */
 m_getKeyProvider__() {
  return this.f_keyProvider__org_gwtproject_view_client_AbstractDataProvider_;
 }
 /** @return {Array<Range>} */
 m_getRanges__() {
  let ranges = /**@type {!Array<Range>}*/ ($Arrays.$create([this.f_displays__org_gwtproject_view_client_AbstractDataProvider_.size()], Range));
  let i = 0;
  for (let $iterator = this.f_displays__org_gwtproject_view_client_AbstractDataProvider_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let display = /**@type {HasData<T>}*/ ($Casts.$to($iterator.m_next__(), HasData));
   $Arrays.$set(ranges, i++, display.m_getVisibleRange__());
  }
  return ranges;
 }
 
 m_removeDataDisplay__org_gwtproject_view_client_HasData(/** HasData<T> */ display) {
  if (!this.f_displays__org_gwtproject_view_client_AbstractDataProvider_.contains(display)) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("HasData not present"));
  }
  this.f_displays__org_gwtproject_view_client_AbstractDataProvider_.remove(display);
  let handler = /**@type {HandlerRegistration}*/ ($Casts.$to(this.f_rangeChangeHandlers__org_gwtproject_view_client_AbstractDataProvider_.remove(display), HandlerRegistration));
  handler.m_removeHandler__();
 }
 /** @abstract */
 m_onRangeChanged__org_gwtproject_view_client_HasData(/** HasData<T> */ display) {}
 
 m_updateRowCount__int__boolean(/** number */ count, /** boolean */ exact) {
  this.f_lastRowCount__org_gwtproject_view_client_AbstractDataProvider_ = count;
  this.f_lastRowCountExact__org_gwtproject_view_client_AbstractDataProvider_ = exact;
  for (let $iterator = this.f_displays__org_gwtproject_view_client_AbstractDataProvider_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let display = /**@type {HasData<T>}*/ ($Casts.$to($iterator.m_next__(), HasData));
   display.m_setRowCount__int__boolean(count, exact);
  }
 }
 
 m_updateRowData__int__java_util_List(/** number */ start, /** List<T> */ values) {
  for (let $iterator = this.f_displays__org_gwtproject_view_client_AbstractDataProvider_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let display = /**@type {HasData<T>}*/ ($Casts.$to($iterator.m_next__(), HasData));
   this.m_updateRowData__org_gwtproject_view_client_HasData__int__java_util_List(display, start, values);
  }
 }
 
 m_updateRowData__org_gwtproject_view_client_HasData__int__java_util_List(/** HasData<T> */ display, /** number */ start, /** List<T> */ values) {
  let end = start + values.size();
  let range = display.m_getVisibleRange__();
  let curStart = range.m_getStart__();
  let curLength = range.m_getLength__();
  let curEnd = curStart + curLength;
  if (start == curStart || (curStart < end && curEnd > start)) {
   let realStart = curStart < start ? start : curStart;
   let realEnd = curEnd > end ? end : curEnd;
   let realLength = realEnd - realStart;
   let realValues = values.subList(realStart - start, realStart - start + realLength);
   display.m_setRowData__int__java_util_List(realStart, realValues);
  }
 }
 /** @private */
 $init___$p_org_gwtproject_view_client_AbstractDataProvider() {
  this.f_displays__org_gwtproject_view_client_AbstractDataProvider_ = /**@type {!HashSet<HasData<T>>}*/ (HashSet.$create__());
  this.f_lastRowCount__org_gwtproject_view_client_AbstractDataProvider_ = -1;
  this.f_rangeChangeHandlers__org_gwtproject_view_client_AbstractDataProvider_ = /**@type {!HashMap<HasData<T>, HandlerRegistration>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  AbstractDataProvider.$clinit = () =>{};
  AbstractDataProvider.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractDataProvider;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HandlerRegistration = goog.module.get('org.gwtproject.event.shared.HandlerRegistration$impl');
  $1 = goog.module.get('org.gwtproject.view.client.AbstractDataProvider.$1$impl');
  HasData = goog.module.get('org.gwtproject.view.client.HasData$impl');
  Range = goog.module.get('org.gwtproject.view.client.Range$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(AbstractDataProvider, 'org.gwtproject.view.client.AbstractDataProvider');

ProvidesKey.$markImplementor(AbstractDataProvider);

exports = AbstractDataProvider; 
//# sourceMappingURL=AbstractDataProvider.js.map