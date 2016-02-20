var modules = modules || {};

modules.config = (function() {
    'use strict';

    var module = {};

    var _config = {
        debug: true,
        mainCanvasId: 'mainCanvas',
        constantScreenOrientation: true,
        game: {
            boardFieldsCountX: 7,
            boardFieldsCountY: 5
        },
        resources: [
            'img/token-background.png'
        ]
    };

    module.isDebug = function() {
        return _config.debug === true;
    };

    module.getMainCanvasId = function() {
        return _config.mainCanvasId;
    };

    module.isConstantScreenOrientation = function() {
        return _config.constantScreenOrientation;
    };

    module.getBoardFieldCount = function(){
        return {
            countX: _config.game.boardFieldsCountX,
            countY: _config.game.boardFieldsCountY
        };
    };

    module.getResources = function() {
        return _config.resources;
    };

    return module;
})();