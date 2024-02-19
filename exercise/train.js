class Train {
  pass = ["Masinis", ...new Array(10).fill(null)];

  getPass() {
    console.table(this.pass)
  }

  enter(name) {
    let idx = this.pass.findIndex((item) => item == null);
    if (idx > 0) {
      this.pass[idx] = name;
    } else {
      console.log("Full capacity")
    }
  }

  out(name) {
    let idx = this.pass.findIndex((item) => item == name);
    if (idx >= 0) {
      this.pass[idx] = null
    }
  }
}

const train = new Train();

train.enter("Andi");
train.enter("Budi");
train.enter("John");
train.out("Andi");
train.enter("Doe");
train.out("Budi")
train.enter("Smith")

train.getPass();
