goog.module('org.gwtproject.user.client.ui.MultiWordSuggestOracle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SuggestOracle = goog.require('org.gwtproject.user.client.ui.SuggestOracle$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let TreeSet = goog.forwardDeclare('java.util.TreeSet$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let MultiWordSuggestion = goog.forwardDeclare('org.gwtproject.user.client.ui.MultiWordSuggestOracle.MultiWordSuggestion$impl');
let WordBounds = goog.forwardDeclare('org.gwtproject.user.client.ui.MultiWordSuggestOracle.WordBounds$impl');
let PrefixTree = goog.forwardDeclare('org.gwtproject.user.client.ui.PrefixTree$impl');
let Callback = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Callback$impl');
let Request = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Request$impl');
let Response = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Response$impl');
let Suggestion = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Suggestion$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $char = goog.forwardDeclare('vmbootstrap.primitives.$char$impl');

class MultiWordSuggestOracle extends SuggestOracle {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {PrefixTree} */
  this.f_tree__org_gwtproject_user_client_ui_MultiWordSuggestOracle_;
  /** @public {HashMap<?string, Set<?string>>} */
  this.f_toCandidates__org_gwtproject_user_client_ui_MultiWordSuggestOracle_;
  /** @public {HashMap<?string, List<?string>>} */
  this.f_toRealSuggestions__org_gwtproject_user_client_ui_MultiWordSuggestOracle_;
  /** @public {boolean} */
  this.f_suggestAllMatchingWords__org_gwtproject_user_client_ui_MultiWordSuggestOracle_ = false;
  /** @public {Array<number>} */
  this.f_whitespaceChars__org_gwtproject_user_client_ui_MultiWordSuggestOracle_;
  /** @public {Response} */
  this.f_defaultResponse__org_gwtproject_user_client_ui_MultiWordSuggestOracle_;
  /** @public {Comparator<?string>} */
  this.f_comparator__org_gwtproject_user_client_ui_MultiWordSuggestOracle_;
 }
 /**
  * Factory method corresponding to constructor 'MultiWordSuggestOracle()'.
  * @return {!MultiWordSuggestOracle}
  * @public
  */
 static $create__() {
  MultiWordSuggestOracle.$clinit();
  let $instance = new MultiWordSuggestOracle();
  $instance.$ctor__org_gwtproject_user_client_ui_MultiWordSuggestOracle__();
  return $instance;
 }
 /**
  * Initialization from constructor 'MultiWordSuggestOracle()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MultiWordSuggestOracle__() {
  this.$ctor__org_gwtproject_user_client_ui_MultiWordSuggestOracle__java_lang_String(" ");
 }
 /**
  * Factory method corresponding to constructor 'MultiWordSuggestOracle(String)'.
  * @param {?string} whitespaceChars
  * @return {!MultiWordSuggestOracle}
  * @public
  */
 static $create__java_lang_String(whitespaceChars) {
  MultiWordSuggestOracle.$clinit();
  let $instance = new MultiWordSuggestOracle();
  $instance.$ctor__org_gwtproject_user_client_ui_MultiWordSuggestOracle__java_lang_String(whitespaceChars);
  return $instance;
 }
 /**
  * Initialization from constructor 'MultiWordSuggestOracle(String)'.
  * @param {?string} whitespaceChars
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MultiWordSuggestOracle__java_lang_String(whitespaceChars) {
  this.$ctor__org_gwtproject_user_client_ui_SuggestOracle__();
  this.$init___$p_org_gwtproject_user_client_ui_MultiWordSuggestOracle();
  this.f_whitespaceChars__org_gwtproject_user_client_ui_MultiWordSuggestOracle_ = /**@type {!Array<number>} */ ($Arrays.$create([j_l_String.m_length__java_lang_String(whitespaceChars)], $char));
  for (let i = 0; i < j_l_String.m_length__java_lang_String(whitespaceChars); i++) {
   $Arrays.$set(this.f_whitespaceChars__org_gwtproject_user_client_ui_MultiWordSuggestOracle_, i, j_l_String.m_charAt__java_lang_String__int(whitespaceChars, i));
  }
 }
 /**
  * @param {?string} suggestion
  * @public
  */
 m_add__java_lang_String(suggestion) {
  let candidate = this.m_normalizeSuggestion__java_lang_String_$p_org_gwtproject_user_client_ui_MultiWordSuggestOracle(suggestion);
  let realSuggestions = /**@type {List<?string>} */ ($Casts.$to(this.f_toRealSuggestions__org_gwtproject_user_client_ui_MultiWordSuggestOracle_.get(candidate), List));
  if ($Equality.$same(realSuggestions, null)) {
   realSuggestions = /**@type {!ArrayList<?string>} */ (ArrayList.$create__());
   this.f_toRealSuggestions__org_gwtproject_user_client_ui_MultiWordSuggestOracle_.put(candidate, realSuggestions);
  }
  realSuggestions.addAtIndex(0, suggestion);
  let words = j_l_String.m_split__java_lang_String__java_lang_String(candidate, MultiWordSuggestOracle.f_WHITESPACE_STRING__org_gwtproject_user_client_ui_MultiWordSuggestOracle_);
  for (let i = 0; i < words.length; i++) {
   let word = words[i];
   this.f_tree__org_gwtproject_user_client_ui_MultiWordSuggestOracle_.add(word);
   let l = /**@type {Set<?string>} */ ($Casts.$to(this.f_toCandidates__org_gwtproject_user_client_ui_MultiWordSuggestOracle_.get(word), Set));
   if ($Equality.$same(l, null)) {
    l = /**@type {!HashSet<?string>} */ (HashSet.$create__());
    this.f_toCandidates__org_gwtproject_user_client_ui_MultiWordSuggestOracle_.put(word, l);
   }
   l.add(candidate);
  }
 }
 /**
  * @param {Collection<?string>} collection
  * @public
  */
 m_addAll__java_util_Collection(collection) {
  for (let $iterator = collection.m_iterator__(); $iterator.m_hasNext__(); ) {
   let suggestion = /**@type {?string} */ ($Casts.$to($iterator.m_next__(), j_l_String));
   this.m_add__java_lang_String(suggestion);
  }
 }
 /**
  * @public
  */
 m_clear__() {
  this.f_tree__org_gwtproject_user_client_ui_MultiWordSuggestOracle_.clear();
  this.f_toCandidates__org_gwtproject_user_client_ui_MultiWordSuggestOracle_.clear();
  this.f_toRealSuggestions__org_gwtproject_user_client_ui_MultiWordSuggestOracle_.clear();
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isDisplayStringHTML__() {
  return true;
 }
 /**
  * @override
  * @param {Request} request
  * @param {Callback} callback
  * @public
  */
 m_requestDefaultSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Request__org_gwtproject_user_client_ui_SuggestOracle_Callback(request, callback) {
  if (!$Equality.$same(this.f_defaultResponse__org_gwtproject_user_client_ui_MultiWordSuggestOracle_, null)) {
   callback.m_onSuggestionsReady__org_gwtproject_user_client_ui_SuggestOracle_Request__org_gwtproject_user_client_ui_SuggestOracle_Response(request, this.f_defaultResponse__org_gwtproject_user_client_ui_MultiWordSuggestOracle_);
  } else {
   super.m_requestDefaultSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Request__org_gwtproject_user_client_ui_SuggestOracle_Callback(request, callback);
  }
 }
 /**
  * @override
  * @param {Request} request
  * @param {Callback} callback
  * @public
  */
 m_requestSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Request__org_gwtproject_user_client_ui_SuggestOracle_Callback(request, callback) {
  let query = this.m_normalizeSearch__java_lang_String_$p_org_gwtproject_user_client_ui_MultiWordSuggestOracle(request.m_getQuery__());
  let limit = request.m_getLimit__();
  let candidates = this.m_createCandidatesFromSearch__java_lang_String_$p_org_gwtproject_user_client_ui_MultiWordSuggestOracle(query);
  let numberTruncated = Math.max(0, candidates.size() - limit);
  for (let i = candidates.size() - 1; i > limit; i--) {
   candidates.removeAtIndex(i);
  }
  let suggestions = this.m_convertToFormattedSuggestions__java_lang_String__java_util_List_$p_org_gwtproject_user_client_ui_MultiWordSuggestOracle(query, candidates);
  let response = Response.$create__java_util_Collection(suggestions);
  response.m_setMoreSuggestionsCount__int(numberTruncated);
  callback.m_onSuggestionsReady__org_gwtproject_user_client_ui_SuggestOracle_Request__org_gwtproject_user_client_ui_SuggestOracle_Response(request, response);
 }
 /**
  * @param {Comparator<?string>} comparator
  * @public
  */
 m_setComparator__java_util_Comparator(comparator) {
  this.f_comparator__org_gwtproject_user_client_ui_MultiWordSuggestOracle_ = comparator;
 }
 /**
  * @param {Collection<Suggestion>} suggestionList
  * @public
  */
 m_setDefaultSuggestions__java_util_Collection(suggestionList) {
  this.f_defaultResponse__org_gwtproject_user_client_ui_MultiWordSuggestOracle_ = Response.$create__java_util_Collection(suggestionList);
 }
 /**
  * @param {Collection<?string>} suggestionList
  * @public
  */
 m_setDefaultSuggestionsFromText__java_util_Collection(suggestionList) {
  let accum = /**@type {!ArrayList<Suggestion>} */ (ArrayList.$create__());
  for (let $iterator = suggestionList.m_iterator__(); $iterator.m_hasNext__(); ) {
   let candidate = /**@type {?string} */ ($Casts.$to($iterator.m_next__(), j_l_String));
   accum.add(this.m_createSuggestion__java_lang_String__java_lang_String(candidate, SafeHtmlUtils.m_htmlEscape__java_lang_String(candidate)));
  }
  this.m_setDefaultSuggestions__java_util_Collection(accum);
 }
 /**
  * @param {boolean} suggestAllMatchingWords
  * @public
  */
 m_setSuggestAllMatchingWords__boolean(suggestAllMatchingWords) {
  this.f_suggestAllMatchingWords__org_gwtproject_user_client_ui_MultiWordSuggestOracle_ = suggestAllMatchingWords;
 }
 /**
  * @param {?string} replacementString
  * @param {?string} displayString
  * @return {MultiWordSuggestion}
  * @public
  */
 m_createSuggestion__java_lang_String__java_lang_String(replacementString, displayString) {
  return MultiWordSuggestion.$create__java_lang_String__java_lang_String(replacementString, displayString);
 }
 /**
  * @param {?string} query
  * @param {List<?string>} candidates
  * @return {List<MultiWordSuggestion>}
  * @public
  */
 m_convertToFormattedSuggestions__java_lang_String__java_util_List_$p_org_gwtproject_user_client_ui_MultiWordSuggestOracle(query, candidates) {
  let suggestions = /**@type {!ArrayList<MultiWordSuggestion>} */ (ArrayList.$create__());
  for (let i = 0; i < candidates.size(); i++) {
   let candidate = /**@type {?string} */ ($Casts.$to(candidates.getAtIndex(i), j_l_String));
   let realSuggestions = /**@type {List<?string>} */ ($Casts.$to(this.f_toRealSuggestions__org_gwtproject_user_client_ui_MultiWordSuggestOracle_.get(candidate), List));
   let realSuggestionsSet = /**@type {!TreeSet<?string>} */ (TreeSet.$create__());
   if (this.f_suggestAllMatchingWords__org_gwtproject_user_client_ui_MultiWordSuggestOracle_) {
    realSuggestionsSet.addAll(realSuggestions);
   } else {
    realSuggestionsSet.add(/**@type {?string} */ ($Casts.$to(realSuggestions.getAtIndex(0), j_l_String)));
   }
   let realSuggestionsIterator = realSuggestionsSet.m_iterator__();
   while (realSuggestionsIterator.m_hasNext__()) {
    let cursor = 0;
    let index = 0;
    let formattedSuggestion = /**@type {?string} */ ($Casts.$to(realSuggestionsIterator.m_next__(), j_l_String));
    let accum = SafeHtmlBuilder.$create__();
    let searchWords = j_l_String.m_split__java_lang_String__java_lang_String(query, MultiWordSuggestOracle.f_WHITESPACE_STRING__org_gwtproject_user_client_ui_MultiWordSuggestOracle_);
    while (true) {
     let wordBounds = this.m_findNextWord__java_lang_String__arrayOf_java_lang_String__int_$p_org_gwtproject_user_client_ui_MultiWordSuggestOracle(candidate, searchWords, index);
     if ($Equality.$same(wordBounds, null)) {
      break;
     }
     if (wordBounds.f_startIndex__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds == 0 || MultiWordSuggestOracle.f_WHITESPACE_CHAR__org_gwtproject_user_client_ui_MultiWordSuggestOracle_ == j_l_String.m_charAt__java_lang_String__int(candidate, wordBounds.f_startIndex__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds - 1)) {
      let part1 = j_l_String.m_substring__java_lang_String__int__int(formattedSuggestion, cursor, wordBounds.f_startIndex__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds);
      let part2 = j_l_String.m_substring__java_lang_String__int__int(formattedSuggestion, wordBounds.f_startIndex__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds, wordBounds.f_endIndex__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds);
      cursor = wordBounds.f_endIndex__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds;
      accum.m_appendEscaped__java_lang_String(part1);
      accum.m_appendHtmlConstant__java_lang_String("<strong>");
      accum.m_appendEscaped__java_lang_String(part2);
      accum.m_appendHtmlConstant__java_lang_String("</strong>");
     }
     index = wordBounds.f_endIndex__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds;
    }
    if (cursor == 0) {
     continue;
    }
    accum.m_appendEscaped__java_lang_String(j_l_String.m_substring__java_lang_String__int(formattedSuggestion, cursor));
    let suggestion = this.m_createSuggestion__java_lang_String__java_lang_String(formattedSuggestion, accum.m_toSafeHtml__().m_asString__());
    suggestions.add(suggestion);
   }
  }
  return suggestions;
 }
 /**
  * @param {?string} query
  * @return {List<?string>}
  * @public
  */
 m_createCandidatesFromSearch__java_lang_String_$p_org_gwtproject_user_client_ui_MultiWordSuggestOracle(query) {
  let candidates = /**@type {!ArrayList<?string>} */ (ArrayList.$create__());
  if (j_l_String.m_length__java_lang_String(query) == 0) {
   return candidates;
  }
  let searchWords = j_l_String.m_split__java_lang_String__java_lang_String(query, MultiWordSuggestOracle.f_WHITESPACE_STRING__org_gwtproject_user_client_ui_MultiWordSuggestOracle_);
  let candidateSet = null;
  for (let i = 0; i < searchWords.length; i++) {
   let word = searchWords[i];
   if (j_l_String.m_length__java_lang_String(word) == 0 || j_l_String.m_matches__java_lang_String__java_lang_String(word, MultiWordSuggestOracle.f_WHITESPACE_STRING__org_gwtproject_user_client_ui_MultiWordSuggestOracle_)) {
    continue;
   }
   let thisWordChoices = this.m_createCandidatesFromWord__java_lang_String_$p_org_gwtproject_user_client_ui_MultiWordSuggestOracle(word);
   if ($Equality.$same(candidateSet, null)) {
    candidateSet = thisWordChoices;
   } else {
    candidateSet.retainAll(thisWordChoices);
    if (candidateSet.size() < 2) {
     break;
    }
   }
  }
  if (!$Equality.$same(candidateSet, null)) {
   candidates.addAll(candidateSet);
   Collections.m_sort__java_util_List__java_util_Comparator(candidates, this.f_comparator__org_gwtproject_user_client_ui_MultiWordSuggestOracle_);
  }
  return candidates;
 }
 /**
  * @param {?string} query
  * @return {HashSet<?string>}
  * @public
  */
 m_createCandidatesFromWord__java_lang_String_$p_org_gwtproject_user_client_ui_MultiWordSuggestOracle(query) {
  let candidateSet = /**@type {!HashSet<?string>} */ (HashSet.$create__());
  let words = this.f_tree__org_gwtproject_user_client_ui_MultiWordSuggestOracle_.m_getSuggestions__java_lang_String__int(query, Integer.f_MAX_VALUE__java_lang_Integer);
  if (!$Equality.$same(words, null)) {
   for (let i = 0; i < words.size(); i++) {
    let belongsTo = /**@type {Set<?string>} */ ($Casts.$to(this.f_toCandidates__org_gwtproject_user_client_ui_MultiWordSuggestOracle_.get(/**@type {?string} */ ($Casts.$to(words.getAtIndex(i), j_l_String))), Set));
    if (!$Equality.$same(belongsTo, null)) {
     candidateSet.addAll(belongsTo);
    }
   }
  }
  return candidateSet;
 }
 /**
  * @param {?string} candidate
  * @param {Array<?string>} searchWords
  * @param {number} indexToStartAt
  * @return {WordBounds}
  * @public
  */
 m_findNextWord__java_lang_String__arrayOf_java_lang_String__int_$p_org_gwtproject_user_client_ui_MultiWordSuggestOracle(candidate, searchWords, indexToStartAt) {
  let firstWord = null;
  for (let $array = searchWords, $index = 0; $index < $array.length; $index++) {
   let word = $array[$index];
   let index = j_l_String.m_indexOf__java_lang_String__java_lang_String__int(candidate, word, indexToStartAt);
   if (index != -1) {
    let newWord = WordBounds.$create__int__int(index, j_l_String.m_length__java_lang_String(word));
    if ($Equality.$same(firstWord, null) || newWord.m_compareTo__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds(firstWord) < 0) {
     firstWord = newWord;
    }
   }
  }
  return firstWord;
 }
 /**
  * @param {?string} search
  * @return {?string}
  * @public
  */
 m_normalizeSearch__java_lang_String_$p_org_gwtproject_user_client_ui_MultiWordSuggestOracle(search) {
  search = this.m_normalizeSuggestion__java_lang_String_$p_org_gwtproject_user_client_ui_MultiWordSuggestOracle(search);
  search = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(search, MultiWordSuggestOracle.f_NORMALIZE_TO_SINGLE_WHITE_SPACE__org_gwtproject_user_client_ui_MultiWordSuggestOracle_, MultiWordSuggestOracle.f_WHITESPACE_STRING__org_gwtproject_user_client_ui_MultiWordSuggestOracle_);
  return j_l_String.m_trim__java_lang_String(search);
 }
 /**
  * @param {?string} formattedSuggestion
  * @return {?string}
  * @public
  */
 m_normalizeSuggestion__java_lang_String_$p_org_gwtproject_user_client_ui_MultiWordSuggestOracle(formattedSuggestion) {
  formattedSuggestion = j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(formattedSuggestion, Locale.f_ROOT__java_util_Locale);
  if (!$Equality.$same(this.f_whitespaceChars__org_gwtproject_user_client_ui_MultiWordSuggestOracle_, null)) {
   for (let i = 0; i < this.f_whitespaceChars__org_gwtproject_user_client_ui_MultiWordSuggestOracle_.length; i++) {
    let ignore = this.f_whitespaceChars__org_gwtproject_user_client_ui_MultiWordSuggestOracle_[i];
    formattedSuggestion = j_l_String.m_replace__java_lang_String__char__char(formattedSuggestion, ignore, MultiWordSuggestOracle.f_WHITESPACE_CHAR__org_gwtproject_user_client_ui_MultiWordSuggestOracle_);
   }
  }
  return formattedSuggestion;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_MultiWordSuggestOracle() {
  this.f_tree__org_gwtproject_user_client_ui_MultiWordSuggestOracle_ = PrefixTree.$create__();
  this.f_toCandidates__org_gwtproject_user_client_ui_MultiWordSuggestOracle_ = /**@type {!HashMap<?string, Set<?string>>} */ (HashMap.$create__());
  this.f_toRealSuggestions__org_gwtproject_user_client_ui_MultiWordSuggestOracle_ = /**@type {!HashMap<?string, List<?string>>} */ (HashMap.$create__());
  this.f_suggestAllMatchingWords__org_gwtproject_user_client_ui_MultiWordSuggestOracle_ = false;
  this.f_comparator__org_gwtproject_user_client_ui_MultiWordSuggestOracle_ = null;
 }
 /**
  * @public
  */
 static $clinit() {
  MultiWordSuggestOracle.$clinit = () =>{};
  MultiWordSuggestOracle.$loadModules();
  SuggestOracle.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MultiWordSuggestOracle;
 }
 /**
  * @public
  */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  List = goog.module.get('java.util.List$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  Set = goog.module.get('java.util.Set$impl');
  TreeSet = goog.module.get('java.util.TreeSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SafeHtmlBuilder = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  MultiWordSuggestion = goog.module.get('org.gwtproject.user.client.ui.MultiWordSuggestOracle.MultiWordSuggestion$impl');
  WordBounds = goog.module.get('org.gwtproject.user.client.ui.MultiWordSuggestOracle.WordBounds$impl');
  PrefixTree = goog.module.get('org.gwtproject.user.client.ui.PrefixTree$impl');
  Response = goog.module.get('org.gwtproject.user.client.ui.SuggestOracle.Response$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $char = goog.module.get('vmbootstrap.primitives.$char$impl');
 }
 
}
$Util.$setClassMetadata(MultiWordSuggestOracle, 'org.gwtproject.user.client.ui.MultiWordSuggestOracle');

/** @public {number} @const */
MultiWordSuggestOracle.f_WHITESPACE_CHAR__org_gwtproject_user_client_ui_MultiWordSuggestOracle_ = 32 /* ' ' */;
/** @public {?string} @const */
MultiWordSuggestOracle.f_WHITESPACE_STRING__org_gwtproject_user_client_ui_MultiWordSuggestOracle_ = " ";
/** @public {?string} @const */
MultiWordSuggestOracle.f_NORMALIZE_TO_SINGLE_WHITE_SPACE__org_gwtproject_user_client_ui_MultiWordSuggestOracle_ = "\\s+";

exports = MultiWordSuggestOracle; 
//# sourceMappingURL=MultiWordSuggestOracle.js.map