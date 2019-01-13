const test = {
    main: () => {
        test.testing();
        test.one();
        test.two();
        test.three();
    },
    testing: () => {
        console.log("Testing...");
    },
    one: () => {
        console.log("One");
    },
    two: () => {
        console.log("Two");
    },
    three: () => {
        console.log("Three");
    }
}

test.main();
