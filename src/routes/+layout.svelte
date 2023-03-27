<script>
    import '../style.css'
    import Transition from '$lib/components/Transition.svelte';
    export let data;
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet">
</svelte:head>

<nav>
    <div class="nav">
        <a class="font-bold text-md" href="/">🐪 Booka</a>
    </div>
</nav>

<Transition pathname={data.currentPath}>
    <slot />
</Transition>

