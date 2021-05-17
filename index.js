import FSnakeTimeline from './src/components/FSnakeTimeline'
import _Vue from 'vue'

FSnakeTimeline.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(FSnakeTimeline.name, FSnakeTimeline)
}
export default FSnakeTimeline;