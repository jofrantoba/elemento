/*
 * Copyright 2012 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

package org.gwtproject.aria.client;
/////////////////////////////////////////////////////////
// This is auto-generated code.  Do not manually edit! //
/////////////////////////////////////////////////////////

/** Property enum for 'aria-autocomplete' values. */
public enum AutocompleteValue implements AriaAttributeType {
  INLINE,
  LIST,
  BOTH,
  NONE;

  @Override
  public String getAriaValue() {
    switch (this) {
      case INLINE:
        return "inline";
      case LIST:
        return "list";
      case BOTH:
        return "both";
      case NONE:
        return "none";
    }
    return null; // not reachable
  }
}
