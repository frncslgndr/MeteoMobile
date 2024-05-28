import AsyncStorage from "@react-native-async-storage/async-storage";

export class AsyncStorageManager {
    static getStorage(key, onSuccess) {
        AsyncStorage.getItem(key)
            .then(value => {
                onSuccess(JSON.parse(value));
            })
            .catch(error => {
                console.error(error);
            });
    }

    static setStorage(key, value) {
        AsyncStorage.setItem(key, JSON.stringify(value))
            .then(() => {
                console.log(`Stored ${key} successfully`);
            })
            .catch(error => {
                console.error(`Error storing ${key}:`, error);
            });
    }

    static addStorage(key, value) {
        AsyncStorage.getItem(key)
            .then(currentValue => {
                const updatedValue = JSON.stringify([...JSON.parse(currentValue || '[]'), value]);
                AsyncStorage.setItem(key, updatedValue)
                    .then(() => {
                        console.log(`Added ${value} to ${key} successfully`);
                    })
                    .catch(error => {
                        console.error(`Error adding ${value} to ${key}:`, error);
                    });
            })
            .catch(error => {
                console.error(`Error getting ${key} value:`, error);
            });
    }

    static removeStorage(key, itemKeyToRemove) {
        AsyncStorage.getItem(key)
            .then(value => {
                const data = JSON.parse(value) || {};
                delete data[itemKeyToRemove];
                AsyncStorage.setItem(key, JSON.stringify(data))
                    .then(() => {
                        console.log(`Removed item with key ${itemKeyToRemove} from ${key}`);
                    })
                    .catch(error => {
                        console.error(`Error removing item with key ${itemKeyToRemove} from ${key}:`, error);
                    });
            })
            .catch(error => {
                console.error(`Error getting ${key} value:`, error);
            });
    }

    static isInStorage(key, searchKey, searchValue, callback) {
        AsyncStorage.getItem(key)
            .then(value => {
                const data = JSON.parse(value) || {};
                const foundItem = Object.entries(data).find(([k, v]) => v[searchKey] === searchValue);
                callback(foundItem)
            })
            .catch(error => {
                console.error(error);
            });
    }

    static searchInStorage(key, searchKey, searchValue, onSuccess, onError) {
        AsyncStorage.getItem(key)
            .then(value => {
                const data = JSON.parse(value) || {};
                const foundItem = Object.entries(data).find(([k, v]) => v[searchKey] === searchValue);
                if (foundItem) {
                    onSuccess(foundItem);
                } else {
                    onError(`No item found with ${searchKey} equal to ${searchValue}`);
                }
            })
            .catch(error => {
                onError(error);
            });
    }
}