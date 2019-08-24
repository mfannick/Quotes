import { CountingDatePipe } from './counting-date.pipe';

describe('CountingDatePipe', () => {
  it('create an instance', () => {
    const pipe = new CountingDatePipe();
    expect(pipe).toBeTruthy();
  });
});
