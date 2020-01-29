goog.module('org.gwtproject.user.cellview.client.ColumnSortEvent.ListHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.user.cellview.client.ColumnSortEvent.Handler$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Column = goog.forwardDeclare('org.gwtproject.user.cellview.client.Column$impl');
let ColumnSortEvent = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortEvent$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortEvent.ListHandler.$1$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @implements {Handler}
  */
class ListHandler extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Map<Column<?, ?>, Comparator<T>>} */
  this.f_comparators__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_;
  /** @public {List<T>} */
  this.f_list__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_;
 }
 /**
  * @template T
  * @param {List<T>} list
  * @return {!ListHandler<T>}
  * @public
  */
 static $create__java_util_List(list) {
  ListHandler.$clinit();
  let $instance = new ListHandler();
  $instance.$ctor__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler__java_util_List(list);
  return $instance;
 }
 /**
  * @param {List<T>} list
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler__java_util_List(list) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler();
  this.f_list__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_ = list;
 }
 /**
  * @param {Column<T, ?>} column
  * @return {Comparator<T>}
  * @public
  */
 m_getComparator__org_gwtproject_user_cellview_client_Column(column) {
  return /**@type {Comparator<T>} */ ($Casts.$to(this.f_comparators__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_.get(column), Comparator));
 }
 /**
  * @return {List<T>}
  * @public
  */
 m_getList__() {
  return this.f_list__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_;
 }
 /**
  * @override
  * @param {ColumnSortEvent} event
  * @public
  */
 m_onColumnSort__org_gwtproject_user_cellview_client_ColumnSortEvent(event) {
  let column = event.m_getColumn__();
  if ($Equality.$same(column, null)) {
   return;
  }
  let comparator = /**@type {Comparator<T>} */ ($Casts.$to(this.f_comparators__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_.get(column), Comparator));
  if ($Equality.$same(comparator, null)) {
   return;
  }
  if (event.m_isSortAscending__()) {
   Collections.m_sort__java_util_List__java_util_Comparator(this.f_list__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_, comparator);
  } else {
   Collections.m_sort__java_util_List__java_util_Comparator(this.f_list__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_, /**@type {!$1<T>} */ ($1.$create__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler__java_util_Comparator(this, comparator)));
  }
 }
 /**
  * @param {Column<T, ?>} column
  * @param {Comparator<T>} comparator
  * @public
  */
 m_setComparator__org_gwtproject_user_cellview_client_Column__java_util_Comparator(column, comparator) {
  this.f_comparators__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_.put(column, comparator);
 }
 /**
  * @param {List<T>} list
  * @public
  */
 m_setList__java_util_List(list) {
  $Asserts.$assertWithMessage(!$Equality.$same(list, null), "list cannot be null");
  this.f_list__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_ = list;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler() {
  this.f_comparators__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_ = /**@type {!HashMap<Column<?, ?>, Comparator<T>>} */ (HashMap.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  ListHandler.$clinit = () =>{};
  ListHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ListHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  Comparator = goog.module.get('java.util.Comparator$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.user.cellview.client.ColumnSortEvent.ListHandler.$1$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ListHandler, 'org.gwtproject.user.cellview.client.ColumnSortEvent$ListHandler');

Handler.$markImplementor(ListHandler);

exports = ListHandler; 
//# sourceMappingURL=ColumnSortEvent$ListHandler.js.map