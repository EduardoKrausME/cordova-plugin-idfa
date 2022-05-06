var exec = require ( "cordova/exec" );

Idfa = {
    TRACKING_PERMISSION_NOT_DETERMINED : 0,
    TRACKING_PERMISSION_RESTRICTED     : 1,
    TRACKING_PERMISSION_DENIED         : 2,
    TRACKING_PERMISSION_AUTHORIZED     : 3,

    getInfo : function ( resolve, reject ) {
        exec ( resolve, reject, "Idfa", "getInfo", [] );
    },

    requestPermission : function ( resolve, reject ) {
        exec ( resolve, reject, "Idfa", "requestPermission", [] );
    }
};

module.exports = Idfa;
