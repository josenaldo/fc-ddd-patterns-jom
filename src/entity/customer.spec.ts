import Customer from "@/entity/customer";

describe("Customer unit testes", ()=> {

  it("should throw error when id is empty", ()=> {

    expect(()=> {
      let customer = new Customer("", "John Doe"); // NOSONAR
    }).toThrow('ID is required'); 

  })
})