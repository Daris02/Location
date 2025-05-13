public class Locationable {
  private String name;
  private String description;
  private boolean state;

  public Locationable(String name, String description) {
    this.name = name;
    this.description = description;
    this.state = false;
  }

  public void setState(boolean state) {
    this.state = state;
  }

  public String getName() {
    return name;
  }

  public String getDescription() {
    return description;
  }

  public boolean getState() {
    return state;
  }

  @Override
  public String toString() {
    return name + " - [" + (state ? "\u001B[31m Reserved \u001B[0m]" : "\u001B[32m Free \u001B[0m]") + ", Description: " + description;
  }

  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((name == null) ? 0 : name.hashCode());
    result = prime * result + ((description == null) ? 0 : description.hashCode());
    result = prime * result + (state ? 1231 : 1237);
    return result;
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    Locationable other = (Locationable) obj;
    if (name == null) {
      if (other.name != null)
        return false;
    } else if (!name.equals(other.name))
      return false;
    if (description == null) {
      if (other.description != null)
        return false;
    } else if (!description.equals(other.description))
      return false;
    if (state != other.state)
      return false;
    return true;
  }
}
