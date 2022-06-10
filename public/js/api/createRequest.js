/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'
    let url = options.URL
    let formData = new FormData()
    if (options.method === 'GET') {
        let keys = options.data
        for (let key in keys) {
            url.searchParams.set(key, options.data[key])
        }
        xhr.open('GET', url)

    } else {
        let keys = Object.keys(options.data)
        for (let key in keys) {
            formData.append(key, options.data[key])
        }
        xhr.open('POST', url)
    }
    xhr.onload = function () {
        options.callback(null, xhr.response)
    }

    xhr.onerror = function () {
        options.callback(xhr.response.error, null);
    }
    try {
        xhr.send(formData);
    } catch (error) {
        throw error;
    }
};
