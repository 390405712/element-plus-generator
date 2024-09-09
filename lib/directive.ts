import { createApp } from 'vue';
const Test = (createApp as any)();
Test.directive('my-directive', {
  mounted(el: HTMLElement, binding: any) {
    let timer: any = null
    el.addEventListener('click', e => {
      clearTimeout(timer) as any
        (el.style as any)['pointer-events'] = 'none';
      timer = setTimeout(() => {
        (el.style as any)['pointer-events'] = 'initial';
      }, 1000)
    })
  }
})

export default Test.directive('my-directive');
