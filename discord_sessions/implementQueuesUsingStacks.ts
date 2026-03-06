// Implement Queue using Stacks
// Fila de las tortillas vs Un pan Bimbo
// first in first out (FIFO) = queue
// last in first out (LIFO) = stacks

// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should 
// support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:
// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.

// Notes:
// You must use only standard operations of a stack, which means only push to top, peek/pop from 
// top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack 
// using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

class MyQueue {

    private stackIn: number[]; // Stack para las inserciones
    private stackOut: number[]; // Stack para las eliminaciones

    constructor() {
        this.stackIn = [];
        this.stackOut = [];
    }

    push(x: number): void {
        // Agrega números al stack

        // Guardamos el valor en el primer stack
        this.stackIn.push(x);
    }

    pop(): number {
        // Elimina números del stack
        while(this.stackIn.length !== 0) {
            let value = this.stackIn.pop();
            this.stackOut.push(value!);
        }
        
        const value = this.stackOut.pop();
        if (value === undefined) throw new Error("Queue is empty");
        return value;
    }

    peek(): number {
        // Similar a pop, pero sin eliminar
        if (this.stackOut.length === 0) {
            while (this.stackIn.length !== 0) {
                let value = this.stackIn.pop();
                this.stackOut.push(value!);
            }
        }
        console.log(this.stackOut.length);
        return this.stackOut[this.stackOut.length - 1];
    }

    empty(): boolean {
        // Verdadero/Falso si la cola está vacia o no
        return this.stackIn.length === 0 && this.stackOut.length === 0;
    }
}

let queue: MyQueue = new MyQueue();
//let stack2: MyQueue = new MyQueue();
queue.push(5);
queue.pop();
queue.peek();

if (queue.empty()){
    console.log("Tu cola está vacía, agrega más elementos.");
} else {
    console.log("No mames ya deja de agregar wey, ni que fuera manda");
}

// Así como metemos los elementos en stackIn, los sacamos al stackOut

// Cómo escribirías la lógica dentro de tu método pop() para lograr ese 
// "vaciado" de stackIn a stackOut usando solo el método de agregar y el método de sacar del stack

/* 
    Explanation
    MyQueue myQueue = new MyQueue();
    myQueue.push(1); // queue is: [1]
    myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
    myQueue.peek(); // return 1
    myQueue.pop(); // return 1, queue is [2]
    myQueue.empty(); // return false
*/

/*
Insertar_cola (1) // primero
Insertar_cola(2) // sergundo
Eliminar_cola(1) // solo hay un 2
Insertar_cola(2 y 3)
Elimnar_cola(2)

Iremos almacenando los valores en el stack in
Conservamos el primer valor en una variable temp (por si lo llegan a sacar)
Si lo sacan, la variable temp cambia al siguiente valor viejito del Stackin
Y seguimos agregando valores como si nada
*/