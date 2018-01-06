import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);

    this.text = `test'" T. on LinkedIn <script>console.log("Hello")</script> xss: '"><img src="//ffi.st"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`;
    this.text2 = Ember.String.htmlSafe(
      'test&#39;&quot; s T. Lorem ipsum dolor sit amet,<br/ ><br/> consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    );

    this.escapedText = Ember.String.htmlSafe(
      Ember.Handlebars.Utils.escapeExpression(
        `I'm < " > & = 28 <img src='dummy' onerror='alert(/xss/)'> xss: '"><img src="//ffi.st"> <script>console.log('Hello')</script> test'" T. on LinkedIn Luis ${
          this.text
        }`
      )
    );

    this.text3 =
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    this.truncate = true;
    this.buttonText = 'Read More';
  },

  handleTruncate(didTruncate) {
    console.log('App - HandleTruncate: ', didTruncate);
  },

  onCollapse() {
    console.log('App - Collapsed Text');
  },

  actions: {
    onExpand() {
      console.log('App - Expanded text');
    },

    onHandleTruncate(didTruncate) {
      console.log('App - onHandleTruncate: ', didTruncate);
    },

    toggleTruncate() {
      this.toggleProperty('truncate');
      this.set(
        'buttonText',
        this.get('buttonText') === 'Read More' ? 'Read Less' : 'Read More'
      );
    },

    toggleText() {
      this.set(
        'text3',
        Ember.String.htmlSafe(
          'Luis Torres <br/> <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        )
      );
    },
  },
});
