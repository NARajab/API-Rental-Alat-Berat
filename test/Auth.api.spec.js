const request = require("supertest");
const app = require("../app/index");

describe("API Login", () => {
  it("success login", async () => {
    const user = {
      email: "adminc8@mail.com",
      password: "admin123",
    };
    const response = await request(app).post("/api/v1/auth/login").send(user);
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("Success");
    expect(response.body.message).toBe("Berhasil login");
  });

  it("Failed login because email not found", async () => {
    const user = {
      email: "zzz@gmail.com",
      password: "admin123",
    };
    const response = await request(app).post("/api/v1/auth/login").send(user);
    expect(response.statusCode).toBe(404);
    expect(response.body.status).toBe("Failed");
    expect(response.body.message).toBe("Email tidak ditemukan");
  });

  it("Failed login because wrong password", async () => {
    const user = {
      email: "adminc8@mail.com",
      password: "salahpassword",
    };
    const response = await request(app).post("/api/v1/auth/login").send(user);

    expect(response.statusCode).toBe(401);
    expect(response.body.status).toBe("Failed");
    expect(response.body.message).toBe("Kata sandi salah");
  });
});

describe("API Authenticate", () => {
  it("success get profile by token", async () => {
    const user = {
      email: "adminc8@mail.com",
      password: "admin123",
    };
    const response = await request(app).post("/api/v1/auth/login").send(user);
    const userToken = response.body;
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("Success");
    expect(response.body.message).toBe("Berhasil login");

    const responseAuthMe = await request(app)
      .get("/api/v1/auth/authMe")
      .set("Authorization", `Bearer ${userToken.data}`)
      .send(user);
    expect(responseAuthMe.statusCode).toBe(200);
    expect(responseAuthMe.body.status).toBe("Success");
  });
});
