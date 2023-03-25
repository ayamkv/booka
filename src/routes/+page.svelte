<script>
	import { onMount } from 'svelte';
    import Countdown from './Countdown.svelte';
	const date = new Date();

	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	// This arrangement can be altered based on how we want the date's format to appear.
	let currentDate = `${year}-0${month}-${day}`;
	let tomorowDate = `${year}-0${month}-${day + 1}`;
	console.log(currentDate);
	let data = [];
    let fromCountdown
    

	onMount(async () => {
		const response = await fetch(
			'https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/lamongan/2023/03.json'
		);
		data = await response.json();
	});
</script>

<header>
	<h1 class="text-4xl font-bold ">Maghrib dan Imsak</h1>
	<p>Wilayah Lamongan</p>
    <p class="text-xs text-gray-400 italic mt-2em">nungguin ya?</p>
</header>
<section>
  <div class="testdiv">

  </div>
	<div class="grid grid-cols-1 grid-row-2 md:gap-[-60em]">
        <div class="flex justify-center">
            {#each data as item}
        
                {#if item.tanggal == currentDate}
                    <div class="card break-words whitespace-pre-line w-[40vw] h-[40vh] text-2xl md:w-[20vw]" id="today">
                        <div class="center">
                            <h2 class="font-bold text-md">Hari Ini</h2>
                            <p id="tanggal" class="text-sm italic">{item.tanggal}</p>
                            <div class="waktu">
                                <p id="imsyak" class="font-bold">Imsyak</p>
                                <p class="text-4xl">{item.imsyak}</p>   
                                <Countdown from="{item.tanggal} {item.imsyak}:00" dateFormat="YYYY-MM-DD H:m:s" let:remaining>
                                    <div class="whatever italic text-sm" id="tanggal">
                                      {#if remaining.done === false}
                                      <span>{remaining.hours} :</span>
                                      <span>{remaining.minutes} :</span>
                                      <span>{remaining.seconds} </span>
                                      {/if}
                                    </div>
                                  </Countdown> 
                            </div>
                            <div class="waktu">
                                <p id="magrib" class="font-bold">Maghrib</p>
                                <p class="text-4xl">{item.magrib}</p>  
                                <Countdown from="{item.tanggal} {item.magrib}:00" dateFormat="YYYY-MM-DD H:m:s" let:remaining>
                                    <div class="whatever italic text-sm" id="tanggal">
                                      {#if remaining.done === false}
                                      <span>{remaining.hours} :</span>
                                      <span>{remaining.minutes} :</span>
                                      <span>{remaining.seconds} </span>
                                      {/if}
                                    </div>
                                  </Countdown>
                            </div>
                        
                        
                        </div>
                    </div>
                {/if}
                {#if item.tanggal == tomorowDate}
                <div class="card break-words whitespace-pre-line w-[40vw] h-[40vh] text-2xl md:w-[20vw]" id="today">
                    <div class="center">
                        <h2 class="font-bold text-md">Besok</h2>
                        <p id="tanggal" class="text-sm italic">{item.tanggal}</p>
                        <div class="waktu">
                            <p id="imsyak" class="font-bold">Imsyak</p>
                            <p class="text-4xl">{item.imsyak}</p>    
                        </div>
                    </div>
                </div>
                {/if}
        
            {/each}
        </div>
	</div>
</section>
<footer>
    <div class="footer text-center m-20">
        <p>🐪 Booka</p>
        <p>created with ❤️ by <a href="https://raharja.eu.org/" class="text-sm font-semibold underline underline-offset-2 decoration-[1.5px] hover:text-cyan-300 hover:no-underline hover:decoration-0 transition-all">raharja</a></p>
        
    </div>
</footer>

<br>
<!-- <pre>{JSON.stringify(data, null, 5)}</pre> -->
