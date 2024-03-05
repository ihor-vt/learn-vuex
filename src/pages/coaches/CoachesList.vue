<template>
    <section>
        Filter
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline">Refresh</base-button>
                <base-button link to="/register">Register as Coach</base-button>
            </div>
            <ul v-if="hasCoaches">
                <!-- <li v-for="coach in filteredCoaches" :key="coach.id">{{ coach.firstName }}</li> -->
                <coach-item v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :first-name="coach.firstName"
                    :last-namr="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas"></coach-item>
            </ul>
            <h3>No coaches found.</h3>
        </base-card>
    </section>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
    components: {
        CoachItem,
        BaseCard,
        BaseButton
    },
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

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>
