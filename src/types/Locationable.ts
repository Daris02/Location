export default interface Locationable {
  name: string;
  description?: string;
  isLocal: boolean;

  setLouer();
  setLiberer();
  getType();
}
