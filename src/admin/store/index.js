import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        topNavOne: '首页',
        topNavTwo: '',
        topNavThree: ''
    },
    mutations: {
        topNavOne(state, val){
            state.topNavOne = val;
        },
        topNavTwo(state, val){
            state.topNavTwo = val;
        },
        topNavThree(state, val){
            state.topNavThree = val;
        },
    }
})