package org.jboss.elemento.sample.crysknife;

import org.treblereel.gwt.crysknife.client.internal.Factory;
import javax.inject.Provider;

public class TodoRepository_Factory implements Factory<TodoRepository> {

    @Override()
    public TodoRepository get() {
        if (this.instance != null)
            return this.instance;
        this.instance = new TodoRepository();
        return this.instance;
    }

    private TodoRepository instance;

    private TodoRepository_Factory() {
    }

    public static TodoRepository_Factory create() {
        return new TodoRepository_Factory();
    }
}
