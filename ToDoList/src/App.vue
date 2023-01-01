<script>
import TDLHeader from './components/TDLHeader.vue'
import TDLFooter from './components/TDLFooter.vue'
import TDLList from './components/TDLList.vue'
import TDLItem from './components/TDLItem.vue'

export default {
    name:'App',
    components: {
    TDLFooter,
    TDLHeader,
    TDLList,
    TDLItem,
  }
}

</script>

<template>
<TDLHeader></TDLHeader>
<TDLList>
  <TDLItem></TDLItem>
</TDLList>
<TDLFooter></TDLFooter>
</template>
<style >

</style>
