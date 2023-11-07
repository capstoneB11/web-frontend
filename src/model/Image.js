// models/Image.js
class Image {
  constructor(data) {
    this.uname = data.uname;
    this.count = data.count;
    this.image = data.image;
    this.timestamp = new Date(data.timestamp);
    this.part = data.part;
    this.idRef = data.idRef;
  }
}

export default Image;
