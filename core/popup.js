function capitalize_str(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function key_to_text(key) {
    if (key == 'cnpj_cpf') return 'CNPJ/CPF';
    else if (key == 'situacao_site') return 'Situação do site';
    else if (key == 'data_inclusao') return 'Data de inclusão';
    return capitalize_str(key);
}

chrome.extension.sendRequest({ action: 'info' }, function(response) {
    var data = JSON.parse(response.data);
    var table = document.getElementById('info-tbody');
    for (var propertie in data) {
        if (data.hasOwnProperty(propertie)) {

            r = table.insertRow(0); 
            c = r.insertCell(0);
            c.innerHTML = key_to_text(propertie);
            c = r.insertCell(1);
            c.innerHTML = data[propertie];

        }
    }
});

