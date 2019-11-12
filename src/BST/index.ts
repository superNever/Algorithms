export interface INode {
    data: any;
    count: number;
    left?: INode;
    right?: INode;

    show();
}

export class Node implements INode {

    constructor(public data: any, public count: number = 1, public left: INode, public right: INode) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.count = count;
    }

    show() {
        return this.data;
    }
}

/**
 * BST
 */
export default class BST {
    public root: any = null;
    public collectInfo: Array<any> = [];

    /**
     * 插入
     * @param data
     */
    public insert(data: any) {
        let n = new Node(data, 1, null, null,);
        if (this.root == null) {
            this.root = n;
        } else {
            this.insertNode(this.root, n)
        }
    }

    /**
     * 删除
     * @param data
     */
    public remove(data) {
        this.root = this.removeNode(this.root, data)
    }

    public putstr() {
        let str = this.collectInfo.join(" ");
        this.collectInfo = [];
        return str;
    }

    /**
     * 中序
     * @param node
     */
    public isOrder(node = this.root) {
        let current = node;
        if (!(current == null)) {
            this.isOrder(current.left);
            this.collectInfo.push(current.show());
            this.isOrder(current.right);
        }
    }

    /**
     * 先序
     * @param node
     */
    public preOrder(node = this.root) {
        let current = node;
        if (current != null) {
            this.collectInfo.push(current.show());
            this.preOrder(current.left);
            this.preOrder(current.right);
        }
    }

    /**
     * 后序
     * @param node
     */
    public postOrder(node = this.root) {
        let current = node;
        if (current != null) {
            this.postOrder(current.left);
            this.postOrder(current.right);
            this.collectInfo.push(current.show());
        }
    }

    /**
     * 查找最小值
     */
    public getMin() {
        let current = this.root;
        while (current.left != null) {
            current = current.left;
        }
        return current.data;
    }

    /**
     * 查找最大值
     */
    public getMax() {
        let current = this.root;
        while (current.right != null) {
            current = current.right;
        }
        return current.data;
    }

    /**
     * 查找指定值
     * @param data
     */
    public find(data) {
        let current = this.root;
        while (current != null) {
            if (current.data == data) {
                return current
            } else if (current.data < data) {
                current = current.right;
            } else {
                current = current.left;
            }
        }
        return null;
    }

    /**
     * 插入节点
     * @param node
     * @param newNode
     */
    private insertNode(node, newNode) {
        if (node.data < newNode.data) {
            if (node.right == null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        } else {
            if (node.left == null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        }
    }

    /**
     * 删除节点
     * @param node
     * @param data
     */
    private removeNode(node: any, data: any) {
        if (node == null) return null;
        if (data == node.data) {
            // 没有子节点
            if (node.left == null && node.right == null) {
                return null;
            }
            // 没有左节点
            if (node.left == null) {
                return node.right
            }
            // 没有右节点
            if (node.right == null) {
                return node.left;
            }
            // 有两个节点
            let temp = this.getSmallest(node.right);
            node.data = temp.data;
            node.right = this.removeNode(node.right, temp.data);
            return node;

        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }

    /**
     * 获取最小节点
     * @param node
     */
    private getSmallest(node) {
        if (node.left == null) {
            return node;
        } else {
            return this.getSmallest(node.left);
        }
    }
}