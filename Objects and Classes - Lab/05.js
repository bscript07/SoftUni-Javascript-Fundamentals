function cats(input) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const line of input) {
        let destructed = line.split(' ');

        let name = destructed[0];
        let age = Number(destructed[1]);

        let cat = new Cat(name, age);

        cat.meow();
    }
}