MinecraftAPI.getServerStatus(serverIP, {
    port: serverPort // optional, only if you need a custom port
}, function (err, status) {
    //$("#serverIP").html(serverIP);
    $("#serverIP").html("<input class=\"mc-input\" value='" + serverIP + "' disabled>")
    if (err) {
        return document.querySelector('.server-status').innerHTML = "<span class=\"label label-danger\">Error :<</span>";
    }

    // you can change these to your own message!
    $("#serverStatus").html(status.online ? '<span class="label label-success">' + serverOnline + '</span>' : '<span class="label label-danger">' + serverOffline + '</span>');
});