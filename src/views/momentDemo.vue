<template lang="pug">
    <div class="hello">
        moment 例子
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: '',
    data () {
        return {}
    },
    created () {
        console.log('moment 格式化日期：')
        console.log(moment().format('YYYYMMDD'))
    }
}
</script>

<style>

</style>
