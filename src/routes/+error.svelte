<script>
  import { page } from '$app/stores';
</script>

<div class="error text-center mt-6">
    <h1 class="text-5xl">🐪❓</h1>
    <h1 class="text-3xl">{$page.status} </h1>
    <p> {$page.error.message}</p>
</div>
