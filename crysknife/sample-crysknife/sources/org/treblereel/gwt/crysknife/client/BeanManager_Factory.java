package org.treblereel.gwt.crysknife.client;

import org.treblereel.gwt.crysknife.client.internal.Factory;
import javax.inject.Provider;
import org.treblereel.gwt.crysknife.client.internal.OnFieldAccessed;
import org.treblereel.gwt.crysknife.client.Reflect;
import org.treblereel.gwt.crysknife.client.Interceptor;

public class BeanManager_Factory implements Factory<BeanManager> {

    private Interceptor interceptor;

    @Override()
    public BeanManager get() {
        return org.treblereel.gwt.crysknife.client.BeanManagerImpl.get();
    }

    private BeanManager_Factory() {
    }

    public static BeanManager_Factory create() {
        return new BeanManager_Factory();
    }
}
