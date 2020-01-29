package org.jboss.elemento.sample.crysknife;

import org.treblereel.gwt.crysknife.client.internal.Factory;
import javax.inject.Provider;
import org.treblereel.gwt.crysknife.client.internal.OnFieldAccessed;
import org.treblereel.gwt.crysknife.client.Reflect;
import org.treblereel.gwt.crysknife.client.Interceptor;
import org.treblereel.gwt.crysknife.client.BeanManagerImpl;
import org.treblereel.gwt.crysknife.client.Instance;
import elemental2.dom.DomGlobal;
import org.jboss.gwt.elemento.template.TemplateUtil;
import jsinterop.base.Js;

public class ApplicationElement_Factory implements Factory<ApplicationElement> {

    private Interceptor interceptor;

    @Override()
    public ApplicationElement get() {
        if (this.instance != null)
            return this.instance;
        this.interceptor = new Interceptor(new ApplicationElement(org_jboss_elemento_sample_crysknife_todorepository.get()));
        this.instance = this.interceptor.getProxy();
        if (Js.asPropertyMap(instance).get(Reflect.objectProperty("f_newTodo__org_jboss_elemento_sample_crysknife_ApplicationElement", instance)) == null)
            Js.asPropertyMap(instance).set(Reflect.objectProperty("f_newTodo__org_jboss_elemento_sample_crysknife_ApplicationElement", instance), TemplateUtil.<elemental2.dom.HTMLInputElement>resolveElementAs(this.instance.getElement(), "newTodo"));
        else
            TemplateUtil.replaceElement(this.instance.getElement(), "newTodo", ((elemental2.dom.HTMLElement) Js.asPropertyMap(instance).get(Reflect.objectProperty("f_newTodo__org_jboss_elemento_sample_crysknife_ApplicationElement", instance))));
        if (Js.asPropertyMap(instance).get(Reflect.objectProperty("f_main__org_jboss_elemento_sample_crysknife_ApplicationElement", instance)) == null)
            Js.asPropertyMap(instance).set(Reflect.objectProperty("f_main__org_jboss_elemento_sample_crysknife_ApplicationElement", instance), TemplateUtil.resolveElement(this.instance.getElement(), "main"));
        else
            TemplateUtil.replaceElement(this.instance.getElement(), "main", ((elemental2.dom.HTMLElement) Js.asPropertyMap(instance).get(Reflect.objectProperty("f_main__org_jboss_elemento_sample_crysknife_ApplicationElement", instance))));
        if (Js.asPropertyMap(instance).get(Reflect.objectProperty("f_toggleAll__org_jboss_elemento_sample_crysknife_ApplicationElement", instance)) == null)
            Js.asPropertyMap(instance).set(Reflect.objectProperty("f_toggleAll__org_jboss_elemento_sample_crysknife_ApplicationElement", instance), TemplateUtil.<elemental2.dom.HTMLInputElement>resolveElementAs(this.instance.getElement(), "toggleAll"));
        else
            TemplateUtil.replaceElement(this.instance.getElement(), "toggleAll", ((elemental2.dom.HTMLElement) Js.asPropertyMap(instance).get(Reflect.objectProperty("f_toggleAll__org_jboss_elemento_sample_crysknife_ApplicationElement", instance))));
        if (Js.asPropertyMap(instance).get(Reflect.objectProperty("f_list__org_jboss_elemento_sample_crysknife_ApplicationElement", instance)) == null)
            Js.asPropertyMap(instance).set(Reflect.objectProperty("f_list__org_jboss_elemento_sample_crysknife_ApplicationElement", instance), TemplateUtil.<elemental2.dom.HTMLUListElement>resolveElementAs(this.instance.getElement(), "list"));
        else
            TemplateUtil.replaceElement(this.instance.getElement(), "list", ((elemental2.dom.HTMLElement) Js.asPropertyMap(instance).get(Reflect.objectProperty("f_list__org_jboss_elemento_sample_crysknife_ApplicationElement", instance))));
        if (Js.asPropertyMap(instance).get(Reflect.objectProperty("f_footer__org_jboss_elemento_sample_crysknife_ApplicationElement", instance)) == null)
            Js.asPropertyMap(instance).set(Reflect.objectProperty("f_footer__org_jboss_elemento_sample_crysknife_ApplicationElement", instance), TemplateUtil.resolveElement(this.instance.getElement(), "footer"));
        else
            TemplateUtil.replaceElement(this.instance.getElement(), "footer", ((elemental2.dom.HTMLElement) Js.asPropertyMap(instance).get(Reflect.objectProperty("f_footer__org_jboss_elemento_sample_crysknife_ApplicationElement", instance))));
        if (Js.asPropertyMap(instance).get(Reflect.objectProperty("f_count__org_jboss_elemento_sample_crysknife_ApplicationElement", instance)) == null)
            Js.asPropertyMap(instance).set(Reflect.objectProperty("f_count__org_jboss_elemento_sample_crysknife_ApplicationElement", instance), TemplateUtil.resolveElement(this.instance.getElement(), "count"));
        else
            TemplateUtil.replaceElement(this.instance.getElement(), "count", ((elemental2.dom.HTMLElement) Js.asPropertyMap(instance).get(Reflect.objectProperty("f_count__org_jboss_elemento_sample_crysknife_ApplicationElement", instance))));
        if (Js.asPropertyMap(instance).get(Reflect.objectProperty("f_filterAll__org_jboss_elemento_sample_crysknife_ApplicationElement", instance)) == null)
            Js.asPropertyMap(instance).set(Reflect.objectProperty("f_filterAll__org_jboss_elemento_sample_crysknife_ApplicationElement", instance), TemplateUtil.resolveElement(this.instance.getElement(), "filterAll"));
        else
            TemplateUtil.replaceElement(this.instance.getElement(), "filterAll", ((elemental2.dom.HTMLElement) Js.asPropertyMap(instance).get(Reflect.objectProperty("f_filterAll__org_jboss_elemento_sample_crysknife_ApplicationElement", instance))));
        if (Js.asPropertyMap(instance).get(Reflect.objectProperty("f_filterActive__org_jboss_elemento_sample_crysknife_ApplicationElement", instance)) == null)
            Js.asPropertyMap(instance).set(Reflect.objectProperty("f_filterActive__org_jboss_elemento_sample_crysknife_ApplicationElement", instance), TemplateUtil.resolveElement(this.instance.getElement(), "filterActive"));
        else
            TemplateUtil.replaceElement(this.instance.getElement(), "filterActive", ((elemental2.dom.HTMLElement) Js.asPropertyMap(instance).get(Reflect.objectProperty("f_filterActive__org_jboss_elemento_sample_crysknife_ApplicationElement", instance))));
        if (Js.asPropertyMap(instance).get(Reflect.objectProperty("f_filterCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement", instance)) == null)
            Js.asPropertyMap(instance).set(Reflect.objectProperty("f_filterCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement", instance), TemplateUtil.resolveElement(this.instance.getElement(), "filterCompleted"));
        else
            TemplateUtil.replaceElement(this.instance.getElement(), "filterCompleted", ((elemental2.dom.HTMLElement) Js.asPropertyMap(instance).get(Reflect.objectProperty("f_filterCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement", instance))));
        if (Js.asPropertyMap(instance).get(Reflect.objectProperty("f_clearCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement", instance)) == null)
            Js.asPropertyMap(instance).set(Reflect.objectProperty("f_clearCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement", instance), TemplateUtil.<elemental2.dom.HTMLButtonElement>resolveElementAs(this.instance.getElement(), "clearCompleted"));
        else
            TemplateUtil.replaceElement(this.instance.getElement(), "clearCompleted", ((elemental2.dom.HTMLElement) Js.asPropertyMap(instance).get(Reflect.objectProperty("f_clearCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement", instance))));
        ((elemental2.dom.HTMLElement) Js.asPropertyMap(instance).get(Reflect.objectProperty("f_newTodo__org_jboss_elemento_sample_crysknife_ApplicationElement", instance))).addEventListener("keydown", e -> this.instance.newTodo(jsinterop.base.Js.uncheckedCast(e)));
        ((elemental2.dom.HTMLElement) Js.asPropertyMap(instance).get(Reflect.objectProperty("f_newTodo__org_jboss_elemento_sample_crysknife_ApplicationElement", instance))).addEventListener("change", e -> this.instance.toggleAll(jsinterop.base.Js.uncheckedCast(e)));
        ((elemental2.dom.HTMLElement) Js.asPropertyMap(instance).get(Reflect.objectProperty("f_clearCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement", instance))).addEventListener("click", e -> this.instance.clearCompleted(jsinterop.base.Js.uncheckedCast(e)));
        this.instance.init();
        return this.instance;
    }

