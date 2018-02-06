//object.hasOwnProperty(name);

//regexp.exec(string);

let text='<html><body bgcolor=linen><p>'+'this is <b>bold<\/b>!</p></body></html>';
let tags=/[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)|/g;
let a,i;

while(a=tags.exec((text))){
    for(i=0;i<a.length;i++){
        console.log(('//['+i+']'+a[i]).entityify());
    }
    console.log()
}