import storage from '@system.storage'

// get value in the store by given key
function getValue(key, defaultValue, callback) {
    storage.get({
        key: key,
        success: function (data) {
            const value = data || defaultValue
            callback(value)
        },
        fail: function () {
            callback(defaultValue)
        }
    })
}

// set value in the store by given key
function setValue(key, value, success, fail) {
    storage.set({
        key: key,
        value: String(value),
        success: function () {
            if (success) {
                success(true)
            }
        },
        fail: function (data, code) {
            if (fail) {
                fail(data, code)
            }
        }
    })
}

// delete value in the store by given key
function deleteValue(key, success, fail) {
    storage.delete({
        key: key,
        success: function () {
            if (success) {
                success(true)
            }
        },
        fail: function (data, code) {
            if (fail) {
                fail(data, code)
            }
        }
    })
}

// clear all the values in the store
function clearStorage(success, fail) {
    storage.clear({
        success: function () {
            if (success) {
                success(true)
            }
        },
        fail: function (data, code) {
            if (fail) {
                fail(data, code)
            }
        }
    })
}

export const storeManager = {
    set: setValue,
    get: getValue,
    delete: deleteValue,
    clear: clearStorage
}

