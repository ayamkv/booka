<script>
    import { MetaTags } from 'svelte-meta-tags';
    import { fade } from 'svelte/transition'
	import { onMount } from 'svelte';
    import Countdown from '$lib/Countdown.svelte';
	const date = new Date();



    let showSpan = false;
	let day = date.getDate();
    // getMonth() method returns the month of a date as a zero-based index. This means that January is represented by 0.
    // February by 1, etc. therefore  we need to add +1.
	let month = date.getMonth() + 1; 
	let year = date.getFullYear();

    console.log(month);
    console.log(date.getMonth())


	// This arrangement can be altered based on how we want the date's format to appear.
	let currentDate = `${year}-0${month}-${day}`;
	let tomorowDate = `${year}-0${month}-${day + 1}`;
	console.log(currentDate);
	let data = [];
    let listKota = [];
;
    let kota = 'lamongan';
    let fromCountdown
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let loading = true;

    async function fetchData() {
        let loading = true;
        try {
            const response = await fetch(`https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/${kota}/${year}/0${month}.json`);
            data = await response.json();
        } catch (error) {
            console.error(error);
        } finally {
            loading = false;
        }
    }

    
    onMount(async () => {
       
        const interval = setInterval(() => {
            showSpan = true;
            clearInterval(interval);
        }, 200);

         // Fetch the list of kota from the URL

        const kotaResponse = await fetch(
            'https://gist.githubusercontent.com/ayamkv/b469d18c4a2be9832de83cb51abbd7d8/raw/04f0a9dea7096362481ade15e60dbd5e2a3b3b5c/cities.json'
        );
        listKota = await kotaResponse.json();

        // Set the default kota value to the first item in the list
        // Fetch the data for the selected kota
        await fetchData();

        loading = false;
    });

    function handleSelectChange() {
        fetchData();
    }
	// onMount(async () => {
	// 	const response = await fetch(
	// 		`https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/${kota}/2023/03.json`
	// 	);
	// 	data = await response.json();
        
	// });


    $: value = kota;
</script>

<svelte:head>
    <title>
        ❤️ Booka - {kota}
    </title>
</svelte:head>

<MetaTags 
    title="🐪 Booka" 
    description="Waktu Maghrib & Imsyak Indonesia." 
    canonical="https://raharja.eu.org/booka"
    openGraph={{
        url: 'https://raharja.eu.org/booka',
        title: '🐪 Booka',
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
        title: '🐪 Booka',
        description: 'Waktu Maghrib & Imsyak Indonesia.',
        image: 'https://i.ibb.co/Pt7SBG5/booka.png',
        imageAlt: '🐪'
      }}
    
    />

<header>
	<h1 class="text-4xl font-bold ">Maghrib & Imsak</h1>
	<p class="capitalize">Wilayah {kota}</p>
    <p class="text-xs text-gray-400 italic mt-2em">nungguin ya?</p>
 
</header>
<section class="min-h-[70vh] md:min-h-[60vh]">
    {#if loading}
    <div class="loader text-center items-center justify-center translate-y-48">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" class="block m-auto"><rect width="10" height="10" x="1" y="1" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle30" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle3b.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle31" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle38.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle32" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle39.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle33" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle3a.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="1" y="13" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle34" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle30.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle35" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle31.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle36" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle32.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle37" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle33.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="13" y="13" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksShuffle38" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle34.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle39" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle35.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle3a" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle36.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle3b" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle37.end" dur="0.2s" values="1;13"/></rect></svg>
        <p class="mt-4">mohon bersabar...</p>
            {#if showSpan}
                
                <span class="text-gray-400" in:fade="{{delay: 3000}}" >jika tidak terload, mohon <a class="underline" href="https://www.google.com/search?q=allow+javascript&oq=allow+javascript">aktifkan/izinkan Javascript pada browser anda.</a></span>
         
            {/if}
        </div>
        
    {:else}
    <div class="selectContainer text-center">
        
        <select bind:value={kota} on:change={handleSelectChange} class="shadow-md inline">
            {#each listKota as namaKota}
                <option value={namaKota.slug}>
                            {capitalize(namaKota.text)}
                        </option>
            {/each}
            </select>
            <a href="/{kota}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="inline shadow-md"><path fill="currentColor" d="M12 21q-.425 0-.713-.288T11 20v-5.15l-.9.9q-.275.275-.688.275t-.712-.3q-.3-.3-.287-.725t.312-.725L11.3 11.7q.15-.15.325-.212t.375-.063q.2 0 .375.063t.325.212l2.6 2.6q.3.3.3.713t-.3.712q-.3.3-.713.3t-.712-.3L13 14.85V20q0 .425-.288.713T12 21Zm-7 0q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21h-3q-.425 0-.713-.288T15 20q0-.425.288-.713T16 19h3V7H5v12h3q.425 0 .713.288T9 20q0 .425-.288.713T8 21H5Z"/></svg>
            </a>
            
            
    </div>
    
	<div class="grid grid-cols-1 grid-row-2 md:gap-[-60em]">
        <div class="flex flex-wrap justify-center">
            {#each data as item}
        
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
<footer class="mt-auto">
    <div class="footer text-center">
        <p>🐪 Booka</p>
        <p>created with ❤️ by <a href="https://raharja.eu.org/" class="text-sm font-semibold underline underline-offset-2 decoration-[1.5px] hover:text-cyan-300 hover:no-underline hover:decoration-0 transition-all">raharja</a></p>
        
    </div>
</footer>

<br>
<!-- <pre>{JSON.stringify(data, null, 5)}</pre> -->
