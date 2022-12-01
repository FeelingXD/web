let fire_mode: string[] = ["semi", "auto", "single"];

interface Gun {
  name: string;
  max_ammo: number;
  ammo: number;
  mode: string;
  fire(): void;
  reload(): void;
}

class M4 implements Gun {
  ammo: number;
  max_ammo: number;
  name = "M4";
  mode: string;
  constructor(ammo: number, mode: string) {
    (this.ammo = ammo), (this.max_ammo = ammo);
    this.mode = mode;
  }
  fire() {
    if (this.mode === "auto") {
      while (this.ammo != 0) {
        console.log(`남은탄창 ${--this.ammo}/ ${this.max_ammo}`);
      }
    } else if (this.mode == "semi") {
      for (let i = 0; i < 3; i++) {
        console.log(`남은탄창 ${--this.ammo}/ ${this.max_ammo}`);
      }
    }
    if (this.ammo === 0) {
      console.log(`Out of ammo`);
    }
  }
  reload() {
    this.ammo = this.max_ammo;
  }
  check_ammo() {}
}

let m4 = new M4(30, "semi");
m4.fire();
m4.reload();
