import Student from "@domain/student/entities/Student";

describe("Student", () => {
  it("should create a Student instance successfully", () => {
    const sut = new Student({
      name: "any_name",
      email: "any_email",
      ra: 123456,
      cpf: "any_cpf",
    });

    expect(sut).toBeInstanceOf(Student);
  });

  it("should get the name and this must be the same as the one passed in the instance", () => {
    const sut = new Student({
      name: "any_name",
      email: "any_email",
      ra: 123456,
      cpf: "any_cpf",
    });

    expect(sut.getName()).toBe("any_name");
  });

  it("should get the email and this must be the same as the one passed in the instance", () => {
    const sut = new Student({
      name: "any_name",
      email: "any_email",
      ra: 123456,
      cpf: "any_cpf",
    });

    expect(sut.getEmail()).toBe("any_email");
  });
});
