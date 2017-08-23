$(() => {
  $('.loading-message').hide();
  let bucket = [];
  const init = bucket => {
    controller.updateInitData(bucket);
    view.renderInit();
  };

  controller.updateEmptyBucket(bucket);

  init(bucket);

  view.renderUpdate();

  $('button').on('click', e => {
    controller.updateActiveQuote(bucket);
    view.renderUpdate();
  });

  $('body').keyup(() => {
    controller.updateActiveQuote(bucket);
    view.renderUpdate();
  });

  setInterval(() => {
    controller.updateActiveQuote(bucket);
    view.renderUpdate();
  }, 30000);
});
