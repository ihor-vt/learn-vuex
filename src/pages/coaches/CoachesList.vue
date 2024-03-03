<template>
    <section>
        Filter
    </section>
    <section>
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Register as Coach</router-link>
        </div>
        <ul v-if="hasCoaches">
            <li v-for="coach in filteredCoaches" :key="coach.id">{{ coach.firstName }}</li>
        </ul>
        <h3>No coaches found.</h3>
    </section>
</template>

<script>
export default {
    computed: {
        filteredCoaches() {
            return this.$store.grtters['coaches/coaches']
        },
        hasCoaches() {
            return this.$store.grtters['coaches/hasCoaches']
        }
    }
}
</script>
