/**
 * Created by 魏秋娟 on 2018/2/6.
 */
let word;
let text='Hello Everyone' + 'My name is weiqiujuan '+ ' From Qianyang Shanxi Province ';
let worlds=text.toLowerCase().split(/[\s,.]+/);
let count={};
for(let i=0;i<worlds.length;i++){
    word=worlds[i];
    if( typeof count[word]==='number'){
        count[word]++;
    }else{
        count[word]=1;
    }
}
console.log(count);