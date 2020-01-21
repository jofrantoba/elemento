package org.jboss.elemento.sample.crysknife;

import org.treblereel.gwt.crysknife.client.internal.Factory;
import javax.inject.Provider;
import org.treblereel.gwt.crysknife.client.BeanManagerImpl;
import org.treblereel.gwt.crysknife.client.Instance;

public class ApplicationElement_Factory implements Factory<ApplicationElement> {

    @Override()
    public ApplicationElement get() {
        if (this.instance != null)
            return this.instance;
        this.instance = new ApplicationElement(org_jboss_elemento_sample_crysknife_todorepository.get());
        return this.instance;
    }

    private ApplicationElement_Factory() {
        this.org_jboss_elemento_sample_crysknife_todorepository = BeanManagerImpl.get().lookupBean(org.jboss.elemento.sample.crysknife.TodoRepository.class);
    }

    final private org.treblereel.gwt.crysknife.client.Instance<org.jboss.elemento.sample.crysknife.TodoRepository> org_jboss_elemento_sample_crysknife_todorepository;

    private ApplicationElement instance;

    public static ApplicationElement_Factory create() {
        return new ApplicationElement_Factory();
    }
}
