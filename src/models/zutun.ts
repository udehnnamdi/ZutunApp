class Zutun {
    id: string;
    text: string;
  
    constructor(zutunText: string) {
      this.text = zutunText;
      this.id = new Date().toISOString();
    }
  }
  
  export default Zutun;