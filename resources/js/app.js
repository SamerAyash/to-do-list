/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('todo', require('./components/Todo.vue'));
Vue.component('new-todo', require('./components/NewTodo.vue'));
Vue.component('todo-list', require('./components/TodoList.vue'));
Vue.component('todo-app', require('./components/TodoApp.vue').default);
import store from './store';

const app = new Vue({
    el: '#app',
    store,

});
