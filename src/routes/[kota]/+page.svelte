<script>
    export let data;
    import { MetaTags } from 'svelte-meta-tags';
	import { onMount } from 'svelte';
    import Countdown from '$lib/Countdown.svelte';
    const date = new Date();
    let tomorrow = new Date(date);
    tomorrow.setDate(date.getDate() + 1);
	let month = date.getMonth() + 1;
    if(month <= 9)
        month = '0' + month;

    let day= date.getDate();
    if(day <= 9)
        day = day.toString().padStart(2, '0');

    let tomorrowDay = tomorrow.getDate().toString().padStart(2, '0');

        
	let year = date.getFullYear();

	// This arrangement can be altered based on how we want the date's format to appear.
	let currentDate = `${year}-${month}-${day}`;
	let tomorowDate = `${year}-${month}-${tomorrowDay}`;
	console.log(currentDate);
    let listKota = [];

    let kota = data.kota;
    
    let fromCountdown
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let loading = true; 
    function getTextBySlug(data, slug) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].slug === slug) {

            text = data[i].text;
            return data[i].text;
            }
        }
        return null; // If no match is found, return null
        }
        
    
    let text = kota;
    let adzan = []
    adzan = data.adzan

    onMount(async () => {
        getTextBySlug(data, kota);
        loading = false;
    });
	// onMount(async () => {
	// 	const response = await fetch(
	// 		`https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/${kota}/2023/03.json`
	// 	);
	// 	data = await response.json();
        
	// });
    
</script>

<svelte:head>
    <title>
        Wilayah {text}
    </title>
</svelte:head>
<MetaTags 
    title="Wilayah {text}" 
    description="Waktu Maghrib & Imsyak Indonesia." 
    canonical="https://raharja.eu.org/booka"
    openGraph={{
        url: 'https://raharja.eu.org/booka',
        title: `🐪 Booka | Wilayah ${text}`,
        description: 'Waktu Maghrib & Imsyak Indonesia.',
        images: [
          {
            url: 'https://i.ibb.co/Pt7SBG5/booka.png',
            width: 800,
            height: 600,
            alt: '🐪'
          }
        ],
        site_name: 'Booka'
      }}
    twitter={{
        handle: '@freqtions',
        site: '@freqtions',
        cardType: 'summary_large_image',
        title: `🐪 Booka | Wilayah ${text}`,
        description: 'Waktu Maghrib & Imsyak Indonesia.',
        image: 'https://i.ibb.co/Pt7SBG5/booka.png',
        imageAlt: '🐪'
      }}
    
    />
<header>
	<h1 class="text-4xl font-bold ">Maghrib & Imsak</h1>
	<p class="capitalize">Wilayah {text}</p>
    <p class="text-xs text-gray-400 italic mt-2em">nungguin ya?</p>
 
</header>
<section>
    {#if loading}
        <p class="text-center">loading data...</p>
    {:else}
    <!-- {#each adzan as item}
        <pre>{item.tanggal}</pre>
        
    {/each} -->
    
	<div class="grid grid-cols-1 grid-row-2 md:gap-[-60em]">
        <div class="flex flex-wrap justify-center">
            {#each adzan as item}
        
                {#if item.tanggal == currentDate}
                <a href='/{kota}/sekarang'>
                    <div class="card break-words whitespace-pre-line w-[50vw] min-h-[35vh] text-xl md:w-[20vw] shadow-md" id="today">
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
                                      {:else}
                                      <span class="text-xs">Selamat Beribadah Puasa</span>
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
                </a>
                {/if}
                {#if item.tanggal == tomorowDate}
                <a href='/{kota}/besok'>
                    <div class="card break-words whitespace-pre-line w-[50vw] text-xl md:w-[20vw] md:h-[35vh] shadow-md" id="today">
                        <div class="center">
                            <h2 class="font-bold text-md">Besok</h2>
                            <p id="tanggal" class="text-sm italic">{item.tanggal}</p>
                            <div class="waktu">
                                <p id="imsyak" class="font-bold">Imsyak</p>
                                <p class="text-4xl">{item.imsyak}</p>    
                            </div>
                        </div>
                    </div>
                </a>
                {/if}
        
            {/each}
        </div>
	</div>
    {/if}
</section>
<footer>
    <div class="footer text-center m-20">
        <p>🐪 Booka</p>
        <p>created with ❤️ by <a href="https://raharja.eu.org/" class="text-sm font-semibold underline underline-offset-2 decoration-[1.5px] hover:text-cyan-300 hover:no-underline hover:decoration-0 transition-all">raharja</a></p>
        
    </div>
</footer>

<br>
<!-- <pre>{JSON.stringify(data, null, 5)}</pre> -->
