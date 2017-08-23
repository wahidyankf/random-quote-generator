const controller = {
  shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  },

  updateInitData(bucket) {
    let activeData = bucket.pop();
    data.activeQuote.author = activeData.author;
    data.activeQuote.quote = activeData.quote;
  },

  updateEmptyBucket(bucket) {
    let dataCopy = data.listQuote.slice();
    dataCopy = controller.shuffle(dataCopy);
    dataCopy.forEach(item => {
      bucket.push(item);
    });
  },

  updateActiveQuote(bucket) {
    if (bucket.length === 0) {
      this.updateEmptyBucket(bucket);
      this.updateActiveQuote(bucket);
    } else {
      let activeData = bucket.pop();
      data.activeQuote.author = activeData.author;
      data.activeQuote.quote = activeData.quote;
    }
  }
};
