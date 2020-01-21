package org.jboss.elemento.sample.crysknife;

import org.treblereel.gwt.crysknife.client.internal.Factory;
import javax.inject.Provider;

public class FooterElement_Factory implements Factory<FooterElement> {

    @Override()
    public FooterElement get() {
        if (this.instance != null)
            return this.instance;
        this.instance = new FooterElement();
        return this.instance;
    }

    private FooterElement instance;

    private FooterElement_Factory() {
    }

    public static FooterElement_Factory create() {
        return new FooterElement_Factory();
    }
}
