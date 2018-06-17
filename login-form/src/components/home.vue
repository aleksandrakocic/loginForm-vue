<template>
    <div>
       <navigation></navigation>
       <cards></cards>
    </div>
</template>

<script>
    
    import navigation from './navigation'
    import cards from './cards'

    export default {
        name: 'home',
        components: {
            navigation,
            cards
        }
    }
</script>

<style>

</style>

