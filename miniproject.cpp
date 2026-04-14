#include <iostream>
using namespace std;

int main() {
    int n;
    string name[50];
    int attendance[50];

    cout << "Enter number of students: ";
    cin >> n;

    
    for(int i = 0; i < n; i++) {
        cout << "Enter name of student " << i + 1 << ": ";
        cin >> name[i];
    }

    
    cout << "\nMark Attendance (0 = Present, 1 = Absent)\n";
    for(int i = 0; i < n; i++) {
        cout << "Is " << name[i] << " present ";
        cin >> attendance[i];
    }
    cout << " Attendance List\n";
    for(int i = 0; i < n; i++) {
        cout << name[i] << " : ";
        if(attendance[i] == 1)
            cout << "Present";
        else
            cout << "Absent";
        cout << endl;
    }

    return 0;
}
