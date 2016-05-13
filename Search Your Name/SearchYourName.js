/*jshint multistr:true */

var text = "Hey, how are you \
doing? My name is Erin. Blah Blah Blah Blah \
Erin Blah Blah. Blah BlahBlah Erin Blah.";

var myName = "Erin";

var hits = [];

for (var i = 0; i < text.length; i ++) {
    if (text.substr(i,myName.length)===myName) {
        hits.push(i);
    };
};
    

if (hits.length){
    for (i=0; i<hits.length; i++){
        console.log(hits[i], text.substr(hits[i],myName.length));
    }
}