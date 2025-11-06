import { storeManager } from '../../common/storageManager'

export default {
    data: {
        name: '',
        status: ''
    },
    setData(e) {
        const that = this;
        storeManager.set(
            'name',
            'john',
            function (result) {
                if (result) {
                    that.status = 'name is set to john'
                }
            },
            function (data, code) {
                that.status = `Err: ${code} ${data}`;
            })
    },
    getData() {
        const that = this;
        storeManager.get(
            'name',
            'rick',
            function (data) {
                that.name = data;
            }
        )
    },
    deleteData() {
        const that = this;
        storeManager.delete(
            'name',
            function (result) {
                if (result) {
                    that.status = 'Value is deleted'
                }
            },
            function (data, code) {
                that.status = `Err: delete ${code} ${data}`
            }
        )
    },
    clearStorage() {
        const that = this;
        storeManager.clear(
            function (result) {
                if (result) {
                    that.status = 'Storage cleared'
                }
            },
            function (data, code) {
                that.status = `Err: clear ${code} ${data}`
            }
        )
    },
    onInit() {

    }
};
