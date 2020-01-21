/*
 * Copyright 2010 Google Inc.
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
package org.gwtproject.safehtml.shared;

                                              
                                                     
                                                  

                                                                  

/**
 * SafeHtml utilities whose implementation differs between Development and
 * Production Mode.
 *
 * <p>
 * This class has a super-source peer that provides the Production Mode
 * implementation.
 */
public class SafeHtmlHostedModeUtils {
  private static class JsImpl {
    public boolean isCompleteHtml(String html) {
      return true;
    }
    public void maybeCheckCompleteHtml(String html) {
    }

    public boolean getForceCheckCompleteHtmlFromProperty() {
      return false;
    }
  }
  private static class JreImpl extends JsImpl {
                    
             
                                                
                                                               
           
                               
                                  
                     
       
                                                           
                                                                   
     

                    
             
                                                     
                                   
                                           
                                                                                  
                              
              
                                     
                                                                                
                               
       
     

    private static void checkArgument(boolean completeHtml, String message) {
      if (!completeHtml) {
        throw new IllegalArgumentException(message);
      }
    }

                    
             
                                                            
                                                                   
     
  }

  /**
   * Name of system property that if set, enables checks in server-side code
   * (even if assertions are disabled).
   */
  public static final String FORCE_CHECK_COMPLETE_HTML =
      "com.google.gwt.safehtml.ForceCheckCompleteHtml";

  private static boolean forceCheckCompleteHtml;

  private static final JreImpl impl = new JreImpl();

  static {
    setForceCheckCompleteHtmlFromProperty();
  }

  /**
   * Returns whether the provided HTML string is complete (ends in "inner HTML"
   * context).
   *
   * <p>
   * This method parses the provided string as HTML and determines the HTML
   * context at the end of the string. This method returns true if and only if
   * the context is "inner HTML text".
   *
   * <p>
   * For example, this method returns true for the following strings:
   *
   * <pre>{@code
   *   <foo>blah
   *   baz<em>foo</em> <x a="b">hello
   * }</pre>
   *
   * <p>
   * This method returns false for the following strings:
   *
   * <pre>{@code
   *   baz<em>foo</em> <x
   *   baz<em>foo</em> <x a="b
   *   baz<em>foo</em> <x a="b"
   * }</pre>
   *
   * <p>
   * Note that the parser is lenient and this method will return true for HTML
   * that is not well-formed, or contains invalid tags, as long as the parser
   * can determine the HTML context at the end of the string.
   *
   * @param html the HTML to check.
   * @return true if the provided HTML string is complete.
   */
  public static boolean isCompleteHtml(String html) {
    return impl.isCompleteHtml(html);
  }

  /**
   * Conditionally checks if the provided HTML string is complete (ends in "inner HTML"
   * context).
   *
   * <p>
   * This check is intended to assert a convention-of-use constraint of {@link
   * org.gwtproject.safehtml.shared.SafeHtmlBuilder#appendHtmlConstant(String)}
   * and {@link
   * org.gwtproject.safehtml.shared.SafeHtmlUtils#fromSafeConstant(String)}.
   * Since the check is somewhat expensive, it is intended to run only in the
   * context of unit-tests or test environments, and not in production
   * environments. Hence this check will only execute under the following
   * conditions, and will be short-circuited otherwise:
   *
   * <ul>
   * <li>In client-side code in Development Mode,</li>
   * <li>In server-side code if assertions are enabled,</li>
   * <li>In server-side code if the property {@code
   * com.google.gwt.safehtml.ForceCheckCompleteHtml} is set.</li>
   * <li>In server-side code if {@link #setForceCheckCompleteHtml(boolean)} has
   * been called with a {@code true} argument.</li>
   * </ul>
   *
   * @param html the HTML to check
   * @see #isCompleteHtml(String)
   */
  public static void maybeCheckCompleteHtml(String html) {
    impl.maybeCheckCompleteHtml(html);
  }

  /**
   * Sets a global flag that controls whether or not
   * {@link #maybeCheckCompleteHtml(String)} should perform its check in a
   * server-side environment.
   *
   * @param check if true, perform server-side checks.
   */
  public static void setForceCheckCompleteHtml(boolean check) {
    forceCheckCompleteHtml = check;
  }

  /**
   * Sets a global flag that controls whether or not
   * {@link #maybeCheckCompleteHtml(String)} should perform its check in a
   * server-side environment from the value of the {@value
   * FORCE_CHECK_COMPLETE_HTML} property.
   */
  // The following annotation causes javadoc to crash on Mac OS X 10.5.8,
  // using java 1.5.0_24.
  //
  // See http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=6442982
  //
  // @VisibleForTesting
  public static void setForceCheckCompleteHtmlFromProperty() {
    forceCheckCompleteHtml = impl.getForceCheckCompleteHtmlFromProperty();
  }
}
