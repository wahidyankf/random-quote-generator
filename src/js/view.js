const view = {
  renderInit() {
    $('body').append(
      `<p class="quote">${data.activeQuote.quote}</p>
      <p class="author">- ${data.activeQuote.author}</p>
      <button>Show Next Quote</button>`
    );
  },
  renderUpdate() {
    $('.quote').text(data.activeQuote.quote);
    $('.author').text(data.activeQuote.author);
  }
};
