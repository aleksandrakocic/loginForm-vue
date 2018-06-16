import VueRouter from 'vue-router';
import cards from './components/cards.vue';
// import matches from './src/components/matches.vue';
// import groups from './src/components/groups.vue';
// import singleGroup from './src/components/singleGroup.vue';
// import teams from './src/components/teams.vue';
// import singleTeam from './src/components/singleTeam.vue';

export default new VueRouter({
    routes: [

        {path: '/cards', component: cards}


    ]
 });