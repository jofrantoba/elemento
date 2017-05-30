package org.jboss.gwt.elemento.core;

import elemental2.dom.HTMLElement;

/**
 * Builder for container-like elements with inner HTML.
 *
 * @author Harald Pehl
 */
public class HtmlContentBuilder<E extends HTMLElement> extends BaseBuilder<E, HtmlContentBuilder<E>>
        implements HtmlContent<E, HtmlContentBuilder<E>> {

    HtmlContentBuilder(E element) { super(element); }

    @Override
    public HtmlContentBuilder<E> that() { return this; }

    @Override
    protected String logId() { return "<elements.html>"; }
}
