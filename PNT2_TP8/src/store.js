import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const url= 'https://637414830bb6b698b61b20a5.mockapi.io/turnos/api/users/'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        url: 'https://637414830bb6b698b61b20a5.mockapi.io/turnos/api/users/',
        users: [],
        formData : {
            nombre: null,
            edad: null,
            email: null
          }
    },
    actions: {
        // ASYNC/AWAIT
        async getUsers({commit}) {
            try {
                let {data} = await axios(url)
                commit('getUsers', data)
            }
            catch (error) {
                console.warn(error); 
            }
        },
        // THEN/CATCH
        getUsersThenCatch({commit}) {
            axios(url)
            .then( respuesta => {
                commit('getUsers', respuesta.data)
            })
            .catch(error => console.error(error))
        },


        async postUser({commit}) {
            try {
                await axios.post(this.state.url, this.state.formData)
                commit('resetFormData')
            }
            catch(err) {
                console.log('ERROR', err)
            }
        },

        postUserThenCatch({commit}){
            axios.post(this.state.url, this.state.formData)
            .then(commit('resetFormData'))
            .catch(err => {
              console.error('ERROR', err)
            })
        }
    },
    mutations: {
        getUsers(state,users) {
            state.users = users
        },
        postUser(user){
            console.log(user);
        },
        resetFormData(state) {
            state.formData = {
                
                nombre: null,
                edad: null,
                email: null,
            }
        },
    }
})