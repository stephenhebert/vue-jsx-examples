import HomeView from '../views/HomeView.vue'
import type { DefineComponent } from 'vue'

// TODO: Fix the type of the routeConfig
type RouteConfig = [string, string,  DefineComponent | (() => Promise<DefineComponent>)]

const routesConfigs: RouteConfig[] = [
  ['/','home', HomeView],
  ['/v-if','v-if', () => import('../views/vIf/index.tsx')],
  ['/v-for','v-for', () => import('../views/vFor/index.tsx')],
  ['/v-model','v-model', () => import('../views/vModel/index.tsx')],
  ['/v-bind','v-bind', () => import('../views/vBind/index.tsx')],
  ['/v-on','v-on', () => import('../views/vIf/index.tsx')],
  ['/slots','slots', () => import('../views/slots/index.tsx')],
  ['/nestedSlots','nestedSlots', () => import('../views/nestedSlots/index.tsx')],
  ['/scopedSlots','scopedSlots', () => import('../views/scopedSlots/index.tsx')],
  ['/v-html','v-html', () => import('../views/vHtml/index.tsx')],
  ['/v-text','v-text', () => import('../views/vText/index.tsx')],
  ['/v-show','v-show', () => import('../views/vShow/index.tsx')],
  ['/dynamicComponents','dynamicComponents', () => import('../views/dynamicComponents/index.tsx')],
  ['/customDirectives','customDirectives', () => import('../views/customDirectives/index.tsx')],
  ['/eventModifiers','eventModifiers', () => import('../views/eventModifiers/index.tsx')],
  ['/templateRefs','templateRefs', () => import('../views/templateRefs/index.tsx')],
]

function createRoute(routeConfig) {
  const [path, name, component] = routeConfig
  return {
    path,
    name,
    component
  }
}

export const routes = routesConfigs.map(createRoute)