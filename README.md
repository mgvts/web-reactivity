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

react hooks + jsx
```jsx
function SumTwoNumbers() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const number1 = +num1
    const number2 = +num2
    setResult(number1 + number2);
  }, [num1, num2]);

  return (
    <div>
      <h2>Сложение двух чисел</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <p>Сумма: {result}</p>
    </div>
  );
}
```
