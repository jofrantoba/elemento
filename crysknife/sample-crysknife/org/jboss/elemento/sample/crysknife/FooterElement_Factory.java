package org.jboss.elemento.sample.crysknife;

import org.treblereel.gwt.crysknife.client.internal.Factory;
import javax.inject.Provider;
import org.treblereel.gwt.crysknife.client.internal.OnFieldAccessed;
import org.treblereel.gwt.crysknife.client.Reflect;
import org.treblereel.gwt.crysknife.client.Interceptor;
import elemental2.dom.DomGlobal;
import org.jboss.gwt.elemento.template.TemplateUtil;
import jsinterop.base.Js;

public class FooterElement_Factory implements Factory<FooterElement> {

    private Interceptor interceptor;

    @Override()
    public FooterElement get() {
        if (this.instance != null)
            return this.instance;
        this.interceptor = new Interceptor(new FooterElement());
        this.instance = this.interceptor.getProxy();
        return this.instance;
    }

    private FooterElement instance;

    private FooterElement_Factory() {
    }

    final class FooterElement extends org.jboss.elemento.sample.crysknife.FooterElement {

        private final elemental2.dom.HTMLElement root = (elemental2.dom.HTMLElement) elemental2.dom.DomGlobal.document.createElement("footer");

        public FooterElement() {
            this.root.setAttribute("class", "info");
            this.root.innerHTML = "<p>Double-click to edit a todo</p> <p><span>Created by</span>&nbsp;<a href=\"http://hpehl.info\">Harald Pehl</a></p> <p><span>Part of</span>&nbsp;<a href=\"http://todomvc.com\">TodoMVC</a></p>";
        }

        @Override()
        public elemental2.dom.HTMLElement getElement() {
            return (elemental2.dom.HTMLElement) this.root;
        }
    }

    public static FooterElement_Factory create() {
        return new FooterElement_Factory();
    }
}
