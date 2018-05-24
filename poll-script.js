const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

//implementation of Poll.java

function poll(subject,answers){
    /*if(subject==null||subject=="")
        throw new DOMException("null subject","null subject");
    if(answers==null)
        throw new DOMException("null answers","null answers");*/
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
        for (let index = 0; index < answers.length; index++) {
            const element = answers[index];
            result+="\t["+this.getvotepercent()[index]+"%]"+element+"\n";
            
        }
        return result;
    }

    this.getcode=function(){
        return this.code;
    }// there's no need to implement these set and get functions because are useless in js.

    this.setcode=function(code){
        if(this.code==null)
            this.code=code;
    }

    this.votefor=function(choiceIDX){
        this.votecount[choiceIDX]++;
    }

    this.getvotepercent=function(){
        percentage=new Array(this.votecount.length)
        for (let index = 0; index < this.votecount.length; index++) {
            const element = this.votecount[index];
            percentage[index]=element;
            
        }
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

    this.getrepository=function(){
        return this;
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
repo=new repository();
subject="";
answers=[];
status=-1;
currentvote=0;
console.log("______________________________________________________________________________")
console.log("type 'start' to start poll console.                     written by: M.RaoofNia")
rl.on('line', (line) => {
    console.log("\n\n\n")
    switch (line.trim()) {
      case 'new':
        status=1;
        console.log('OK.now choose a question.');
        break;
        case 'start':
        status=0;
        console.log("new --> create a poll\nview --> shows list of polls and you can vote");
        break;
        case 'view':
        status=2;
        console.log("choose one to vote using number or start to return.");
        repo.findall().forEach(element => {
            console.log(element.getcode() +"  "+ element.tostring())
        });
        break;
      default:
        switch(status){
        case -1:
            console.log("type 'start' to start poll console.");
            break;
        case 0:
            console.log("new --> create a poll\nview --> shows list of polls and you can vote");
            break;
        case 1:
            subject=line.trim();
            status=3;
            console.log("enter new answer or - to end")
            break;
        case 2:
            status=4;
            currentvote=line.trim();
            console.log("choose the option using numbers.")
            console.log(repo.findbycode(currentvote).tostring());
            break;
        case 3:
            if(line.trim()=='-'){
                status=0;
                repo.store(new poll(subject,answers));
                answers=[];
                console.log("new --> create a poll\nview --> shows list of polls and you can vote");
            }else{
                answers.push(line.trim())
            }
            break;
        case 4:
            option = line.trim();
            if(option<repo.findbycode(currentvote).answers.length)
                repo.findbycode(currentvote).votefor(option);
            status= 0;
            console.log("new --> create a poll\nview --> shows list of polls and you can vote");
        }
        break;
    }
    rl.prompt();
}).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
});
