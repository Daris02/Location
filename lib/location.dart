import 'dart:io';
import 'package:location/locationable.dart';

List<Locationable> allThings = [];

void showMenu() {
  print('\n----------------------------');
  print('🤗 Welcome to Locationable');
  print('----------------------------');
  print('1. All Things');
  print('2. Add Thing');
  print('3. Make Location (Reserve)');
  print('4. Cancel Reservation');
  print('5. Exit');
}

void showAllThings() {
  if (allThings.isEmpty) {
    print("📭 No things found.");
    return;
  }
  print("All things you locationable:");
  for (var thing in allThings) {
    print("\t- $thing");
  }
}

void addThing() {
  stdout.write("Enter the name of the thing (REQUIRED): ");
  String? name = stdin.readLineSync();

  if (name == null || name.trim().isEmpty) {
    print("⚠️ Name is required.");
    return;
  }

  if (allThings.any((t) => t.name.toLowerCase() == name.toLowerCase())) {
    print("⚠️ '$name' already exists.");
    return;
  }

  stdout.write("Enter the description of the thing: ");
  String? desc = stdin.readLineSync();
  allThings.add(Locationable(name, desc ?? ""));
  print("✅ '$name' added.");
}

void makeLocation() {
  stdout.write("Enter name of thing you want to reserve: ");
  String? name = stdin.readLineSync();

  var thing = allThings.where((t) => t.name.toLowerCase() == name?.toLowerCase()).isNotEmpty
      ? allThings.firstWhere((t) => t.name.toLowerCase() == name?.toLowerCase())
      : null;

  if (thing == null) {
    print("❌ '$name' not found.");
    return;
  }

  if (thing.reserved) {
    print("❌ '$name' is already reserved.");
  } else {
    thing.reserved = true;
    print("✅ '$name' has been reserved.");
  }
}

void cancelReservation() {
  var reservedThings = allThings.where((t) => t.reserved).toList();
  if (reservedThings.isEmpty) {
    print("❌ No reserved things.");
    return;
  }

  stdout.write("Enter name of thing you want to cancel: ");
  String? name = stdin.readLineSync();

  var thing = allThings.where((t) => t.name.toLowerCase() == name?.toLowerCase()).isNotEmpty
      ? allThings.firstWhere((t) => t.name.toLowerCase() == name?.toLowerCase())
      : null;

  if (thing == null) {
    print("❌ '$name' not found or not reserved.");
    return;
  }

  thing.reserved = false;
  print("✅ '$name' reservation cancelled.");
}

void run() {
  while (true) {
    showMenu();
    stdout.write("Please enter your choice: ");
    String? choice = stdin.readLineSync();

    switch (choice) {
      case "1":
        showAllThings();
        stdout.write("Do you want to reserve something? (y/n): ");
        String? answer = stdin.readLineSync();
        if (answer?.toLowerCase() == 'y') {
          makeLocation();
        }
        break;
      case "2":
        addThing();
        break;
      case "3":
        makeLocation();
        break;
      case "4":
        cancelReservation();
        break;
      case "5":
        print("👋 Goodbye!");
        exit(0);
      default:
        print("❌ Invalid choice.");
    }
  }
}
