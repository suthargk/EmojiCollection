
const frequentlyUsedLRU = (frequentlyUsed, convertedSelectedEmoji) => {
    const emojiExists = frequentlyUsed.find(fu => fu.name === convertedSelectedEmoji.name)
    const cacheSize = 30
    if(!emojiExists) {
        if(frequentlyUsed.length < cacheSize) {
            frequentlyUsed.unshift(convertedSelectedEmoji)
        } else {
            frequentlyUsed.pop()
            frequentlyUsed.unshift(convertedSelectedEmoji)
        }
    } else {
        const index = frequentlyUsed.findIndex(fu => fu.name === convertedSelectedEmoji.name)
        frequentlyUsed.splice(index, 1);
        frequentlyUsed.unshift(convertedSelectedEmoji)
    }
    localStorage.setItem('frequently', JSON.stringify(frequentlyUsed))
    // setFrequentlyUsed(frequentlyUsed => frequentlyUsed)
};

export default frequentlyUsedLRU;