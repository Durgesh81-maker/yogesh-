// Abstract class
abstract class Animal {

    // Abstract method
    abstract void sound();

    // Concrete method
    void eat() {
        System.out.println("Animal is eating");
    }
}


class Dog extends Animal {

    void sound() {
        System.out.println("Dog barks");
    }
}


public class AbstractClassDemo {
    public static void main(String[] args) {


        Animal a = new Dog();
        a.eat();
        a.sound();
    }
}


