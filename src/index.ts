import {randomNumberOfRange, factorial, HeapSort, QuickSort} from './utils/utils'

abstract class AClass {
    Numbers = []
    constructor(n:number) {
        this.fill(n)
    }

    private fill(n: number) {
        for(let i = 0; i < n; i++) {
            //configure range
            this.Numbers.push(randomNumberOfRange(1, 10))
        }
    }

    protected factorial(): bigint[] {
        return this.Numbers.map(n => factorial(n))
    }

    abstract sort():void
}

class Class1 extends AClass {
    public sort(): bigint[] {
        HeapSort(this.Numbers)
        return this.factorial()
    }
}

class Class2 extends AClass {
    public sort(): bigint[] {
        this.Numbers = QuickSort(this.Numbers)
        return this.factorial()
    }
}