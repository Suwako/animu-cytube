_addChatMessage = addChatMessage;
addChatMessage = function(data){
    // Save and restore these so this function has no side effects
    username = data.username;
    msg = data.msg;
    if (data.username == "Naoko" && (match = data.msg.match(/^\((\S+)\) (.*)/))){
        data.username = match[1] + "*";
        data.msg = match[2];
    }
    if (Math.floor(Math.random() * 10) == 0){
        data.msg += " ~ de geso";
    }
    _addChatMessage(data);
    data.username = username;
    data.msg = msg;
}
