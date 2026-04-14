#include <iostream>
using namespace std;

#define MAX 5   // maximum size of stack

int stack[MAX];
int top = -1;


void push() {
    int value;
    if (top == MAX - 1) {
        cout << "Stack Overflow! Cannot push." << endl;
    } else {
        cout << "Enter value to push: ";
        cin >> value;
        top++;
        stack[top] = value;
        cout << value << " pushed into stack." << endl;
    }
}

void pop() {
    if (top == -1) {
        cout << "Stack Underflow! Cannot pop." << endl;
    } else {
        cout << stack[top] << " popped from stack." << endl;
        top--;
    }
}

void peek() {
    if (top == -1) {
        cout << "Stack is empty." << endl;
    } else {
        cout << "Top element is: " << stack[top] << endl;
    }
}

// Display stack
void display() {
    if (top == -1) {
        cout << "Stack is empty." << endl;
    } else {
        cout << "Stack elements are:" << endl;
        for (int i = top; i >= 0; i--) {
            cout << stack[i] << endl;
        }
    }
}

int main() {
    int choice;

    while (true) {
        cout << "\n Stack Operations Menu " << endl;
        cout << "1. Push" << endl;
        cout << "2. Pop" << endl;
        cout << "3. Peek" << endl;
        cout << "4. Display" << endl;
        cout << "5. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1: push(); break;
            case 2: pop(); break;
            case 3: peek(); break;
            case 4: display(); break;
            case 5: return 0;
            default: cout << "Invalid choice!" << endl;
        }
    }
}
