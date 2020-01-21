/*
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package elemental2.dom;

import elemental2.core.JsArray;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class DataTransfer {
  public String dropEffect;
  public String effectAllowed;
  public FileList files;
  public DataTransferItemList items;
  public JsArray<String> types;

  public native void addElement(HTMLElement elem);

  public native void clearData();

  public native void clearData(String format);

  public native String getData(String format);

  public native boolean setData(String format, String data);

  public native void setDragImage(HTMLElement img, double x, int y);
}
