import Component from '@ember/component';

export default Component.extend({
  lines: 3,

  didRender() {
    if (this.keepButton) {
      return;
    }

    const hasTruncatedText = this.element.querySelector('.lt-line-clamp__line--last .lt-line-clamp__ellipsis');
    this.set('showFancyButton', !!hasTruncatedText);

    this.keepButton = !!hasTruncatedText;
  },

  actions: {
    onButtonClick() {
      this.get('onClick')();
    }
  }
});
