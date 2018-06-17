import VueRouter from 'vue-router';

import forma from './components/forma.vue';
import cards from './components/cards.vue';
import home from './components/home.vue';
import navigation from './components/navigation.vue';


export default new VueRouter({
    routes: [

        {path: '/cards', component: cards},
        {path: '/', component: forma},
        {path: '/home',component:home},
        {path: '/navigation', components:navigation}


    ]
 });