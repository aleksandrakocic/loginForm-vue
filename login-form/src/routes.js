import VueRouter from 'vue-router';

// import form from './components/forma.vue';
import cards from './components/cards.vue';
import home from './components/home.vue';

export default new VueRouter({
    routes: [

        {path: '/cards', component: cards},
        // {path: '/form', component: form},
        {path: '/home',component:home}


    ]
 });