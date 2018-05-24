console.log('it works');

//implementation of Poll.java

function poll(subject,answers){
    if(subject==null||subject=="")
        throw new DOMException("null subject","null subject");
    if(answers==null)
        throw new DOMException("null answers","null answers");
    this.subject=subject;
    this.answers=answers;
    this.code=null;
    this.votecount=new Array(answers.length);
    for (let index = 0; index < answers.length; index++) {
        this.votecount[index]=0;        
    }

    this.tostring= function(){
        result="";
        result+=this.subject+"\n";
        answers.forEach(element => {
            result+="\t[]"+element+"\n";
        });
        return result;
    }

    this.getcode=function(){
        return this.code;
    }// there's no need to implement these set and get functions because are useless in js.

    this.setcode=function(code){
        if(this.code==null)
            thos.code=code;
    }

    this.votefor=function(choiceIDX){
        this.votecount[choiceIDX]++;
    }

    this.getvotepercent=function(){
        percentage=this.votecount;
        total=0;
        percentage.forEach(element => {
            total+=element;
        });
        for (let index = 0; index < percentage.length; index++) {
            const element = percentage[index];
            if(element==0)
                percentage[index]=0
            else
                percentage[index]=(element/total)*100;
        }
        return percentage;
    }

}


//implementation of PollRepository.java

function repository(){
    this.storage=new Array(0);
    this.nscount=0;
    this.therepository=new repository();

    this.getrepository=function(){
        return therepository;
    }

    this.store=function(ns){
        ns.setcode(this.nscount);
        this.nscount++;
        this.storage.push(ns)
    }

    this.findbycode=function(code){
        return this.storage[code];
    }

    this.findall=function(){
        return this.storage;
    }
}


//Main Driver code
