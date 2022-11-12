import axios from "axios";

export default class APIService {
  static async getText() {
    const response = await axios.get("https://baconipsum.com/api/?type=meat-and-filler&sentences=1&format=text");
    return response;
  }
}