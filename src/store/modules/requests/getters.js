export default {
    requests(state, _, _2, rootGetter) {
        const coachId = rootGetter.userId;
        return state.requests.filter(req => req.coachId === coachId );
    },
    hasRequests(_, getters) {
        return getters.state.requests && getters.state.requests.length > 0;
    }
};
