class Locationable {
  String name;
  String description;
  bool reserved;

  Locationable(this.name, this.description) : reserved = false;

  @override
  String toString() {
    return "$name ($description) [${reserved ? '❌ Reserved' : '🟢 Available'}]";
  }
}