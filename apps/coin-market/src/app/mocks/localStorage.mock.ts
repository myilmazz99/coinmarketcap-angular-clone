class LocalStorageMock {
    //comment
    private storage = {};

    clear() {
        this.storage = {};
    }

    setItem(key: string, val: string) {
        this.storage[key] = val;
    }

    getItem(key: string) {
        return this.storage[key] || null;
    }

    removeItem(key: string) {
        delete this.storage[key];
    }
}

export default LocalStorageMock;
