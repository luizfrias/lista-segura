function match_url(url) {

    var user_url = window.location.hostname;
    if (user_url.search('www') == -1) user_url = 'www.' + user_url;

    if (url == user_url) {
        return true;
    }
    return false;

}

var Host = {

    check_for_black_list: function() {

        chrome.extension.sendRequest({ action: 'load' }, function(response) {

            var black_list = JSON.parse(response.data);

            for (var i = 0 ; i < black_list.length ; i++) {

                var site = black_list[i].site;

                if ( match_url(site) ) {
                    UserAlert.init(black_list[i]);
                    break;
                }

            }

        });

    }
}

var UserAlert = {

    init: function(host_data) {

        /*
        for (var propertie in host_data) {
            if (host_data.hasOwnProperty(propertie)) {
                console.log(propertie + " -> " + host_data[propertie]);
            }
        }
        */
        chrome.extension.sendRequest({ action: 'show', save: host_data }, function(response) {});

    }

}

Host.check_for_black_list()
