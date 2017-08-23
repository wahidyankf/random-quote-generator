const view = {
  renderInit() {
    $('body').append(
      `<div class="content-wrapper"> <p class="quote">${data.activeQuote
        .quote}</p>
      <p class="author">- ${data.activeQuote.author}</p> </div>
      <button>Show Next Quote</button>`
    );
  },
  renderUpdate() {
    $('.quote').html(`&ldquo;${data.activeQuote.quote}&rdquo;`);
    $('.author').html(`- ${data.activeQuote.author}`);
  }
};
