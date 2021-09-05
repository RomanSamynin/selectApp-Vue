<template>
  <div id="app">
    <div>
      <div v-if="loadingSelectPanel">
        Загрузка списка выбора...
      </div>
      <div v-else-if="SelectList_1 && SelectList_2 && SelectList_3">
        <select v-model="selected_1">
          <option></option>
          <option 
            v-for="item of SelectList_1" 
            :key="item.ID"
            v-bind:value="item.ID"
          >
            {{item.NAME}}
          </option>
        </select>
        <select v-model="selected_2">
          <option></option>
          <option 
            v-for="item of SelectList_2" 
            :key="item.ID"
            v-bind:value="item.ID"
          >
            {{item.NAME}}
          </option>
        </select>
        <select v-model="selected_3">
          <option></option>
          <option 
            v-for="item of SelectList_3" 
            :key="item.id"
            v-bind:value="item.id"
          >
            {{item.name_ru}}
          </option>
        </select>
      </div>
    </div>
    <span>{{selectHandler}}</span>
    <div>
      <div v-if="loadingResult">
        Загрузка данных...
      </div>
      <ResultList
        v-else-if="result.length"
        v-bind:result="result"
      />
    </div>
  </div>
</template>

<script>
import ResultList from '@/components/ResultList'
import {getData, getResult} from './api/selectAPI'

export default {
  name: 'App',
  components: {
    ResultList
  },

  data() {
    return {
      result: [],
      SelectList_1: [],
      SelectList_2: [],
      SelectList_3: [],
      loadingSelectPanel: true,
      loadingResult: true,
      selected_1: '',
      selected_2: '',
      selected_3: ''
    }
  },

  mounted() {
    getData().then((data) => {
      this.SelectList_1 = data[0]
      this.SelectList_2 = data[1]
      this.SelectList_3 = data[2]
      this.loadingSelectPanel = false
		})
    getResult({table_1: '', table_2: '', table_3: ''})
		.then((data) => {
      this.result = data
      this.loadingResult = false
    })
  },

  computed: {
    selectHandler() {
      getResult({table_1: this.selected_1, table_2: this.selected_2, table_3: this.selected_3})
      .then((data) => {
        this.result = data
        this.loadingResult = false
      })
    }
  }
}
</script>