    private ApplicationElement_Factory() {
        this.org_jboss_elemento_sample_crysknife_todorepository = BeanManagerImpl.get().lookupBean(org.jboss.elemento.sample.crysknife.TodoRepository.class);
    }

    final private org.treblereel.gwt.crysknife.client.Instance<org.jboss.elemento.sample.crysknife.TodoRepository> org_jboss_elemento_sample_crysknife_todorepository;

    private ApplicationElement instance;

    final class ApplicationElement extends org.jboss.elemento.sample.crysknife.ApplicationElement {

        private final elemental2.dom.HTMLElement root = (elemental2.dom.HTMLElement) elemental2.dom.DomGlobal.document.createElement("section");

        public ApplicationElement(org.jboss.elemento.sample.crysknife.TodoRepository repository) {
            super(repository);
            this.root.setAttribute("class", "todoapp");
            this.root.innerHTML = "<header class=\"header\">  <h1>todos</h1>  <input data-field=\"newTodo\" class=\"new-todo\" placeholder=\"What needs to be done?\" autofocus> </header> <section data-field=\"main\" class=\"main\">  <input data-field=\"toggleAll\" class=\"toggle-all\" id=\"toggle-all\" type=\"checkbox\">  <label for=\"toggle-all\">Mark all as complete</label>  <ul data-field=\"list\" class=\"todo-list\">   <li>    <div class=\"view\">     <input class=\"toggle\" type=\"checkbox\" checked>     <label>Taste Elemento</label>     <button class=\"destroy\"></button>    </div> <input class=\"edit\" value=\"Taste Elemento\"> </li>   <li class=\"completed\">    <div class=\"view\">     <input class=\"toggle\" type=\"checkbox\">     <label>Rule the web</label>     <button class=\"destroy\"></button>    </div> <input class=\"edit\" value=\"Rule the web\"> </li>  </ul> </section> <footer data-field=\"footer\" class=\"footer\">  <span data-field=\"count\" class=\"todo-count\"><strong>0</strong> item left</span>  <ul class=\"filters\">   <li> <a data-field=\"filterAll\" href=\"#/\">All</a> </li>   <li> <a data-field=\"filterActive\" href=\"#/active\">Active</a> </li>   <li> <a data-field=\"filterCompleted\" href=\"#/completed\">Completed</a> </li>  </ul>  <button data-field=\"clearCompleted\" class=\"clear-completed\">Clear completed</button> </footer>";
        }

        @Override()
        public elemental2.dom.HTMLElement getElement() {
            return (elemental2.dom.HTMLElement) this.root;
        }
    }

    public static ApplicationElement_Factory create() {
        return new ApplicationElement_Factory();
    }
}
