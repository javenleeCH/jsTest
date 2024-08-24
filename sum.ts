// sum.js
export function sum(a: number, b: number) {
  return a + b
}

export class Peng {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  private getName(): string {
    return this.name
  }
  public printAll() {
    console.log(this.getName());
  }

}