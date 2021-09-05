<template>
  <div>
    <ul>
      <li
        v-for="item of result" 
        :key="item.ID"
      >
        {{item.DEVICE_NAME_ID}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['result']
}
</script>