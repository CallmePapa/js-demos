
let walk_the_Dom=function walk(node,func) {
    func(node);
    node=node.firstChild;
    while(node){
        walk(node,func);
        node=node.nextSibling;
    }
};
let getElementByAttribute=function (att,value) {
    let result=[];
    walk_the_Dom(document.body,function (node) {
        let actual=node.nodeType===1&&node.getAttribute(att);
        if(typeof  actual==="string"&&(actual===value||typeof value!=='string')){
            result.push(node);
        }
    });
    return results;
};
