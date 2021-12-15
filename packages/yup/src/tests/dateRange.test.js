import { object } from 'yup';

import { avDate, dateRange } from '..';
import DateRangeSchema from '../dateRange';

describe('DateRange', () => {
  test('start comes before end', async () => {
    const schema = dateRange();

    await expect(
      schema.validate({
        startDate: '12/14/2012',
        endDate: '12/13/2012',
      })
    ).rejects.toThrow('Start date must come before end date.');
  });

  test('Invalid Dates', async () => {
    const schema = dateRange();

    await expect(
      schema.validate({
        startDate: '',
        endDate: '12/14/2012',
      })
    ).rejects.toThrow('Start and End Date are required.');
  });

  test('Custom type error message', async () => {
    const schema = dateRange().typeError({ message: 'Custom Error Message' });

    await expect(
      schema.validate({
        startDate: '',
        endDate: '12/14/2012',
      })
    ).rejects.toThrow('Custom Error Message');
  });

  test('startDate comes after min', async () => {
    const schema = dateRange().min('12/12/2012');

    const valid = await schema.isValid({
      startDate: '12/13/2012',
      endDate: '12/14/2012',
    });

    const invalid = await schema.isValid({
      startDate: '12/11/2012',
      endDate: '12/14/2012',
    });

    expect(valid).toBe(true);
    expect(invalid).toBe(false);
  });

  test('dates are between given range', async () => {
    const schema = dateRange().between('12/10/2012', '12/13/2012');

    const valid = await schema.isValid({
      startDate: '12/11/2012',
      endDate: '12/12/2012',
    });

    const invalid = await schema.isValid({
      startDate: '12/09/2012',
      endDate: '12/13/2012',
    });

    expect(valid).toBe(true);
    expect(invalid).toBe(false);
  });

  test('allow custom startDate and endDate keys', async () => {
    const schema = dateRange({
      startKey: 'helloDate',
      endKey: 'worldDate',
    }).isRequired();

    const valid = await schema.isValid({
      helloDate: '12/11/2012',
      worldDate: '12/12/2012',
    });

    const invalid = await schema.isValid({
      startDate: '12/11/2012',
      endDate: '12/12/2012',
    });

    expect(valid).toBe(true);
    expect(invalid).toBe(false);
  });

  test('getValidDate returns moment object', () => {
    const schema = new DateRangeSchema();

    // valid formats
    expect(schema.getValidDate('12/12/2012').isValid()).toBe(true);
    expect(schema.getValidDate('2012-12-12').isValid()).toBe(true);
    expect(schema.getValidDate('12122012').isValid()).toBe(true);
    expect(schema.getValidDate('20121212').isValid()).toBe(true);
    expect(schema.getValidDate(new Date()).isValid()).toBe(true);

    // invalid formats
    expect(schema.getValidDate(null).isValid()).toBe(false);
    expect(schema.getValidDate(undefined).isValid()).toBe(false);
    expect(schema.getValidDate('').isValid()).toBe(false);
    expect(schema.getValidDate('foo').isValid()).toBe(false);
  });

  test('validates conditionally', async () => {
    const schema = object().shape({
      otherDate: avDate(),
      range: dateRange().when('otherDate', (otherDate, schema) => (otherDate !== '' ? schema.min(otherDate) : schema)),
    });

    const valid = await schema.isValid({
      range: {
        startDate: '12/13/2012',
        endDate: '12/14/2012',
      },
      otherDate: '12/12/2012',
    });

    const invalid = await schema.isValid({
      range: {
        startDate: '12/13/2012',
        endDate: '12/14/2012',
      },
      otherDate: '12/12/2013',
    });

    expect(valid).toBe(true);
    expect(invalid).toBe(false);
  });

  test('should validate distance', async () => {
    const schema = dateRange().distance({
      min: {
        value: 5,
        units: 'day',
      },
    });

    const valid = await schema.isValid({
      startDate: '12/11/2012',
      endDate: '12/18/2012',
    });

    const invalid = await schema.isValid({
      startDate: '12/11/2012',
      endDate: '12/13/2012',
    });

    expect(valid).toBe(true);
    expect(invalid).toBe(false);
  });
});
