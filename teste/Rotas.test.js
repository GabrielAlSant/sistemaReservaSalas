const request = require("supertest");
const app = require("../app");

describe("Testes na API /reservas", () => {
  /*
  it("1 GET /reservas deve retornar lista de reservas", async () => {
    const res = await request(app).get("/reservas");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('2 POST /users > deve criar um novo usuário', async () => {
const res = await request(app)
.post('/reservas')
.send({ sala_id: 2, data: '2025-07-25', hora: '08:00:00'});
expect(res.statusCode).toBe(201);
expect(res.body).toHaveProperty('id');
expect(res.body.id).toBe(7);
});

it(' 3 POST /users > deve dar errado por ja está registrado', async () => {
const res = await request(app)
.post('/reservas')
.send({ sala_id: 2, data: '2025-07-25', hora: '08:00:00'});
expect(res.statusCode).toBe(400);
});


it(' 4 POST /users > deve dar errado por dados invalidos', async () => {
const res = await request(app)
.post('/reservas')
.send({data: '2025-07-25', hora: '08:00:00'});
expect(res.statusCode).toBe(400);
});


  it("5 GET /reservas deve retornar se está faltando elementos", async () => {
    const res = await request(app).get("/reservas");
    let estaFaltando = false;
    for (let i = 0; i < res.body.length; i++) {
     if (res.body[i].sala_id == null || res.body[i].data == null || res.body[i].hora == null) {
                estaFaltando = true;
                break;
            }
    }
    expect(estaFaltando).toBe(false);
  });

    it("6 GET /reservas deve retornar se está faltando elementos", async () => {
    await request(app)
    .post('/reservas')
    .send({ sala_id: 2, data: '2025-07-24', hora: '03:00:00'});

     const res = await request(app).get("/reservas");
    let estaNoArray = false;
    for (let i = 0; i < res.body.length; i++) {
     if (res.body[i].sala_id == 2 && res.body[i].data == '2025-07-24' && res.body[i].hora == '03:00:00') {
                estaNoArray = true;
                break;
            }
    }
    expect(estaNoArray).toBe(true);
  });

  
it(' 7 POST /users > deve dar errado por data invalida', async () => {
const res = await request(app)
.post('/reservas')
.send({sala_id: 2, data: '13-06-2025', hora: '01:00:00'});
expect(res.statusCode).toBe(400);
});


 it("8 GET /reservas deve retornar se está faltando elementos", async () => {
  const obj1 = { sala_id: 2, data: '2025-07-10', hora: '01:20:00'}
  const obj2 = { sala_id: 2, data: '2025-07-10', hora: '01:10:00'}

    await request(app)
    .post('/reservas')
    .send(obj1);

    await request(app)
    .post('/reservas')
    .send(obj2);

     const res = await request(app).get("/reservas");
     let estaNoArrayOBJ1 = false;
     let estaNoArrayOBJ2 = false;
     let estaNoArray = false;
    for (let i = 0; i < res.body.length; i++) {
     if (res.body[i].sala_id == obj1.sala_id && res.body[i].data == obj1.data && res.body[i].hora == obj1.hora) {
                estaNoArrayOBJ1 = true;
    }
    if (res.body[i].sala_id == obj2.sala_id && res.body[i].data == obj2.data && res.body[i].hora == obj2.hora) {
                estaNoArrayOBJ2 = true;  
    }
     if (estaNoArrayOBJ1 == true && estaNoArrayOBJ2 == true) {
    estaNoArray = true
    }
  }
    expect(estaNoArray).toBe(true);
  });
  
  it('10 POST /users > uma reserva não pode ser criada com sala_id inexistente', async () => {
const res = await request(app)
.post('/reservas')
.send({sala_id: 15, data: '2025-07-25', hora: '08:00:00'});
expect(res.statusCode).toBe(400);
});
*/



});
