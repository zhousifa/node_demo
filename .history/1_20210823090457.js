function parseMember(member) { 
    return { 
        'uuid': member[0], 
        'id': member[1][0], 
        'number': member[1][1], 
        'name': member[1][2], 
        'codec': member[1][3], 
        'status': JSON.parse(member[1][4]), 
        'email': member[1][5].email, 
        'avatar': member[1][5].avatar || "./images/level2.png" 
    }; 
    
} 
    
WsClient = function (wsUri, user_name, nick_name, pass_word, rid, level, avatar) { 
    this.wsUri = wsUri; this.logindata = {}; 
    this.logindata.type = 'login'; 
    this.logindata.roomid = rid; 
    this.logindata.pid = 554; 
    this.logindata.user_name = user_name; 
    this.logindata.nick_name = nick_name; 
    this.logindata.pass_word = pass_word; 
    this.logindata.mobile = 0; 
    this.logindata.state = 0; 
    this.logindata.level = level; 
    this.logindata.vod = ''; 
    this.logindata.avatar = avatar; 
}; 
var reconnt = 5; 
WsClient.prototype.connect = function () {
    var that = this; 
    that.reconnectMs = 2000; 
    that.wsmsg = new WebSocket(this.wsUri); 
    that.wsmsg.onopen = function (e) { 
        that.wsmsg.send(JSON.stringify(that.logindata)); 
    }; 
    that.wsmsg.onerror = function (error) { 
        console.log('WsClient: onerror'); 
    }; 
    that.wsmsg.onmessage = function (message) {
        var json; 
        try { 
            json = JSON.parse(message.data); 
        } catch (e) { 
            console.log('This doesn\'t look like a valid JSON: ', message.data); 
            return; 
        }
        switch (json.type) { 
            case 'welcome': 
            socket_welcome(json); 
            break; 
            case 'login': socket_login(json); 
            var info = {}; 
            info.type = 'get_top_list'; 
            that.wsmsg.send(JSON.stringify(info)); 
            break; 
            case 'alert': socket_on_alert(json); 
            break; 
            case 'state': socket_state(json); 
            break; 
            case 'on_hand': socket_hand(json); 
            break; case 'disconnect': socket_disconnect(json); 
            break; case 'public_message': socket_public_message(json); 
            break; 
            case 'system_message': socket_system_message(json); 
            break; 
            case 'Kick_out': socket_Kick_out(json); 
            break; 
            case 'online_list': break; 
            case 'on_addfile': var info = {}; 
            info.type = 'get_file_list'; 
            that.wsmsg.send(JSON.stringify(info)); 
            break; 
            case 'on_delfile': var info = {}; 
            info.type = 'get_file_list'; 
            that.wsmsg.send(JSON.stringify(info)); 
            case 'get_file_list': socket_getfileList(json.file_list); 
            break; 
            case 'set_topfile': socket_set_topfile(json); 
            break; 
            case 'get_top_list': socket_gettopList(json.top_list); 
            break; 
            case 'draw_message': socket_draw_message(json); 
            break; 
            case'ovmeet_message':socket_ovmeet_message(json); 
            break; 
            case'play_audio':console.log('222！');break;
            default: break; 
        };
    }
    that.wsmsg.onclose = function () { 
        console.log("WsClient: Connection closed " + reconnt); 
        if (reconnt > 0) { 
            setTimeout(wsreconnect, 2000); reconnt--; 
        } else { 
            window.hangupCall(); 
        } 
    };
}; WsClient.prototype.disconnect = function () { this.wsmsg.close(); }; WsClient.prototype.send = function (data) { this.wsmsg.send(JSON.stringify(data)); }; wsreconnect = function () { socket.connect(); };