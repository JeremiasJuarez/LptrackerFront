

export const filterQueueType = ( rankProfile ) => {

    if ( rankProfile.length === 0 ){
        const queueType = 'unranked'
        return { queueType, tier: "unranked" }
    }
    if ( rankProfile.length === 1){
        const queueType = rankProfile[0].queueType
        return { queueType,  ...rankProfile[0] }
    }
    if (rankProfile.length >= 2) {
        const soloqProfile = rankProfile.find(profile => profile.queueType === "RANKED_SOLO_5x5") || null;
        const flexProfile = rankProfile.find(profile => profile.queueType === "RANKED_FLEX_SR") || null;

        const others = rankProfile.filter(
            profile => profile.queueType !== "RANKED_SOLO_5x5" && profile.queueType !== "RANKED_FLEX_SR"
        );

        return { soloqProfile, flexProfile, others };
    }

}