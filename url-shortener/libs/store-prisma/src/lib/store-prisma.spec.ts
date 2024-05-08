import { storePrisma } from './store-prisma';

describe('storePrisma', () => {
  it('should work', () => {
    expect(storePrisma()).toEqual('store-prisma');
  });
});
