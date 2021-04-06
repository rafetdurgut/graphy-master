var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');
function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight/2;
}
resizeCanvas();
function clear()
{
    context.clearRect(0,0,canvas.width, canvas.height);
}
function Graph()
{
    this.nodes = [];
    this.edges = [];
}
Graph.prototype.addEdge = function(edge)
{
    this.edges.push(edge);
}
Graph.prototype.addNode = function(node)
{
    this.nodes.push(node);
}

Graph.prototype.draw = function() {
    //Clear Canvas

    //Get Node positions
    this.edges.forEach(edge => {
        
    });

    //Draw Node
    context = canvas.getContext('2d');
    clear();
    this.nodes.forEach(node => {
        context.beginPath();
        context.fillStyle="#000";
        context.arc(node.pos[0],node.pos[1],nodeRadius,0,Math.PI*2,true);
        context.closePath();
        context.fill();
    });

    //window.requestAnimationFrame(()=>this.draw()); 
};


var frameRate = 30;
var size = (800, 800);
var nodeRadius = 30
var edgeStroke = 2;

function Edge(id, length, k, label, n1, n2)
{
    this.id = id; 
    this.length = length;
    this.k = k;
    this.label = label;
    this.n1 = n1;
    this.n2 = n2;

    console.log(n1);
}

function Node(id, label,pos)
{
    this.id = id;
    this.label = label;
    this.pos = pos;
}

g = new Graph();
n = new Node(0,"0",[200,200]);
n2 = new Node(0,"0",[300,300]);
g.addNode(n);
g.addNode(n2);

e = new Edge(0,10,0.005, "a", n, n2);
g.draw();