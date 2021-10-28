<template>
<div id="app">
  <!-- <div id="app" v-for="week of weeks" v-bind:key="week">
  {{week}}
  </div> -->
  <div class="month">
    <button type="button" @click="monthMinus" class="border">⇦</button>
    {{now_year}}年
    {{now_month}}月
    <button type="button" @click="monthPlus">⇨</button>
  </div>
  <div class="calendar">
    <div  class="c-week" v-for="week in weeks" :key="week">
      {{week}}
    </div>
  </div>
  <div class="calendar">
    <div  class="c-day" v-for="(day, index) in calendarData" :key="index">
      {{day}}
    </div>
  </div>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   data: function() {
//     return {
//       // days: [
//       //   1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,34,25,26,27,28,29,30,31
//       // ],
//       weeks: ["月", "火", "水", "木", "金", "土", "日"],
//       methods: { 
//         days: []
//       for (let i = 0; i <= 31.length; i++) {
//         this.days.push(i)
//       }
//       for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//       }
//       }
//     }
//   }
// }


export default {
  name: 'App',
  data() {
    return {
      weeks: ["日", "月", "火", "水", "木", "金", "土"],
      todays: new Date(),
      now_year: new Date().getFullYear(),
      now_month: new Date().getMonth()+1
    }
  },
  computed: {
    getTsuki() {
      return this.now_month
    },
    getNen() {
      return this.now_year
    },
    getMonthFirstDayweek() {
      return new Date(this.getNen, this.getTsuki - 1, 1).getDay()
    },
    getBeforeMonthLastDay() {
      return new Date(this.getNen, this.getTsuki - 1, 0).getDate()
    },
    getMonthLastDay() {
      return new Date(this.getNen, this.getTsuki, 0).getDate()
    },

    calendarData() {
      let result = []
      if(this.getMonthFirstDayweek != 0) {
      for (let i=this.getBeforeMonthLastDay-(this.getMonthFirstDayweek-1); i <= this.getBeforeMonthLastDay; i++) {
        result.push(i)
        }
      }
      for(let i = 1; i <= this.getMonthLastDay; i++) {
        result.push(i)
      }
      let j = 1
      for(let i=result.length; i < 42; i++) {
        result.push(j)
        j++
      }
      return result
    }
  },
  methods: {
    monthPlus() {
      if(this.now_month == 12) {
        this.now_month = 1
        this.now_year++
      } else {
        this.now_month++
      }
    },
    monthMinus() {
      if(this.now_month == 1) {
        this.now_month = 12
        this.now_year--
      } else {
        this.now_month--
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.calendar {
  display: flex;
  width: 95%;
  flex-wrap: wrap;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.c-day {
  width: 13.8%;
  border: solid 1px;
  height: 60px;
}

.c-week {
  font-size: 30px;
  width: 13.8%;
  border: solid 1px;
  height: 60px;
  padding-top: 10px;
}

.month {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
</style>
