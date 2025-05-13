from dataclasses import dataclass

@dataclass
class Locationable():
    name: str
    description: str
    reserved: bool = False

    def setReserved(self):
        self.reserved = True
    def setAvailable(self):
        self.reserved = False

all_things = []
car = Locationable("Car", "A red car")
all_things.append(car)
house = Locationable("House", "A big house")
all_things.append(house)

def show_menu():
    print("\n----------------------------")
    print("🤗 Welcome to Locationable")
    print("----------------------------")
    print("1. All Things")
    print("2. Add Thing")
    print("3. Make Location (Reserve)")
    print("4. Cancel Reservation")
    print("5. Exit")

def show_all_things():
    if not all_things:
        print("📭 No things found.")
        return
    for thing in all_things:
        state = "❌ Reserved" if thing.reserved else "🟢 Available"
        print(f"- {thing.name} ({thing.description}) [{state}]")

def add_thing():
    name = input("Enter the name of the thing (REQUIRED): ").strip()
    if not name:
        print("⚠️ Name is required.")
        return
    if any(t.name.lower() == name.lower() for t in all_things):
        print(f"⚠️ '{name}' already exists.")
        return
    description = input("Enter the description of the thing: ").strip()
    all_things.append(Locationable(name, description))
    print(f"✅ '{name}' added.")

def make_location():
    name = input("Enter name of thing you want to reserve: ").strip()
    for thing in all_things:
        if thing.name.lower() == name.lower():
            if thing.reserved:
                print(f"❌ '{name}' is already reserved.")
            else:
                thing.reserved = True
                print(f"✅ '{name}' has been reserved.")
            return
    print(f"❌ '{name}' not found.")

def cancel_reservation():
    reserved_things = [t for t in all_things if t.reserved]
    print("Reserved things:")
    for thing in reserved_things:
        print(f"- {thing.name} ({thing.description}) ❌ Reserved")
    if not reserved_things:
        print("❌ No reserved things.")
        return
    name = input("Enter name of thing you want to cancel: ").strip()
    for thing in reserved_things:
        if thing.name.lower() == name.lower():
            thing.reserved = False
            print(f"✅ '{name}' reservation cancelled.")
            return
    print(f"❌ '{name}' not found or not reserved.")

def main():
    while True:
        show_menu()
        choice = input("Please enter your choice: ").strip()
        match choice:
            case "1":
                show_all_things()
                sub = input("Do you want to reserve something? (y/n): ").lower()
                if sub == "y":
                    make_location()
            case "2":
                add_thing()
            case "3":
                make_location()
            case "4":
                cancel_reservation()
            case "5":
                print("Goodbye! 👋👋")
                break
            case _:
                print("❌ Invalid choice.")

if __name__ == "__main__":
    main()
