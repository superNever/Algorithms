/**
 * @Description: index
 * @author SuperNever
 * @date 2019/11/12
 */

export class Vertex {
    constructor(public label: any, public wasVisited: boolean) {
        this.label = label;
        this.wasVisited = wasVisited;
    }
}

export class Graph {
    private readonly vertices;
    private edges: number = 0;
    private adj: Array<any> = [];
    private marked:Array<boolean> = [];
    public strArr:Array<string> = [];

    public constructor(v: number) {
        this.vertices = v;
        for (let i = 0; i < this.vertices; i++) {
            this.adj[ i ] = [];
            // this.adj[ i ].push("");
            this.marked[i] = false;
        }
    }

    public addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    showGraph() {
        for (let i =0; i < this.vertices; i++) {
            this.strArr = [];
            this.strArr.push(i+"->");
            for(let j = 0; j < this.vertices; j++) {
                if(this.adj[i][j]!= undefined) {
                    this.strArr.push(this.adj[i][j]+ ' ');
                }
            }
            console.log(this.strArr.join(''));
        }
    }
    dfs(v) {
        this.marked[v] = true;
        if (this.adj[v].length>0) {
            console.log("Visited vertex: "+ v);
        }
        for (let i = 0,j = this.adj[v].length; i < j; i++) {
            if(!this.marked[i]) {
                this.dfs(i)
            }
        }
    }
    public toString() {
    }
}