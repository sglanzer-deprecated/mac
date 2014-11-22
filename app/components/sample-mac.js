import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    classNames: ['mac'],
    mouseEnter: function(event, view) {
        this.sendAction("mouseMovement", "mouseEnter");
    },
    mouseLeave: function(event, view) {
        this.sendAction("mouseMovement", "mouseLeave");
    },
    mouseDown: function(event, view) {
        this.sendAction("mousePress", "mouseDown");
    },
    mouseUp: function(event, view) {
        this.sendAction("mousePress", "mouseUp");
    }
});
