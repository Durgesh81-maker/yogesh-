import java.util.Scanner;

// Student class
class Student {
    int id;
    String name;
    int roomNumber;

    Student(int id, String name) {
        this.id = id;
        this.name = name;
        this.roomNumber = -1; 
    }

    void display() {
        System.out.println("ID: " + id + 
                           ", Name: " + name + 
                           ", Room: " + (roomNumber == -1 ? "Not Allocated" : roomNumber));
    }
}

// Room class
class Room {
    int roomNumber;
    boolean isOccupied;

    Room(int roomNumber) {
        this.roomNumber = roomNumber;
        this.isOccupied = false;
    }
}


public class HostelManagementSystem {

    static Student[] students = new Student[50];
    static Room[] rooms = new Room[20];
    static int studentCount = 0;

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Create rooms
        for (int i = 0; i < rooms.length; i++) {
            rooms[i] = new Room(101 + i);
        }

        int choice;
        do {
            System.out.println("\n--- Hostel Management System ---");
            System.out.println("1. Add Student");
            System.out.println("2. Allocate Room");
            System.out.println("3. Display Students");
            System.out.println("4. Display Rooms");
            System.out.println("5. Exit");
            System.out.print("Enter choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    addStudent(sc);
                    break;
                case 2:
                    allocateRoom(sc);
                    break;
                case 3:
                    displayStudents();
                    break;
                case 4:
                    displayRooms();
                    break;
                case 5:
                    System.out.println("Exiting System...");
                    break;
                default:
                    System.out.println("Invalid Choice!");
            }
        } while (choice != 5);

        sc.close();
    }

    // Add student
    static void addStudent(Scanner sc) {
        System.out.print("Enter Student ID: ");
        int id = sc.nextInt();
        sc.nextLine();
        System.out.print("Enter Student Name: ");
        String name = sc.nextLine();

        students[studentCount++] = new Student(id, name);
        System.out.println("Student added successfully!");
    }

    // Allocate room
    static void allocateRoom(Scanner sc) {
        System.out.print("Enter Student ID: ");
        int id = sc.nextInt();

        Student student = null;
        for (int i = 0; i < studentCount; i++) {
            if (students[i].id == id) {
                student = students[i];
                break;
            }
        }

        if (student == null) {
            System.out.println("Student not found!");
            return;
        }

        for (Room room : rooms) {
            if (!room.isOccupied) {
                room.isOccupied = true;
                student.roomNumber = room.roomNumber;
                System.out.println("Room " + room.roomNumber + " allocated successfully!");
                return;
            }
        }

        System.out.println("No rooms available!");
    }

    
    static void displayStudents() {
        System.out.println("\n--- Student Records ---");
        for (int i = 0; i < studentCount; i++) {
            students[i].display();
        }
    }

    
    static void displayRooms() {
        System.out.println("\n--- Room Status ---");
        for (Room room : rooms) {
            System.out.println("Room " + room.roomNumber + 
                               " : " + (room.isOccupied ? "Occupied" : "Available"));
        }
    }
}
