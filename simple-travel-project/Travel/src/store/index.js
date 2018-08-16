import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'

Vue.use(Vuex)

/*let defaultCity = '上海'

try {
  if (localStorage.city) {
     defaultCity = localStorage.city
  }
}catch (e) {}*/

export default new Vuex.Store({
	state:state,
	/*actions: {
        changeCity(ctx,city) {// 第一个参数是上下文ctx,可以帮我们拿到commit,第二个是我们传递过来的数据
          // console.log(city);
          ctx.commit('changeCity',city);
        }
	},*/
	mutations:mutations
 
})