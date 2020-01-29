package org.treblereel.gwt.crysknife.client;

import javax.inject.Provider;
import java.util.Map;
import java.util.HashMap;
import java.lang.annotation.Annotation;
import org.treblereel.gwt.crysknife.client.Instance;
import org.treblereel.gwt.crysknife.client.internal.AbstractBeanManager;

public class BeanManagerImpl extends AbstractBeanManager {

    static private BeanManagerImpl instance;

    private void init() {
        this.register(org.treblereel.gwt.crysknife.client.BeanManager.class, org.treblereel.gwt.crysknife.client.BeanManager_Factory.create());
        this.register(org.jboss.elemento.sample.crysknife.TodoRepository.class, org.jboss.elemento.sample.crysknife.TodoRepository_Factory.create());
        this.register(org.jboss.elemento.sample.crysknife.ApplicationElement.class, org.jboss.elemento.sample.crysknife.ApplicationElement_Factory.create());
        this.register(org.jboss.elemento.sample.crysknife.FooterElement.class, org.jboss.elemento.sample.crysknife.FooterElement_Factory.create());
    }

    public static BeanManager get() {
        if (instance == null) {
            instance = new BeanManagerImpl();
            instance.init();
        }
        return instance;
    }
}
