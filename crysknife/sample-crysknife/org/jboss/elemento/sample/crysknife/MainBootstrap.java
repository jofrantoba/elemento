package org.jboss.elemento.sample.crysknife;

import org.treblereel.gwt.crysknife.client.internal.Factory;
import org.treblereel.gwt.crysknife.client.internal.OnFieldAccessed;
import javax.inject.Provider;
import org.treblereel.gwt.crysknife.client.Reflect;
import org.jboss.elemento.sample.crysknife.Main;
import org.treblereel.gwt.crysknife.client.Interceptor;
import org.treblereel.gwt.crysknife.client.BeanManagerImpl;
import org.treblereel.gwt.crysknife.client.Instance;

public class MainBootstrap {

    private Main instance;

    private Interceptor interceptor;

    MainBootstrap(Main application) {
        this.org_jboss_elemento_sample_crysknife_todorepository = BeanManagerImpl.get().lookupBean(org.jboss.elemento.sample.crysknife.TodoRepository.class);
        this.org_jboss_elemento_sample_crysknife_applicationelement = BeanManagerImpl.get().lookupBean(org.jboss.elemento.sample.crysknife.ApplicationElement.class);
        this.org_jboss_elemento_sample_crysknife_footerelement = BeanManagerImpl.get().lookupBean(org.jboss.elemento.sample.crysknife.FooterElement.class);
        this.instance = application;
    }

    void initialize() {
        interceptor = new Interceptor(instance);
        instance = interceptor.getProxy();
        this.interceptor.addGetPropertyInterceptor(Reflect.objectProperty(MainInfo.repository, this.instance), new OnFieldAccessed(() -> org_jboss_elemento_sample_crysknife_todorepository.get()));
        this.interceptor.addGetPropertyInterceptor(Reflect.objectProperty(MainInfo.application, this.instance), new OnFieldAccessed(() -> org_jboss_elemento_sample_crysknife_applicationelement.get()));
        this.interceptor.addGetPropertyInterceptor(Reflect.objectProperty(MainInfo.footer, this.instance), new OnFieldAccessed(() -> org_jboss_elemento_sample_crysknife_footerelement.get()));
        this.instance.init();
    }

    final private org.treblereel.gwt.crysknife.client.Instance<org.jboss.elemento.sample.crysknife.TodoRepository> org_jboss_elemento_sample_crysknife_todorepository;

    final private org.treblereel.gwt.crysknife.client.Instance<org.jboss.elemento.sample.crysknife.ApplicationElement> org_jboss_elemento_sample_crysknife_applicationelement;

    final private org.treblereel.gwt.crysknife.client.Instance<org.jboss.elemento.sample.crysknife.FooterElement> org_jboss_elemento_sample_crysknife_footerelement;
}
