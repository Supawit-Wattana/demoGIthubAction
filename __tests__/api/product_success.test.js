const requests = require('supertest');
const ctrl = require('../../controllers/ctrl.controller');
const app = require('../../app');

beforeAll(()=>{
    var in_db;
    ctrl.dump_products()
    .then((result)=>{
        in_db = result;
    });
    console.log(in_db);
    // ctrl.load_products()
});

afterAll(()=>{
    // ctrl.load_products()
    // jest.clearAllMocks();
});

it('Should get status 400 from Get "/"',()=>{
    // jest.spyOn(db,"get").mockImplementation(()=>{
    //     return {code:200,response:{}}
    // });
    // requests(app)
    // .get('/api/v0/products/')
    // .expect("Content-Type",/json/)
    // .then((res)=>{
    //     console.log(res);
    //     // expect(res).toBe(200)
    // });
    
});

 