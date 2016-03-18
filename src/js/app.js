var modules = modules || {};

modules.app = (function(debug, config, resourceLoader, gameController) {
    'use strict';

    var module = {};

    module.init = function() {
        debug.log('app init');
        debug.init();

        // todo przenieść to do gameController?
        resourceLoader.init(config.getResources(),
            function() {
                gameController.init();
            }
        );
    };

    return module;
})(modules.debug, modules.config, modules.resourceLoader, modules.gameController);