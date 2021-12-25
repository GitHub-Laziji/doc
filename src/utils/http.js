class Http{

    static get(url){
        let promise = fetch(url);
        if(/(\.md|.json)$/.test(url)){
            promise.catch(()=>fetch());
        }
        return promise;
    }
}