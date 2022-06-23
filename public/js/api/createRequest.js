/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest()
    const formData = new FormData()
    xhr.response.type = 'json'
    if (options.method === 'GET') {
        let url = new URL(options.url, location.href)
        if (options.data) {
            let keys = Object.keys(options.data)
            for (let key in keys) {
                url.searchParams.set(key, options.data[key])
            }
        }

            xhr.open('GET', url)
            xhr.onload = function () {
                options.callback(null, xhr.response)
            }
        
        try {
            xhr.send();
        } catch (err) {
            options.callback(err, null);
        }

    } else {

        if (options.data) {
            let keys = Object.keys(options.data)
            for (let key in keys) {
                formData.append(key, options.data[key])
            }
        }

            xhr.open(options.method, options.url)
            xhr.onload = function () {
                options.callback(null, xhr.response)
            }
        
        try {
            xhr.send(formData);
        } catch (err) {
            options.callback(err, null);
        }
    }
}
