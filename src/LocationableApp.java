import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;

public class LocationableApp {
  private static final Scanner scanner = new Scanner(System.in);
  private final List<Locationable> allThings = new ArrayList<>();

  public void run() {
    // Set up exmaple of Locationable things
    var car = new Locationable("Car Red", "car description");
    var house = new Locationable("White House", "house description");
    allThings.add(car);
    allThings.add(house);

    while (true) {
      System.out.println("\n----------------------------");
      logInfo("🤗 Welcome to Locationable");
      System.out.println("----------------------------");
      System.out.println("1. All Things.");
      System.out.println("2. Add Things.");
      System.out.println("3. Make Location.");
      System.out.println("4. Cancel reservation.");
      System.out.println("5. Exit.");

      System.out.print("Please enter your choice: ");
      String userInput = scanner.nextLine();

      switch (userInput) {
        case "1" -> {
          showAllThingsWithState();
          System.out.print("Do you want to reserve? (y/n): ");
          String choice = scanner.nextLine();
          if (choice.equalsIgnoreCase("y")) {
            System.out.print("Enter the name of the thing: ");
            String name = scanner.nextLine();
            makeLocation(name);
          }
        }

        case "2" -> {
          boolean success = false;
          while (!success) {
            System.out.print("Enter the name of the thing (REQUIRED): ");
            String thingName = scanner.nextLine();
            System.out.print("Enter the description of the thing: ");
            String description = scanner.nextLine();
            success = addThings(thingName, description);
            if (!success) {
              System.out.println("⚠️ Please retry again!!!");
            }
          }
        }

        case "3" -> {
          System.out.print("Enter name of thing you want to reserve: ");
          String reserveName = scanner.nextLine();
          makeLocation(reserveName);
        }

        case "4" -> {
          if (showAllThingsReserved() == 0)
            continue;
          System.out.print("Enter name of thing you want to cancel reservation: ");
          String cancelName = scanner.nextLine();
          cancelReservation(cancelName);
        }

        case "5" -> {
          System.out.println("Goodbye! 👋👋👋");
          scanner.close();
          return;
        }

        default -> System.out.println("Invalid choice.");
      }
    }
  }

  public boolean addThings(String name, String description) {
    if (name == null || name.trim().isEmpty()) {
      logError("Name is required.");
      return false;
    }

    if (allThings.stream().anyMatch(t -> t.getName().equalsIgnoreCase(name))) {
      logWarning(name + " already exists.");
      return false;
    }

    allThings.add(new Locationable(name, description));
    logSuccess(name + " added.");
    return true;
  }

  public void showAllThingsWithState() {
    for (Locationable thing : allThings) {
      System.out.println("\t- " + thing.toString());
    }
  }

  public void makeLocation(String name) {
    Optional<Locationable> thing = allThings.stream()
        .filter(t -> t.getName().equalsIgnoreCase(name))
        .findFirst();
    if (!thing.isPresent()) {
      logWarning("⚠️ " + name + " not found.");
      return;
    }
    if (!thing.get().isAvailable()) {
      logError("❌ " + thing.get().getName() + " is already reserved.");
      return;
    }

    thing.get().setReserved();
    logSuccess("✅ " + thing.get().getName() + " has been reserved.");
  }

  public int showAllThingsReserved() {
    List<Locationable> reservedThings;
    reservedThings = allThings.stream()
        .filter(t -> !t.isAvailable())
        .toList();
    if (reservedThings.isEmpty()) {
      logInfo("No reserved things found.");
      return reservedThings.size();
    }
    logInfo("All reserved things:");
    reservedThings.forEach(thing -> System.out.println("\t- " + thing));
    return reservedThings.size();
  }

  public void cancelReservation(String name) {
    Optional<Locationable> thing = allThings.stream()
        .filter(t -> t.getName().equalsIgnoreCase(name))
        .findFirst();
    if (!thing.isPresent()) {
      logError("❌ " + name + " not found.");
      return;
    }
    thing.get().setAvailable();
    logSuccess("✅ " + thing.get().getName() + " reservation has been cancelled.");
  }

  public void logError(String msg) {
    System.out.println("\u001B[31m" + msg + "\u001B[0m"); // Red
  }

  public void logWarning(String msg) {
    System.out.println("\u001B[33m" + msg + "\u001B[0m"); // Yellow
  }

  public void logSuccess(String msg) {
    System.out.println("\u001B[32m" + msg + "\u001B[0m"); // Green
  }

  public void logInfo(String msg) {
    System.out.println("\u001B[34m" + msg + "\u001B[0m"); // Blue
  }
}
