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
//fun time :))
console.log('May 24 03:54:07 ASUS-2121 dbus-daemon[1528]: apparmor="DENIED" operation="dbus_method_call"  bus="session" path="/org/gnome/SessionManager" interface="org.gnome.SessionManager" member="Inhibit" mask="send" name="org.gnome.SessionManager" pid=4417 label="snap.ora.ora" peer_pid=1531 peer_label="unconfined"');
console.log('May 24 03:53:10 ASUS-2121 gnome-shell[1664]: [AppIndicatorSupport-DEBUG] Registering StatusNotifierItem :1.127/org/ayatana/NotificationItem/Ora1\nMay 24 03:53:16 ASUS-2121 gnome-shell[1664]: Some code accessed the property \'refreshPropertyOnProxy\' on the module \'util\'. That property was defined with \'let\' or \'const\' inside the module. This was previously supported, but is not correct according to the ES6 standard. Any symbols to be exported from a module must be defined with \'var\'. The property access will work as previously for the time being, but please fix your code anyway.\nMay 24 03:53:16 ASUS-2121 gnome-shell[1664]: [AppIndicatorSupport-FATAL] unable to lookup icon for Ora1_1\nMay 24 03:53:16 ASUS-2121 gnome-shell[1664]: [AppIndicatorSupport-FATAL] unable to lookup icon for Ora1_1\nMay 24 03:53:22 ASUS-2121 dbus-daemon[1528]: apparmor="DENIED" operation="dbus_method_call"  bus="session" path="/org/gnome/SessionManager" interface="org.gnome.SessionManager" member="Inhibit" mask="send" name="org.gnome.SessionManager" pid=4417 label="snap.ora.ora" peer_pid=1531 peer_label="unconfined"\n');
console.log('May 24 03:54:07 ASUS-2121 dbus-daemon[1528]: apparmor="ACCESSED" operation="dbus_method_call"  bus="session" path="/org/gnome/SessionManager" interface="org.gnome.SessionManager" member="Inhibit" mask="send" name="org.gnome.SessionManager" pid=4417 label="snap.ora.ora" peer_pid=1531 peer_label="unconfined"');
console.log('May 24 03:54:07 ASUS-2121 dbus-daemon[1528]: apparmor="DENIED" operation="dbus_method_call"  bus="session" path="/org/gnome/SessionManager" interface="org.gnome.SessionManager" member="Inhibit" mask="send" name="org.gnome.SessionManager" pid=4417 label="snap.ora.ora" peer_pid=1531 peer_label="unconfined"');
console.log('May 24 03:53:10 ASUS-2121 gnome-shell[1664]: [AppIndicatorSupport-DEBUG] Registering StatusNotifierItem :1.127/org/ayatana/NotificationItem/Ora1\nMay 24 03:53:16 ASUS-2121 gnome-shell[1664]: Some code accessed the property \'refreshPropertyOnProxy\' on the module \'util\'. That property was defined with \'let\' or \'const\' inside the module. This was previously supported, but is not correct according to the ES6 standard. Any symbols to be exported from a module must be defined with \'var\'. The property access will work as previously for the time being, but please fix your code anyway.\nMay 24 03:53:16 ASUS-2121 gnome-shell[1664]: [AppIndicatorSupport-FATAL] unable to lookup icon for Ora1_1\nMay 24 03:53:16 ASUS-2121 gnome-shell[1664]: [AppIndicatorSupport-FATAL] unable to lookup icon for Ora1_1\nMay 24 03:53:22 ASUS-2121 dbus-daemon[1528]: apparmor="DENIED" operation="dbus_method_call"  bus="session" path="/org/gnome/SessionManager" interface="org.gnome.SessionManager" member="Inhibit" mask="send" name="org.gnome.SessionManager" pid=4417 label="snap.ora.ora" peer_pid=1531 peer_label="unconfined"\n');
console.log('May 24 03:54:07 ASUS-2121 dbus-daemon[1528]: apparmor="ACCESSED" operation="dbus_method_call"  bus="session" path="/org/gnome/SessionManager" interface="org.gnome.SessionManager" member="Inhibit" mask="send" name="org.gnome.SessionManager" pid=4417 label="snap.ora.ora" peer_pid=1531 peer_label="unconfined"');
console.log('May 24 03:54:07 ASUS-2121 dbus-daemon[1528]: apparmor="DENIED" operation="dbus_method_call"  bus="session" path="/org/gnome/SessionManager" interface="org.gnome.SessionManager" member="Inhibit" mask="send" name="org.gnome.SessionManager" pid=4417 label="snap.ora.ora" peer_pid=1531 peer_label="unconfined"');
console.log('May 24 03:53:10 ASUS-2121 gnome-shell[1664]: [AppIndicatorSupport-DEBUG] Registering StatusNotifierItem :1.127/org/ayatana/NotificationItem/Ora1\nMay 24 03:53:16 ASUS-2121 gnome-shell[1664]: Some code accessed the property \'refreshPropertyOnProxy\' on the module \'util\'. That property was defined with \'let\' or \'const\' inside the module. This was previously supported, but is not correct according to the ES6 standard. Any symbols to be exported from a module must be defined with \'var\'. The property access will work as previously for the time being, but please fix your code anyway.\nMay 24 03:53:16 ASUS-2121 gnome-shell[1664]: [AppIndicatorSupport-FATAL] unable to lookup icon for Ora1_1\nMay 24 03:53:16 ASUS-2121 gnome-shell[1664]: [AppIndicatorSupport-FATAL] unable to lookup icon for Ora1_1\nMay 24 03:53:22 ASUS-2121 dbus-daemon[1528]: apparmor="DENIED" operation="dbus_method_call"  bus="session" path="/org/gnome/SessionManager" interface="org.gnome.SessionManager" member="Inhibit" mask="send" name="org.gnome.SessionManager" pid=4417 label="snap.ora.ora" peer_pid=1531 peer_label="unconfined"\n');
console.log('May 24 03:54:07 ASUS-2121 dbus-daemon[1528]: apparmor="ACCESSED" operation="dbus_method_call"  bus="session" path="/org/gnome/SessionManager" interface="org.gnome.SessionManager" member="Inhibit" mask="send" name="org.gnome.SessionManager" pid=4417 label="snap.ora.ora" peer_pid=1531 peer_label="unconfined"\n\n\n\n>\n>\n>\n');

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