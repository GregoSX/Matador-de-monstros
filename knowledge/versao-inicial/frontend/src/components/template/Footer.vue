<template>
    <footer class="footer">
        <span>Copyright <strong>Grego</strong> &#169; 2023-2025 </span>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: #DDD;
        color: #333;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
</style>