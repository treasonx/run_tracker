var allTestFiles = [];
var TEST_REGEXP = /.+Spec.js$/;

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        allTestFiles.push(file);
    }
});

window.dojoConfig = {
    packages: [
        { name:"app" ,location:"/base/web_client/app"},
        { name: "dojo", location: "/base/web_client/libs/dojo" },
        { name: "dijit", location: "/base/web_client/libs/dijit" }
    ],
    asynch: true
};

window.__karma__.dojoStart = function(){
    return allTestFiles;
}
