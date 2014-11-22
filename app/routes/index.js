import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return Ember.Object.create({
            mouseMovementLog: "Mouse movement actions will appear here",
            mousePressLog: "Mouse press actions will appear here"
        });
    },

    actions: {
        logMouseMovementAction: function(action) {
            this.modelFor('index').set('mouseMovementLog', action);
        },
        logMousePressAction: function(action) {
            this.modelFor('index').set('mousePressLog', action);
        }
    }
});
