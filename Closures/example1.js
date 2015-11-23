/**
 * Created by Feng Huang on 18/11/2015.
 */

function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc(); //myFunc is a closures
myFunc();