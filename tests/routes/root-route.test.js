/* eslint-disable no-undef */
const build = require('../../src/app');

let app;
describe('Root route', () => {
  beforeEach(() => {
    app = build();
  })

  afterEach(() => {
    app.close();
  })

  it('shold return 200 when root route is called', async () => {
    const res = await app.inject({
      url: '/'
    });

    expect(res.statusCode).toBe(200); 
    expect(res.json()).toEqual({ hello: 'world' });
  });
})