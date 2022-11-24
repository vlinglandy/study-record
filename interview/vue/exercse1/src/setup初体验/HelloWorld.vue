<template>
  {{count}}
  <h1>{{person.name}}</h1>
  <h1>{{person.age}}</h1>
  <button @click="add()"> + </button>
  <button @click="update()"> 修改 </button>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  name: 'HelloWorld',
  setup(){
    let count = ref(0)
    let person = reactive({name:"张三",age:"李四"})
    function add(){
      count.value += 1
    }
    function update(){
      person.name = "李四"
      person.age = 30
    }
    return {
      count,
      add,
      person,
      update
    }
  }
}
</script>
