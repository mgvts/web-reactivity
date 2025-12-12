совсем нативная реализация
```js
// храним значение состояния
let counterValue = 0
// ссылка на html для вывода состояния
const counterHtml = document.getElementById('counterHtml') 
// обрабатываем событие
const addBtn = document.getElementById('add')
addBtn.addEventListener('click', () => {
  counterValue++ // логика
  counterHtml.innerText = counterValue // ререндер
})
```

Вынесем часть логики
```js
// ререндер
const rerender = () => counterHtml.innerText = counter.value
const proxyHandler = {
  set(target, key, value) {
    Reflect.set(...arguments)
    if (key === 'value') rerender()
    return true
  }
}
// храним значение состояния
let counterValue = new Proxy({ value: 0 }, proxyHandler)
// ссылка на html для вывода состояния
const counterHtml = document.getElementById('counterHtml') 
// обрабатываем событие
const addBtn = document.getElementById('add')
addBtn.addEventListener('click', () => {
  counter.value++ // тут пишем только логику
})
```

фреймворковые примеры:
Vue3 Compositions Api
все ререндеры берёт на себя движок фреймворка
```vue
<script setup>
const count = ref(0) // храним состояние
const handleAdd = () => count.value++ // логика
const handleSub = () => count.value-- // логика
</script>

<template>
  <div id="app" class="counter">
    <h3>Counter</h3>
    <p>Counter value: {{ count }}</p>
    <button id="sub" @click="handleSub"> -1 </button>
    <button id="add" @click="handleAdd"> +1 </button>
  </div>
</template>
```

preact/signals + jsx
```jsx
function Counter() {
  const count = useSignal(0) // храним состояние

  const handleSub = () => count.value-- // логика
  const handleSub = () => count.value++ // логика

  return (
    <div id="app" class="counter">
      <h3>Counter</h3>
      <p>Counter value: { count }</p>
      <button id="sub" onClick={handleSub}> -1 </button>
      <button id="add" onClick={handleAdd}> +1 </button>
    </div>
  )
}
```