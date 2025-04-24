class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        // Dummy head and tail
        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key) {
        if (this.map.has(key)) {
            let node = this.map.get(key);
            this._remove(node);
            this._insert(node);
            this._updateUI();
            alert(`Value for key ${key}: ${node.value}`);
            return node.value;
        } else {
            alert(`Key ${key} not found`);
            return -1;
        }
    }

    put(key, value) {
        if (this.map.has(key)) {
            this._remove(this.map.get(key));
        }
        if (this.map.size === this.capacity) {
            this._remove(this.tail.prev);
        }
        this._insert(new Node(key, value));
        this._updateUI();
    }

    _insert(node) {
        this.map.set(node.key, node);
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    _remove(node) {
        this.map.delete(node.key);
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    _updateUI() {
        let cacheContainer = document.getElementById("cacheContainer");
        cacheContainer.innerHTML = "";
        
        let temp = this.head.next;
        while (temp !== this.tail) {
            let div = document.createElement("div");
            div.className = "cache-item";
            div.textContent = `(${temp.key}, ${temp.value})`;
            cacheContainer.appendChild(div);
            temp = temp.next;
        }
    }
}

let cache = null;

function initializeCache() {
    let size = parseInt(document.getElementById("cacheSize").value);
    if (isNaN(size) || size <= 0) {
        alert("Enter a valid cache size!");
        return;
    }
    cache = new LRUCache(size);
    document.getElementById("cacheContainer").innerHTML = "";
    alert(`LRU Cache of size ${size} initialized`);
}

function put() {
    if (!cache) {
        alert("Initialize cache first!");
        return;
    }
    let key = parseInt(document.getElementById("keyInput").value);
    let value = parseInt(document.getElementById("valueInput").value);
    if (isNaN(key) || isNaN(value)) {
        alert("Enter valid key and value!");
        return;
    }
    cache.put(key, value);

    // Clear the input fields
    document.getElementById("keyInput").value = "";
    document.getElementById("valueInput").value = "";
}

function get() {
    if (!cache) {
        alert("Initialize cache first!");
        return;
    }
    let key = parseInt(document.getElementById("keyInput").value);
    if (isNaN(key)) {
        alert("Enter a valid key!");
        return;
    }
    cache.get(key);

    // Clear the input fields
    document.getElementById("keyInput").value = "";
    document.getElementById("valueInput").value = ""; // Optional: Clear both fields
}