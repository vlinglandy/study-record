import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            count:0
        }
    },
    mutations: {
        fn(state,a){
            state.count ++
        }
    },
    actions: {
        act({state,mutations},a){
            mutations.commit("fn")
        }
    }
})



export { store }

/*
this.$store.state.xxx

...mapState([xxx,xxx])
...mapState({'new','xxx'})
...mapMutations()
...mapActions()
*/