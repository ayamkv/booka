<script>
    import { onMount, onDestroy, tick } from 'svelte';
  
    export let from;
    export let dateFormat;
  
    let remaining = {
      done: false,
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  
    function calculateRemainingTime() {
      const fromDate = new Date(from);
      const now = new Date();
  
      let diff = fromDate.getTime() - now.getTime();
  
      if (diff < 0) {
        remaining.done = true;
        return;
      }
  
      const year = 1000 * 60 * 60 * 24 * 365;
      const month = 1000 * 60 * 60 * 24 * 30.44;
      const week = 1000 * 60 * 60 * 24 * 7;
      const day = 1000 * 60 * 60 * 24;
      const hour = 1000 * 60 * 60;
      const minute = 1000 * 60;
      const second = 1000;
  
      remaining.years = Math.floor(diff / year);
      diff -= remaining.years * year;
  
      remaining.months = Math.floor(diff / month);
      diff -= remaining.months * month;
  
      remaining.weeks = Math.floor(diff / week);
      diff -= remaining.weeks * week;
  
      remaining.days = Math.floor(diff / day);
      diff -= remaining.days * day;
  
      remaining.hours = Math.floor(diff / hour);
      diff -= remaining.hours * hour;
  
      remaining.minutes = Math.floor(diff / minute);
      diff -= remaining.minutes * minute;
  
      remaining.seconds = Math.floor(diff / second);
    }
  
    let interval;
  
    onMount(() => {
      calculateRemainingTime();
      interval = setInterval(() => {
        calculateRemainingTime();
        tick();
      }, 1000);
    });
  
    onDestroy(() => {
      clearInterval(interval);
    });
  </script>
  
  <slot {remaining} />
  
