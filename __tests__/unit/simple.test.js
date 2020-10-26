const func1 = (a,b)=>{
    if(typeof a == Number && typeof b == Number) return a+b;
    return Number(a)+Number(b)
}

describe("Sample Unit for Demo...",()=>{
    it("Should be truthy...",()=>{
        expect(true).toBeTruthy
    })
    it("Should be falsy...",()=>{
        expect(false).toBeFalsy
    })
    it("Should be 1+1=2...",()=>{
        expect(func1(1,1)).toBe(2)
    })
    it("Should be 1+2=3...",()=>{
        expect(func1(1,2)).toBe(3)
    })
});